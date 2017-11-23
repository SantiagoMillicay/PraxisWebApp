require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

//------------------------------------------------------- websocket
var datos = [50,30,25,10];

const net = require('net');
const server_s = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');

  c.wildcard = false;
  c.bidirectional = true;
  c.setKeepAlive(true, 500);
  c.setTimeout(10000);

  c.on('end', () => {
    console.log('client end');
  });
  c.on('data', (data) => {

    // console.log(data.toString());

    var datos_str = data.toString() + ";";		//lo convierte en string (ver si conviene Mayuscula)

		//------------------------------------ Parseo de mensaje


		var rpt = datos_str.split(";");

    // console.log(rpt);

  	//var id  = rpt[0];
  	///var st  = rpt[1];
    //var rp  = rpt[2];
    //datos[0] = rpt[3];
    //datos[1] = rpt[4];
    //datos[2] = rpt[5];
    //datos[3] = rpt[6];
    //var ak  = rpt[7];

    var dato = {
      id:null,
      st:null,
      rp:null,
      datos:[]
    };

    console.log(data.toString());

    var datos_str = data.toString() + ";";		//lo convierte en string (ver si conviene Mayuscula)

		//------------------------------------ Parseo de mensaje


		var rpt = datos_str.split(";");

    // console.log(rpt);

  	dato.id  = rpt[0];
  	dato.st  = rpt[1];
    dato.rp  = rpt[2];

    //console.log(dato.id);

    if (dato.id=="T1") {
      //console.log("timer");
      if(dato.rp=="D1"){
        dato.datos[0] = rpt[3];
        dato.datos[1] = rpt[4];
        dato.datos[2] = rpt[5];
        var ak  = rpt[6];
        io.emit('data_method1',dato);
      }else if (dato.rp=="D2") {
        dato.datos[0] = rpt[3];
        dato.datos[1] = rpt[4];
        dato.datos[2] = rpt[5];
        dato.datos[3] = rpt[6];
        dato.datos[4] = rpt[7];
        dato.datos[5] = rpt[8];
        dato.datos[6] = rpt[9];
        dato.datos[7] = rpt[10];
        dato.datos[8] = rpt[11];
        dato.datos[9] = rpt[12];
        dato.datos[10] = rpt[13];
        dato.datos[11] = rpt[14];
        var ak  = rpt[15];

        io.emit('data_method2',dato);
      }else {
        console.log("Error en Respuesta");
      }
    }

    if (dato.id=="A1") {
      if (dato.rp=="D1") {
        dato.datos[0] = rpt[3];
        dato.datos[1] = rpt[4];
        dato.datos[2] = rpt[5];
        //var ak  = rpt[6];
        console.log("dato 1");
        io.emit('data_method4',dato);    //datos acelerometro
      } else if(dato.rp=="D2"){
        dato.datos[0] = rpt[3];
        dato.datos[1] = rpt[4];
        dato.datos[2] = rpt[5];
        //var ak  = rpt[6];
        console.log("dato 2");
        io.emit('data_method5',dato);    //datos giroscopio
      }else {
        console.log("Error en Respuesta");
      }
    }

    //console.log(dato);

  });
  c.on('close', function() {
    console.log('client close');
  });
  c.on('timeout', function () {
    console.log('Socket did timeout');
    c.end();
  });
  // c.write('hello\r\n');
  // c.pipe(c);
});

server_s.on('error', (err) => {
  throw err;
});
server_s.listen(4000, () => {
  console.log('server bound');
});

//------------------------------------------------------- socket.io

var io = require('socket.io')(server);
// var datos = [50,30,25,10];

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  //socket.on('emit_method', function(msg){
    //console.log('message: ' + msg);     // codigo para probar la transmicion
    //io.emit('data_method1',datos);
  //});
});

//-------------------------------------------------------

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

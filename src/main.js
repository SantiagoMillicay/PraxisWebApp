// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io';
import Home from './components/home.vue'
import equipodetrabajo from './components/equipodetrabajo.vue'

//MUY IMPORTANTE PARA QUE FUNCIONE VUETIFY
import('../node_modules/vuetify/dist/vuetify.min.css')

//____________TEORIA_____________________
import u1 from './components/u1.vue'
import u2 from './components/u2.vue'
import u3 from './components/u3.vue'
import u4 from './components/u4.vue'
import u5 from './components/u5.vue'
import u6 from './components/u6.vue'
import u7 from './components/u7.vue'
import u8 from './components/u8.vue'
import u9 from './components/u9.vue'
import u10 from './components/u10.vue'
import u11 from './components/u11.vue'
import u12 from './components/u12.vue'
import u13 from './components/u13.vue'
import u14 from './components/u14.vue'
import u15 from './components/u15.vue'
import u16 from './components/u16.vue'

//_______TRABAJOS PRACTICOS_____________
import tp1 from './components/tp1.vue'
import tp2 from './components/tp2.vue'
import tp3 from './components/tp3.vue'
import tp4 from './components/tp4.vue'
import tp5 from './components/tp5.vue'
import tp6 from './components/tp6.vue'
import tp7 from './components/tp7.vue'
import tp8 from './components/tp8.vue'
import tp9 from './components/tp9.vue'
import tp10 from './components/tp10.vue'
import tp11 from './components/tp11.vue'
import tp12 from './components/tp12.vue'
import tp13 from './components/tp13.vue'
import tp14 from './components/tp14.vue'
import tp15 from './components/tp15.vue'
import tp16 from './components/tp16.vue'

//_______LABORATORIOS__________________
import acel from './components/acel.vue'
// import timer from './components/timer.vue'
import giro from './components/giro.vue'
import timerplus from './components/timerplus.vue'

//_______PIZARRA__________________
// import pizarra from './components/pizarra.vue'
// var app = require('express')()
// var server = require('http').Server(app)
// var io = require('socket.io')(server)
//
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html')
// })
// io.on('connection', function(socket){
//   socket.on('pixel', function(p){
//     socket.broadcast.emit('nuevo pixel',p)
//   })
// })
// server.listen(8080)
//________________________________


Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueSocketio, 'http://localhost:8080');
Vue.config.productionTip = false


const  routes = [
    {path: '/', component: Home},
    {path: '/equipodetrabajo', component: equipodetrabajo},
    //____________TEORIA_____________________
    {path: '/u1/:teamId', component: u1},
    {path: '/u2/:teamId', component: u2},
    {path: '/u3/:teamId', component: u3},
    {path: '/u4/:teamId', component: u4},
    {path: '/u5/:teamId', component: u5},
    {path: '/u6/:teamId', component: u6},
    {path: '/u7/:teamId', component: u7},
    {path: '/u8/:teamId', component: u8},
    {path: '/u9/:teamId', component: u9},
    {path: '/u10/:teamId', component: u10},
    {path: '/u11/:teamId', component: u11},
    {path: '/u12/:teamId', component: u12},
    {path: '/u13/:teamId', component: u13},
    {path: '/u14/:teamId', component: u14},
    {path: '/u15/:teamId', component: u15},
    {path: '/u16/:teamId', component: u16},
    //_______TRABAJOS PRACTICOS_____________
    {path: '/tp1/:teamId', component: tp1},
    {path: '/tp2/:teamId', component: tp2},
    {path: '/tp3/:teamId', component: tp3},
    {path: '/tp4/:teamId', component: tp4},
    {path: '/tp5/:teamId', component: tp5},
    {path: '/tp6/:teamId', component: tp6},
    {path: '/tp7/:teamId', component: tp7},
    {path: '/tp8/:teamId', component: tp8},
    {path: '/tp9/:teamId', component: tp9},
    {path: '/tp10/:teamId', component: tp10},
    {path: '/tp11/:teamId', component: tp11},
    {path: '/tp12/:teamId', component: tp12},
    {path: '/tp13/:teamId', component: tp13},
    {path: '/tp14/:teamId', component: tp14},
    {path: '/tp15/:teamId', component: tp15},
    {path: '/tp16/:teamId', component: tp16},
//_______LABORATORIOS__________________
    {path: '/acel', component: acel},
    // {path: '/timer', component: timer},
    {path: '/giro', component: giro},
    {path: '/timerplus', component: timerplus},

//_______PIZARRA__________________
    // {path: '/pizarra', component: pizarra}

  ];

const router = new VueRouter({
  routes,
  model: 'history'
});

new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render: h=> h(App)
});

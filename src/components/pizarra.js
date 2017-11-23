// <script src="/socket.io/socket.io.js" charset="utf-8"></script>
//
//<script type="text/javascript">
      var socket = io.connect()
      socket.on('nuevo pixel', dibujar)
      window.addEventListener('mousemove', function(e) {
        var p = {
          x: e.clientX,
          y: e.clientY
        }
        dibujar(p)
        socket.emit('pixel',p)
      })
        var context = document.getElementById('canvas').getContext('2d')
        function dibujar(p){
          context.fillRect(p.x,p.y,5,5)
        }
// </script>

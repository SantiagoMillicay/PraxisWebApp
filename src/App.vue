<template>
  <v-app id="app">

      <v-navigation-drawer
      persistent clipped="clipped" :floating="true" v-model="drawer" light class="pb-0"
      height="100%" overflow enable-resize-watcher>
        <v-list dense>
          <div v-for="(item, i) in items">
                    <v-layout row v-if="item.heading" align-center :key="i">
                      <v-flex xs6>
                        <v-subheader v-if="item.heading">
                          {{ item.heading }}
                        </v-subheader>
                      </v-flex>
                      <v-flex xs6 class="text-xs-center">
                      </v-flex>
                    </v-layout>

                    <v-divider
                      dark dark v-else-if="item.divider" class="my-4" :key="i">
                    </v-divider>

                    <v-list-group v-else-if="item.children" v-model="item.model" no-action>

                      <v-list-tile slot="item" @click="">
                        <v-list-tile-action>
                        <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                        <v-list-tile-title class="grey--text">
                          <b>{{ item.text }}</b>
                        </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>

                      <v-list-tile v-for="(child, i) in item.children" :key="i" @click="">
                        <v-list-tile-action v-if="child.icon">
                          <v-icon>
                            {{ child.icon }}
                          </v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                              <router-link :to="{path:child.ruta}"><h6>{{ child.text }}</h6>
                              </router-link>
                            </v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list-group>

                    <v-list-tile v-else @click="">
                      <v-list-tile-action>
                        <v-icon>
                          {{ item.icon }}
                        </v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          {{ item.text }}
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>

            </div>
          </v-list>
          <v-btn  success
                  @click.native="loader = 'loading2'"
                  large
                  class="button" id="imprimecontenido">
          <v-icon class="fa fa-print fa-lg"></v-icon><p class="descarga">Imprimir Contenido</p>
        </v-btn>
          <v-btn  success
                  @click.native="loader = 'loading2'"
                  large
                  class="button" id="downloadmypdf">
          <v-icon class="fa fa-file-pdf-o fa-lg"></v-icon><p class="descarga">Descargar Grafica</p>
        </v-btn>
        </v-navigation-drawer>

              <v-toolbar fixed class="green" dark>
                <v-toolbar-side-icon @click.stop="drawer = !drawer" class="title">
                </v-toolbar-side-icon>
                  <router-link to="/"><h4 class="home">Física</h4>
                  </router-link>
              </v-toolbar>

              <main>
                <v-container fluid class="grey lighten-4">
                    <router-view></router-view>
                </v-container>
              </main>
            </v-app>
          </template>

<script>
export default {
    sockets: {
      data_method3: function(val){
        this.equipos(val);
      }
    },
  data () {
    return {

      clipped: false,
      drawer: true,
      fixed: false,
      items: [

        {

          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'TEORIA',
          model: false,
          children: [
            {text: 'Unidad N° 1',
             ruta: '/u1/1'
            },
            {text: 'Unidad N° 2',
             ruta: '/u2/2'
            },
            {text: 'Unidad N° 3',
             ruta: '/u3/3'
            },
            {text: 'Unidad N° 4',
             ruta: '/u4/4'
            },
            {text: 'Unidad N° 5',
             ruta: '/u5/5'
            },
            {text: 'Unidad N° 6',
             ruta: '/u6/6'
            },
            {text: 'Unidad N° 7',
             ruta: '/u7/7'
            },
            {text: 'Unidad N° 8',
             ruta: '/u8/8'
            },
            {text: 'Unidad N° 9',
             ruta: '/u9/9'
            },
            {text: 'Unidad N° 10',
             ruta: '/u10/10'
            },
            {text: 'Unidad N° 11',
             ruta: '/u11/11'
            },
            {text: 'Unidad N° 12',
             ruta: '/u12/12'
            },
            {text: 'Unidad N° 13',
             ruta: '/u13/13'
            },
            {text: 'Unidad N° 14',
             ruta: '/u14/14'
            },
            {text: 'Unidad N° 15',
             ruta: '/u15/15'
            },
            {text: 'Unidad N° 16',
             ruta: '/u16/16'
            },
            {divider: true }
          ],
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'EJERCICIOS PRACTICOS',
          model: false,
          children: [

            {text: 'TPN°1',
             ruta: '/tp1/1'
            },
            {text: 'TPN°2',
             ruta: '/tp2/2'
            },
            {text: 'TPN°3',
             ruta: '/tp3/3'
            },
            {text: 'TPN°4',
             ruta: '/tp4/4'
            },
            {text: 'TPN°5',
             ruta: '/tp5/5'
            },
            {text: 'TPN°6',
             ruta: '/tp6/6'
            },
            {text: 'TPN°7',
             ruta: '/tp7/7'
            },
            {text: 'TPN°8',
             ruta: '/tp8/8'
            },
            {text: 'TPN°9',
             ruta: '/tp9/9'
            },
            {text: 'TPN°10',
             ruta: '/tp10/10'
            },
            {text: 'TPN°11',
             ruta: '/tp11/11'
            },
            {text: 'TPN°12',
             ruta: '/tp12/12'
            },
            {text: 'TPN°13',
             ruta: '/tp13/13'
            },
            {text: 'TPN°14',
             ruta: '/tp14/14'
            },
            {text: 'TPN°15',
             ruta: '/tp15/15'
            },
            {text: 'TPN°16',
             ruta: '/tp16/16'
           },
            {divider: true }
          ],
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'LABORATORIOS',
          model: false,
          children: [
            // {icon: 'fa-microchip', text: 'Plataforma 1'},
            // {icon: 'fa-microchip', text: 'Plataforma 2'},
            // {divider: true },
            {icon: 'fa-area-chart', text: 'ACELEROMETRO',ruta:'/acel'},
            // {icon: 'fa-area-chart', text: 'TIMER',ruta:'/timer'},
            {icon: 'fa-area-chart', text: 'GIROSCOPIO',ruta:'/giro'},
            {icon: 'fa-area-chart', text: 'TIMER',ruta:'/timerplus'},
            {divider: true }
          ],
        },
        //   {
        //     icon: 'keyboard_arrow_up',
        //     'icon-alt': 'keyboard_arrow_down',
        //     text: 'PIZARRA',
        //     model: false,
        //     children: [
        //
        //       {icon: 'fa-pencil-square-o', text: 'PIZARRA',ruta:'/pizarra'},
        //       {divider: true },
        //     ],
        // }
      ]

    }
  }

  // methods: {
  //   goHome(){
  //     this.$router.push('/');
  //   }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/


}

template v-app v-navigation-drawer v-list div v-list-group li {
  float: left;
}
template v-app v-navigation-drawer router-link {
  float: left;
  clear: right;
}

</style>

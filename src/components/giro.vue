<template>
  <div class="hello">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Grafica de Giroscopio</div>
          </v-card-title>
          <v-container>
            <div class="">
                <line-chart :chart-data="datacollection"
                            :options="{responsive: true, maintainAspectRatio: false}">
                </line-chart>
                <v-btn @click="fillData()">Random Data</v-btn>
          </div>
          </v-container>
        </v-card>
        <br>
          <v-flex xs12 sm12  v-for="dato, i in datos">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Dato N° <b>{{i}}</b> Recibido de <b>{{dato.id}}</b> :  <span>{{dato.datos}}</span> </h3>
                </div>
              </v-card-title>
            </v-card>
            <br>
          </v-flex>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>

import LineChart from './LineChartPlus.js'
export default {
  name:'giro',
  components: {
    LineChart
  },
    data () {
      return {
        datacollection: null,
        datos: [],
        equipos: [],
      }
    },
    // watch: {
    //     equipos: function () {
    //         console.log(this.equipos);
    //         this.$dispatch('actu_equipos', this.equipos);
    //       }
    // },
    sockets:{
      connect: function(){
        console.log('socket connected')
      },
      customEmit: function(val){
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      },
      data_method1: function(val){
        // console.log(val)

        this.datos.push(val);

        this.equipos.push(val.id);

        var segundos = Number(val.datos[1]) ;
        var decimas = Number((val.datos[2] / 100).toFixed(2)) ;
        var tiempo  = segundos+decimas;
        //var decimal = (val.datos[2]/100);
        //console.log(segundos);
        //console.log(decimas);
        // console.log(val.datos[2]/100)

        this.datacollection = {
          labels: ['0', '100'],
          datasets: [
            {
              label: 'Acelerometro',
              // backgroundColor: '#7cf97a',
              data: [0,tiempo]
            }
          ]
        }
      },
      data_method2: function(val){
        // console.log(val)

        this.datos.push(val);

        var segundos = Number(val.datos[1]) ;
        var decimas = Number((val.datos[2] / 100).toFixed(2)) ;
        var tiempo1  = segundos+decimas;

        var segundos = Number(val.datos[4]) ;
        var decimas = Number((val.datos[5] / 100).toFixed(2)) ;
        var tiempo2  = segundos+decimas;

        var segundos = Number(val.datos[7]) ;
        var decimas = Number((val.datos[8] / 100).toFixed(2)) ;
        var tiempo3  = segundos+decimas;

        var segundos = Number(val.datos[10]) ;
        var decimas = Number((val.datos[11] / 100).toFixed(2)) ;
        var tiempo4  = segundos+decimas;

        //var decimal = (val.datos[2]/100);
        //console.log(segundos);
        //console.log(decimas);
        // console.log(val.datos[2]/100)

        this.datacollection = {
          labels: ['0', '25', '50', '75','100'],
          datasets: [
            {
              label: 'Giroscopio',
              // backgroundColor: '#7cf97a',
              data: [0,tiempo1,tiempo2,tiempo3,tiempo4]
            }
          ]
        }
      }
    },
    mounted () {
         this.fillData()
       },
       methods: {
         fillData () {
           this.datacollection = {
             labels: ['0', '25', '50', '75','100'],
             datasets: [
               {
                 label: 'X',
                 backgroundColor: '#c1babb',
                 data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
               },
               {
                 label: 'Y',
                 backgroundColor: '#726d6d',
                 data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
               },
               {
                 label: 'Z',
                 backgroundColor: '#383535',
                 data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
               }
             ]
           }
         },
         getRandomInt () {
           return Math.floor(Math.random() * (50 - 5 + 1)) + 5
         }
       }
     }
   </script>

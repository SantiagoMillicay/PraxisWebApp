<template>
  <div class="hello">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Grafica de Acelerometro</div>
          </v-card-title>
          <v-container>
            <div class="">
                <line-chart :chart-data="datacollection"
                            :options="{responsive: true, maintainAspectRatio: false}">
                </line-chart>
                <!-- <v-btn @click="fillData()">Random Data</v-btn> -->
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
  name:'acel',
  components: {
    LineChart
  },
    data () {
      return {
        datacollection: {
          labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
                  // ,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49
                  ],
          datasets: [
            {
              label: 'X',
              backgroundColor: '#42f272',
              data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    // ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ]
            },
            {
              label: 'Y',
              backgroundColor: '#42f412',
              data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    // ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ]
            },
            {
              label: 'Z',
              backgroundColor: '#42f6e2',
              data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    // ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ]
            },
          ]
        },
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
      data_method4: function(val){
        console.log(val)

        // this.datos.push(val);

        this.equipos.push(val.id);

        //var segundos = Number(val.datos[1]) ;
        //var decimas = Number((val.datos[2] / 100).toFixed(2)) ;
        //var tiempo  = segundos+decimas;
        //var decimal = (val.datos[2]/100);
        //console.log(segundos);
        //console.log(decimas);
        // console.log(val.datos[2]/100)

        //this.datacollection.datasets[0].data[0] = val.datos[0];

        // console.log(this.datacollection.datasets[0].data[0])
        // console.log(this.datacollection.datasets[1].data[0])
        // console.log(this.datacollection.datasets[2].data[0])

        this.datacollection = {
          labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
                  // ,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49
                  ],
          datasets: [
              // label: 'Acelerometro',
              // backgroundColor: '#7cf97a',
                {
                  label: 'X',
                  backgroundColor: '#42f4e2',
                  data: [
                    this.datacollection.datasets[0].data[1],
                    this.datacollection.datasets[0].data[2],
                    this.datacollection.datasets[0].data[3],
                    this.datacollection.datasets[0].data[4],
                    this.datacollection.datasets[0].data[5],
                    this.datacollection.datasets[0].data[6],
                    this.datacollection.datasets[0].data[7],
                    this.datacollection.datasets[0].data[8],
                    this.datacollection.datasets[0].data[9],
                    this.datacollection.datasets[0].data[10],
                    this.datacollection.datasets[0].data[11],
                    this.datacollection.datasets[0].data[12],
                    this.datacollection.datasets[0].data[13],
                    this.datacollection.datasets[0].data[14],
                    this.datacollection.datasets[0].data[15],
                    // this.datacollection.datasets[0].data[16],
                    // this.datacollection.datasets[0].data[17],
                    // this.datacollection.datasets[0].data[18],
                    // this.datacollection.datasets[0].data[19],
                    // this.datacollection.datasets[0].data[20],
                    // this.datacollection.datasets[0].data[21],
                    // this.datacollection.datasets[0].data[22],
                    // this.datacollection.datasets[0].data[23],
                    // this.datacollection.datasets[0].data[24],
                    // this.datacollection.datasets[0].data[25],
                    // this.datacollection.datasets[0].data[26],
                    // this.datacollection.datasets[0].data[27],
                    // this.datacollection.datasets[0].data[28],
                    // this.datacollection.datasets[0].data[29],
                    // this.datacollection.datasets[0].data[30],
                    // this.datacollection.datasets[0].data[31],
                    // this.datacollection.datasets[0].data[32],
                    // this.datacollection.datasets[0].data[33],
                    // this.datacollection.datasets[0].data[34],
                    // this.datacollection.datasets[0].data[35],
                    // this.datacollection.datasets[0].data[36],
                    // this.datacollection.datasets[0].data[37],
                    // this.datacollection.datasets[0].data[38],
                    // this.datacollection.datasets[0].data[39],
                    // this.datacollection.datasets[0].data[40],
                    // this.datacollection.datasets[0].data[41],
                    // this.datacollection.datasets[0].data[42],
                    // this.datacollection.datasets[0].data[43],
                    // this.datacollection.datasets[0].data[44],
                    // this.datacollection.datasets[0].data[45],
                    // this.datacollection.datasets[0].data[46],
                    // this.datacollection.datasets[0].data[47],
                    // this.datacollection.datasets[0].data[48],
                    // this.datacollection.datasets[0].data[49],
                    val.datos[0]]
                },
                {
                  label: 'Y',
                  backgroundColor: '#41aff4',
                  data: [
                    this.datacollection.datasets[1].data[1],
                    this.datacollection.datasets[1].data[2],
                    this.datacollection.datasets[1].data[3],
                    this.datacollection.datasets[1].data[4],
                    this.datacollection.datasets[1].data[5],
                    this.datacollection.datasets[1].data[6],
                    this.datacollection.datasets[1].data[7],
                    this.datacollection.datasets[1].data[8],
                    this.datacollection.datasets[1].data[9],
                    this.datacollection.datasets[1].data[10],
                    this.datacollection.datasets[1].data[11],
                    this.datacollection.datasets[1].data[12],
                    this.datacollection.datasets[1].data[13],
                    this.datacollection.datasets[1].data[14],
                    this.datacollection.datasets[1].data[15],
                    // this.datacollection.datasets[1].data[16],
                    // this.datacollection.datasets[1].data[17],
                    // this.datacollection.datasets[1].data[18],
                    // this.datacollection.datasets[1].data[19],
                    // this.datacollection.datasets[1].data[20],
                    // this.datacollection.datasets[1].data[21],
                    // this.datacollection.datasets[1].data[22],
                    // this.datacollection.datasets[1].data[23],
                    // this.datacollection.datasets[1].data[24],
                    // this.datacollection.datasets[1].data[25],
                    // this.datacollection.datasets[1].data[26],
                    // this.datacollection.datasets[1].data[27],
                    // this.datacollection.datasets[1].data[28],
                    // this.datacollection.datasets[1].data[29],
                    // this.datacollection.datasets[1].data[30],
                    // this.datacollection.datasets[1].data[31],
                    // this.datacollection.datasets[1].data[32],
                    // this.datacollection.datasets[1].data[33],
                    // this.datacollection.datasets[1].data[34],
                    // this.datacollection.datasets[1].data[35],
                    // this.datacollection.datasets[1].data[36],
                    // this.datacollection.datasets[1].data[37],
                    // this.datacollection.datasets[1].data[38],
                    // this.datacollection.datasets[1].data[39],
                    // this.datacollection.datasets[1].data[40],
                    // this.datacollection.datasets[1].data[41],
                    // this.datacollection.datasets[1].data[42],
                    // this.datacollection.datasets[1].data[43],
                    // this.datacollection.datasets[1].data[44],
                    // this.datacollection.datasets[1].data[45],
                    // this.datacollection.datasets[1].data[46],
                    // this.datacollection.datasets[1].data[47],
                    // this.datacollection.datasets[1].data[48],
                    // this.datacollection.datasets[1].data[49],
                    val.datos[1]]
                },
                {
                  label: 'Z',
                  backgroundColor: '#4149f4',
                  data: [
                    this.datacollection.datasets[2].data[1],
                    this.datacollection.datasets[2].data[2],
                    this.datacollection.datasets[2].data[3],
                    this.datacollection.datasets[2].data[4],
                    this.datacollection.datasets[2].data[5],
                    this.datacollection.datasets[2].data[6],
                    this.datacollection.datasets[2].data[7],
                    this.datacollection.datasets[2].data[8],
                    this.datacollection.datasets[2].data[9],
                    this.datacollection.datasets[2].data[10],
                    this.datacollection.datasets[2].data[11],
                    this.datacollection.datasets[2].data[12],
                    this.datacollection.datasets[2].data[13],
                    this.datacollection.datasets[2].data[14],
                    this.datacollection.datasets[2].data[15],
                    // this.datacollection.datasets[2].data[16],
                    // this.datacollection.datasets[2].data[17],
                    // this.datacollection.datasets[2].data[18],
                    // this.datacollection.datasets[2].data[19],
                    // this.datacollection.datasets[2].data[20],
                    // this.datacollection.datasets[2].data[21],
                    // this.datacollection.datasets[2].data[22],
                    // this.datacollection.datasets[2].data[23],
                    // this.datacollection.datasets[2].data[24],
                    // this.datacollection.datasets[2].data[25],
                    // this.datacollection.datasets[2].data[26],
                    // this.datacollection.datasets[2].data[27],
                    // this.datacollection.datasets[2].data[28],
                    // this.datacollection.datasets[2].data[29],
                    // this.datacollection.datasets[2].data[30],
                    // this.datacollection.datasets[2].data[31],
                    // this.datacollection.datasets[2].data[32],
                    // this.datacollection.datasets[2].data[33],
                    // this.datacollection.datasets[2].data[34],
                    // this.datacollection.datasets[2].data[35],
                    // this.datacollection.datasets[2].data[36],
                    // this.datacollection.datasets[2].data[37],
                    // this.datacollection.datasets[2].data[38],
                    // this.datacollection.datasets[2].data[39],
                    // this.datacollection.datasets[2].data[40],
                    // this.datacollection.datasets[2].data[41],
                    // this.datacollection.datasets[2].data[42],
                    // this.datacollection.datasets[2].data[43],
                    // this.datacollection.datasets[2].data[44],
                    // this.datacollection.datasets[2].data[45],
                    // this.datacollection.datasets[2].data[46],
                    // this.datacollection.datasets[2].data[47],
                    // this.datacollection.datasets[2].data[48],
                    // this.datacollection.datasets[2].data[49],
                    val.datos[2]]
                }

              ]
            }

        }
      },
      data_method5: function(val){
        console.log(val)

        this.datos.push(val);

        // var segundos = Number(val.datos[1]) ;
        // var decimas = Number((val.datos[2] / 100).toFixed(2)) ;
        // var tiempo1  = segundos+decimas;
        //
        // var segundos = Number(val.datos[4]) ;
        // var decimas = Number((val.datos[5] / 100).toFixed(2)) ;
        // var tiempo2  = segundos+decimas;
        //
        // var segundos = Number(val.datos[7]) ;
        // var decimas = Number((val.datos[8] / 100).toFixed(2)) ;
        // var tiempo3  = segundos+decimas;
        //
        // var segundos = Number(val.datos[10]) ;
        // var decimas = Number((val.datos[11] / 100).toFixed(2)) ;
        // var tiempo4  = segundos+decimas;

        //var decimal = (val.datos[2]/100);
        //console.log(segundos);
        //console.log(decimas);
        // console.log(val.datos[2]/100)

        // this.datacollection = {
        //   labels: ['0', '25', '50', '75','100'],
        //   datasets: [
        //     {
        //       label: 'Acelerometro',
        //       // backgroundColor: '#7cf97a',
        //       data: [0,tiempo1,tiempo2,tiempo3,tiempo4]
        //     }
        //   ]
        // }

    }
    // ,
    // mounted () {
    //      //this.fillData()
    //    },
    //    methods: {
        //  fillData () {
        //    this.datacollection = {
        //      labels: ['0', '25', '50','75','100'],
        //      datasets: [
        //        {
        //          label: 'X',
        //          backgroundColor: '#42f4e2',
        //          data: [1,1,1,1,1]
        //        },
        //        {
        //          label: 'Y',
        //          backgroundColor: '#41aff4',
        //          data: [1,1,1,1,1]
        //        },
        //        {
        //          label: 'Z',
        //          backgroundColor: '#4149f4',
        //          data: [1,1,1,1,1]
        //        }
        //      ]
        //    }
        //  },
        //  getRandomInt () {
        //    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        //  }
      //  }
     }
   </script>

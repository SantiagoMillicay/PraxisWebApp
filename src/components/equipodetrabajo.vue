<template>
  <v-container fluid grid-list-md>

<!-- _____________COLL_______________ -->
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card align="center">
          <img class="mt-3 mb-3" src="../assets/Equipo/praxis.png" height="230" width="230" alt="Not Found">
        </v-card>
      </v-flex>
      <v-flex d-flex ls12 md8 md8>
        <v-card color="blue lighten-2" dark>
          <v-card-title primary class="title">Coll Diego</v-card-title>

          <v-card-text
            v-text="collformacion.slice(0, 100)">
          </v-card-text>

          <v-card-text
            v-text="collencargado.slice(0, 100)">
          </v-card-text>

          <v-card-text
            v-text="collsoft.slice(0, 300)">
          </v-card-text>

          <v-card-text
            v-text="colllenguajes.slice(0, 300)">
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>

<!-- _______________SANTIAGO__________ -->
<v-layout row wrap>
  <v-flex d-flex xs12 sm6 md4>
    <v-card align="center">
      <img class="mt-3 mb-3" src="../assets/Equipo/praxis.png" height="230" width="230" alt="Not Found">
    </v-card>
  </v-flex>
  <v-flex d-flex ls12 md8 md8>
    <v-card color="blue lighten-2" dark>
      <v-card-title primary class="title">Millicay Santiago</v-card-title>

      <v-card-text
        v-text="sanformacion.slice(0, 100)">
      </v-card-text>

      <v-card-text
        v-text="sanencargado.slice(0, 100)">
      </v-card-text>

      <v-card-text
        v-text="sansoft.slice(0, 300)">
      </v-card-text>

      <v-card-text
        v-text="sanlenguajes.slice(0, 300)">
      </v-card-text>

    </v-card>
  </v-flex>
</v-layout>



  </v-container>
</template>

<script>
  export default {
    data: () => ({
      collformacion: 'Formación Académica: Universidad Tecnológica Nacional-Facultad Regional La Rioja',
      collencargado: 'Encargado: Desarrollo y programación de Back-end - Programación de firmaware',
      collsoft:'Manejo de Softwares: ',
      colllenguajes:'Manejo de lenguajes ',

      sanformacion: 'Formación Académica: Universidad Tecnológica Nacional-Facultad Regional La Rioja',
      sanencargado: 'Encargado: Desarrollo y programación de Front-end - Diseño y fabricación de PCBs',
      sansoft:'Manejo de Softwares: ',
      sanlenguajes:'Manejo de lenguajes '
    })
  }
</script>

<!-- <template lang="html">
  <div id="contenido">

    <h3 class="grey--text">Equipo de Trabajo</h3> -->

    <!-- <img class="logoutn" src="../assets/utn.png" height="300" width="200" alt="Not Found"> -->
    <!-- <section class="integrante">
      <section class="imagen">
        <img class="logoproyecto" src="../assets/Equipo/praxis.png" height="250" width="250" alt="Not Found">
      </section>
      <section class="descripcion">
        <h3>Coll Diego (31)</h3>
        <p><b>Formación Académica:</b> Universidad Tecnológica Nacional-Facultad Regional La Rioja</p>
        <p><b>Encargado:</b> Desarrollo y programación de Back-end - Programación de firmaware</p>
        <p><b>Manejo de Software:</b> </p>
        <p><b>Manejo de lenguajes:</b> </p>
        <p class="lema"><b>""</b></p>
      </section>
    </section>

    <section class="integrante">
      <section class="imagen">
        <img class="logoproyecto" src="../assets/Equipo/praxis.png" height="250" width="250" alt="Not Found">
      </section>
      <section class="descripcion">
        <h3>Millicay Santiago (24) <b>CEO</b></h3>
        <p><b>Formación Académica:</b> Universidad Tecnológica Nacional-Facultad Regional La Rioja</p>
        <p><b>Encargado:</b> Desarrollo y programación de Front-end - Diseño de PCBs</p>
        <p><b>Manejo de Software:</b> </p>
        <p><b>Manejo de lenguajes:</b> </p>
        <p class="lema"><b>""</b></p>
      </section>
    </section>

    <section class="integrante">
      <section class="imagen">
        <img class="logoproyecto" src="../assets/Equipo/praxis.png" height="250" width="250" alt="Not Found">
      </section>
      <section class="descripcion">
        <h3>Contreras Bruno (24)</h3>
        <p><b>Formación Académica:</b> Universidad Tecnológica Nacional-Facultad Regional La Rioja</p>
        <p><b>Encargado:</b> Programación de sensor de proximidad - Diseño de esquemas circuitales - Ejecución de PCB</p>
        <p><b>Manejo de Software:</b> </p>
        <p><b>Manejo de lenguajes:</b> </p>
        <p class="lema"><b>""</b></p>
      </section>
    </section>

    <section class="integrante">
      <section class="imagen">
        <img class="logoproyecto" src="../assets/Equipo/praxis.png" height="250" width="250" alt="Not Found">
      </section>
      <section class="descripcion">
        <h3>Quiroga Ceferino (28)</h3>
        <p><b>Formación Académica:</b> Universidad Tecnológica Nacional-Facultad Regional La Rioja</p>
        <p><b>Encargado:</b> Desarrollo de controlador para onda estacionaria</p>
        <p><b>Manejo de Software:</b> </p>
        <p><b>Manejo de lenguajes:</b> </p>
        <p class="lema"><b>""</b></p>
      </section>
    </section>


    <section class="integrante">
      <section class="imagen">
        <img class="logoproyecto" src="../assets/Equipo/praxis.png" height="250" width="250" alt="Not Found">
      </section>
      <section class="descripcion">
        <h3>Ibañez Lucas (26)</h3>
        <p><b>Formación Académica:</b> Universidad Tecnológica Nacional-Facultad Regional La Rioja</p>
        <p><b>Encargado:</b> Programación de acelerómetro y giroscopio - Comunicación RF</p>
        <p><b>Manejo de Software:</b> </p>
        <p><b>Manejo de lenguajes:</b> </p>
        <p class="lema"><b>""</b></p>
      </section>
    </section>


  </div> -->




<style lang="css">
</style>

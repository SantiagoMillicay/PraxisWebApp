<template lang="html">
  <div id="contenido">

    <h1 class="titulohome">FISICA</h1>
    <h3 class="grey--text">UTN - Facultad Regional La Rioja</h3>
    <img class="logoutn" src="../assets/utn.png" height="300" width="200" alt="Not Found">
    <img class="logoproyecto" src="../assets/praxis.png" height="300" width="300" alt="Not Found">

    <router-link to="/equipodetrabajo"><h6 class="team">Equipo de Trabajo</h6>
    </router-link>

  </div>

</template>

<style media="screen">
  h1{
    text-align: center;
    color:#cecccc;
  }
  h3{
    text-align: center;
  }
  .logoutn{
    margin-left: 26.5%;
  }
  .logoproyecto{
    margin-left: 10%;
  }
  h6.team{
    color:#dee2e5;
    font-size: 1rem;
    text-align: right;
    font-weight: normal;
    transition: color 2s;
  }
  h6.team:hover{
    color:#aeb0b2;
  }
</style>

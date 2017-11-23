<template lang="html">
  <div id="contenido">

    <h2 class="titulopizarra">Pizarra Colaborativa</h2>

  </div>

</template>

<script type="text/javascript">
import LineExample from './pizarra.js'
export default {
  name:'pizarra',
  components: {
    pizarra
    }
}
</script>
<style media="screen">
  h2.titulopizarra{
    text-align: center;
    color:#cecccc;
  }
</style>

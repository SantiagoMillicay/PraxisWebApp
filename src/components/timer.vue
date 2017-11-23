<template lang="html">
  <div>
          <h2>Timer</h2>
          <line-example></line-example>
        </div>

  </div>
</template>

<script type="text/javascript">
import LineExample from './LineChart2.js'
export default {
  name:'timer',
  components: {
    LineExample
    }
}
</script>

<style>
.Chart {
  margin-top: 20%;
}
</style>

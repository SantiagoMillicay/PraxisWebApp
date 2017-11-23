import {Line} from 'vue-chartjs'
export default Line.extend({
  data () {
    return {
      gradient: null,
      gradient: null,
      gradient2: null
    }
  },

  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.0)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0)');
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

    this.gradient2.addColorStop(0, 'rgba(0, 255, 255, 1)')
    this.gradient2.addColorStop(0, 'rgba(0, 255, 255, 0)');
    this.gradient2.addColorStop(1, 'rgba(0, 255, 255, 0)');

    this.gradient3.addColorStop(0, 'rgba(0, 255, 0, 1)')
    this.gradient3.addColorStop(0, 'rgba(0, 255, 0, 0)');
    this.gradient3.addColorStop(1, 'rgba(0, 255, 0, 0)');

    var max=10, min=0, miArray = [(Math.random()* (max - min) ) + min,
                                  (Math.random()* (max - min) ) + min,
                                  (Math.random()* (max - min) ) + min,
                                  (Math.random()* (max - min) ) + min,
                                  (Math.random()* (max - min) ) + min,
                                  (Math.random()* (max - min) ) + min,
                                  (Math.random()* (max - min) ) + min];


    var s0=miArray[0];
    var s1=miArray[1];
    var s2=miArray[2];
    var s3=miArray[3];
    var s4=miArray[4];
    var s5=miArray[5];
    var s6=miArray[6];


    this.renderChart({
      labels: ['0', '10', '20','30','40','Tiempo [seg]'],
      datasets: [
        {
          label: 'X',
          borderColor: '#d60427',
          pointBackgroundColor: '#d60427',
          borderWidth: 2,
          pointBorderColor: '#ed5770',
          backgroundColor: this.gradient,
          data:[s0,s1,s2,s3,s4,s5,s6  ]

        },
          {
            label: 'Y',
            borderColor: '#3052e8',
            pointBackgroundColor: '#3052e8',
            borderWidth: 2,
            pointBorderColor: '#7188ed',
            backgroundColor: this.gradient,
            data:[0.2*s0,2*s1,1.2*s2,0.5*s3,6*s4,2.9*s5]

          },
        {
          label: 'Z',
          borderColor: '#1fe2cf',
          pointBackgroundColor: '#1fe2cf',
          pointBorderColor: '#9ffcf3',
          borderWidth: 2,
          backgroundColor: this.gradient2,
          data:[4*s0,3*s1,8*s2,0.2*s3,2*s4,1.2*s5]

        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
})

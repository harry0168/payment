<template>

  <button type="button" class="btn btn-success" @click="onPaymentClick">订单确认</button>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      onPaymentClick() {
        this.$ajax({
          method: 'post',
          dataType: 'JSONP',
          url: 'http://localhost:49851/Api/Payment/GetPaymentChange',
        }).then(a => {
          console.log(a)
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2{
    font-weight:normal;
  }
  ul{
    list-style-type:none;
    padding:0;
  }
  li{
    display:inline-block;
    margin:0 10px;
  }
  a{
    color:#42b983;
  }
</style>

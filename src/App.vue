<template>
  <div class="my_container">
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String
  },
  data() {
    return {
      index: 1,
      MUSIC: {
        Music_name: "123",
        Music_author: "456",
        Total_play: false
      },
      rotateAngle: 0,
      receivedData: null,
      angler:0
    }
  },
  provide() {
    return {
    }
  },
  components: {

  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.my_container{
  height: 100vh;
  width: 100vw;
}
</style>

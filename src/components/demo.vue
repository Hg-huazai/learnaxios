<template>


  <div id="app">
    <router-view/>
    <h2>正常逻辑：但不太好，这样会造成每一个组件都会对第三方框架依赖性太强     如果有一天这个框架不在被维护了，怎么办，就要每一个有依赖的都要改</h2>
    <h1>{{categories}}</h1>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'demo',
  data: {
    return {
      categories: ""
    }
  }
  created(){
    axios({
      url: 'http://1223.207.32.32:8080/home/multdata'
    }).then(res=>{
      this.categories= res
    })
  }
}
</script>

<style>
</style>

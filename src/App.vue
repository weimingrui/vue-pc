<!--
 * @Author: Arthur
 * @Date: 2020-09-29 15:53:56
 * @LastEditors: Arthur
 * @LastEditTime: 2020-09-29 16:32:56
 * @Description: file content
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

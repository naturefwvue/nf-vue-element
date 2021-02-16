<template>
  <div id="nav">
    <router-link to="/">原生基础组件</router-link> |
    <router-link :to="{name:'eleBase'}">ele基础组件</router-link> |
    <router-link :to="{name:'eleForm'}">表单组件</router-link> |
    <router-link :to="{name:'eleFind'}">查询组件</router-link> |
    <router-link :to="{name:'eleBase'}">列表组件</router-link> |
    <router-link :to="{name:'helpForm'}">表单辅助</router-link> |
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

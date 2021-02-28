<template>
  <div id="nav">
    <router-link to="/">原生基础组件</router-link> |
    <router-link :to="{name:'eleBase'}">ele基础组件</router-link> |
    <router-link :to="{name:'eleForm'}">表单组件</router-link> |
    <router-link :to="{name:'eleFind'}">查询组件</router-link> |
    <router-link :to="{name:'eleGrid'}">列表组件</router-link> |
    <router-link :to="{name:'helpForm'}">表单辅助</router-link> |
    <br>
  </div>
  <router-view/>
</template>

<script>
// import { useRouter } from 'vue-router'

export default {
  setup () {
    console.log('App')

    // 设置一个路由守卫
    // const router = useRouter()
    // router.beforeEach((to, from, next) => {
    //   console.log('路由守卫里的：', userOnline)
    //   if (to.name !== 'eleForm' && !userOnline.isOnline) {
    //     alert('您还没有登录，请先登录！')
    //    next({ name: 'eleForm' })
    //  } else {
    //    next()
    //  }
    // })

    return {
    }
  }
}
</script>
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

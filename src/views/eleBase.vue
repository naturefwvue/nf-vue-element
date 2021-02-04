<template>
  <div class="home">
    {{value}}
  </div>
</template>

<script>
import { ref } from 'vue'
// @ is an alias to /src

export default {
  name: 'eleBase',
  components: {
  },
  setup () {
    const value = ref('1')

    return {
      value
    }
  }

}
</script>

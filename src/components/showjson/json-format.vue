<template>
  <!--json的格式化显示-->
  <div>ww
    {{json}}-{{value}}
  </div>
</template>

<script>
import { ref } from 'vue'

/**
 * json的格式化显示
 */
export default {
  name: 'josn-format',
  props: {
    json: Object
  },
  setup (props) {
    const value = ref(props)

    return {
      value
    }
  }
}
</script>

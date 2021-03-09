<template>
  <!--json的格式化显示-->
  <div>
    <el-card class="box-card">
      <div
        class="text item"
        v-for="(value, key, index) in json"
        :key="'jsonformat_' + index"
      >
        {{key}}:
        <template v-if="typeof json[key] === 'object'">
          {{value}}
        </template>
        <template v-else>
          {{showBytype(value)}}
        </template>
      </div>
    </el-card>
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

    const showBytype = (value) => {
      let re = ''
      switch (typeof value) {
        case 'string':
          re = '"' + value + '"'
          break
        case 'number':
        case 'bigint':
        case 'boolean':
          re = value
          break
        case 'object':
          re = value
          break
        case 'undefined':
          re = value
          break
      }
      return re
    }

    return {
      showBytype, // 判断类型，然后按照类型做转换
      value
    }
  }
}
</script>

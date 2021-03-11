<template>
  <!--外壳-->
  <div style="margin: 5px">
    <el-radio-group v-model="jsonType" size="mini">
      <el-radio-button :label="1">js</el-radio-button>
      <el-radio-button :label="2">json</el-radio-button>
    </el-radio-group>
  </div>
  <el-card class="box-card" contenteditable="true">
    <div
      class="text item"
      v-for="(value, key, index) in json"
      :key="'jsonformat_' + index"
    >
      <json-format-item
        :mykey="key"
        :value="value"
        :jsonType="jsonType"
        :isArray="valueIsArray(value)"
        />
    </div>
  </el-card>
</template>

<script>
import { ref } from 'vue'
import josnFormat from '@/components/plat-help/json-format/json-format-item'

/**
 * json的格式化显示，外壳部分
 */
export default {
  props: {
    json: Object
  },
  components: {
    'json-format-item': josnFormat
  },
  setup (props) {
    // meta的格式，1：js；2：json文件
    const jsonType = ref(1)

    // 判断是不是数组
    const valueIsArray = (value) => {
      if (typeof value === 'undefined') return false
      if (value === null) return false
      if (value === '') return false

      const re = value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        // 判断length属性是否是可枚举的 对于数组 将得到false
        // eslint-disable-next-line no-prototype-builtins
        !(value.propertyIsEnumerable('length'))

      return re
    }

    return {
      valueIsArray, // 判断是不是数组
      jsonType // meta的格式
    }
  }
}
</script>

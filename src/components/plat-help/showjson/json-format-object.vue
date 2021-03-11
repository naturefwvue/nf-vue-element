<template>
  <!--json的格式化显示-->
  <div>
      <!--循环内容-->
      <div
        class="text item"
        v-for="(value, key, index) in json"
        :key="'jsonformat_' + index"
      >
        <!--key 的格式化-->
        <template v-if="jsonType === 1">
          &nbsp;&nbsp;{{key}}:
        </template>
        <template v-if="jsonType === 2">
          &nbsp;&nbsp;"{{key}}":
        </template>
        <!--array 的格式化-->
        <template v-if="valueIsArray(value)">[
          <json-format-array :json="value" :jsonType="jsonType"/>,
          ]
        </template>
        <!--object 的格式化-->
        <template v-else-if="typeof value === 'object'">
          {<json-format-object :json="value" :jsonType="jsonType"/>}
        </template>
        <!--基础类型-->
        <template v-else>
          ss&nbsp;{{showBytype(value)}},
        </template>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import josnFormat1 from '@/components/plat-help/showjson/json-format-object'
import josnFormat2 from '@/components/plat-help/showjson/json-format-array'

/**
 * 对象类型的json的格式化
 */
export default {
  name: 'josn-format-object1',
  components: {
    'json-format-object': josnFormat1,
    'json-format-array': josnFormat2
  },
  props: {
    json: Object, // 要格式化的json
    jsonType: Number // json的输出格式，1：js；2：json文件
  },
  setup (props) {
    const value = ref(props)

    // 根据类型返回适合的格式
    const showBytype = (value) => {
      const yinhao = props.jsonType === 2 ? '"' : '\''
      let re = ''
      switch (typeof value) {
        case 'string':
          re = yinhao + value + yinhao
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

    // 判断是不是数组
    const valueIsArray = (value) => {
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
      showBytype, // 判断类型，然后按照类型做转换
      value
    }
  }
}
</script>

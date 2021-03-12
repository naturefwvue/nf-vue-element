<template>
  <!--key 的格式化，判断是不是数组-->
  <template v-if="!isArray || valueIsArray(value)">
    <template v-if="jsonType === 1">
      {{space}}{{mykey}}:
    </template>
    <template v-if="jsonType === 2">
      {{space}}{{mykey}}":
    </template>
  </template>
  <!--array 的格式化-->
  <template v-if="valueIsArray(value)">[<br>
    <template
      v-for="(value1, key1) in value"
      :key="'jsonformatitem_' + key1"
    >
      {{space}}<json-format-item
        :isArray="true"
        :mykey="key1"
        :value="value1"
        :jsonType="jsonType"
        :space="space + '&nbsp;&nbsp;'"
      />
        <template v-if="key1 + 1 < value.length">,<br></template>
    </template>
    <br>{{space}}]
  </template>
   <!--object 的格式化-->
  <template v-else-if="typeof value === 'object'">
    <template v-if="isArray">{{space}}</template>{<br>
    <template
      v-for="(value1, key1, index) in value"
      :key="'jsonformatitem_' + index"
      >
      {{space}}<json-format-item
        :isArray="false"
        :mykey="key1"
        :value="value1"
        :jsonType="jsonType"
        :space="space + '&nbsp;&nbsp;'"
      />
      <template v-if="index + 1 < propertyCount">,</template><br>
    </template>{{space}}&nbsp;}
  </template>
  <!--基础类型-->
  <template v-else>
    {{showBytype(value)}}
  </template>
</template>

<script>
import { computed } from 'vue'
import josnFormat from '@/components/plat-help/json-format/json-format-item'

/**
 * json的格式化显示，外壳部分
 */
export default {
  props: {
    space: String, // 前面的空格
    isArray: Boolean, // 是不是数组
    mykey: Object, // 对象的key，直接写key似乎会出错
    value: [Object, String, Number, Boolean, Array], // value
    jsonType: Number // 格式化的方式
  },
  components: {
    'json-format-item': josnFormat
  },
  setup (props) {
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
          re = null
          break
      }
      return re
    }

    // 判断是不是数组
    const valueIsArray = (value) => {
      return Object.prototype.toString.call(value) === '[object Array]'
    }

    // 获取json的属性的数量，处理最后一个逗号
    const propertyCount = computed(() => {
      // console.log('computed', props.json)
      let count = 0
      // eslint-disable-next-line no-unused-vars
      for (const key in props.value) {
        count++
      }
      return count
    })

    return {
      propertyCount, // 获取json的属性的数量
      showBytype, // 显示值
      valueIsArray // 判断是不是数组
    }
  }
}
</script>

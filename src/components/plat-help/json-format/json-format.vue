<template>
  <!--外壳-->
  <div style="margin: 5px">
    <el-radio-group v-model="jsonType" size="mini">
      <el-radio-button :label="1">js</el-radio-button>
      <el-radio-button :label="2">json</el-radio-button>
    </el-radio-group>
  </div>
  <el-card class="box-card" contenteditable="true">
    <!--开头-->
    <template v-if="jsonType === 1">
      const props_{{json.colName}} = reactive({
    </template>
    <template v-if="jsonType === 2">
      "{{json.controlId}}": {
    </template>
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
        space="&nbsp;&nbsp;"
        />
        <template v-if="index + 1 < propertyCount">,</template>
    </div>
    <!--结尾-->
    <template v-if="jsonType === 1">
      })
    </template>
    <template v-if="jsonType === 2">
      }
    </template>
  </el-card>
</template>

<script>
import { computed, ref } from 'vue'
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
      return Object.prototype.toString.call(value) === '[object Array]'
    }

    // 获取json的属性的数量，处理最后一个逗号
    const propertyCount = computed(() => {
      // console.log('computed', props.json)
      let count = 0
      // eslint-disable-next-line no-unused-vars
      for (const key in props.json) {
        count++
      }
      return count
    })

    return {
      propertyCount, // 获取json的属性的数量
      valueIsArray, // 判断是不是数组
      jsonType // meta的格式
    }
  }
}
</script>

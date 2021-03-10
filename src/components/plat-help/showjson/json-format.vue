<template>
  <!--json的格式化显示-->
  <div>
    <div style="margin: 5px">
      <el-radio-group v-model="metaType" size="mini">
        <el-radio-button :label="1">js</el-radio-button>
        <el-radio-button :label="2">json</el-radio-button>
      </el-radio-group>
    </div>
    <el-card class="box-card" contenteditable="true">
      <template v-if="metaType === 1">
        const meta_{{json.colName}} = reactive({
      </template>
      <template v-if="metaType === 2">
        "{{json.controlId}}": {
      </template>
      <div
        class="text item"
        v-for="(value, key, index) in json"
        :key="'jsonformat_' + index"
      >
        <template v-if="metaType === 1">
          &nbsp;&nbsp;{{key}}:
        </template>
        <template v-if="metaType === 2">
          &nbsp;&nbsp;"{{key}}":
        </template>
        <template v-if="typeof json[key] === 'object'">
          {{value}}
        </template>
        <template v-else>
          &nbsp;{{showBytype(value)}},
        </template>
      </div>
      <template v-if="metaType === 1">
        })
      </template>
      <template v-if="metaType === 2">
        }
      </template>
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

    // meta的格式，1：js；2：json文件
    const metaType = ref(1)

    // 根据类型返回适合的格式
    const showBytype = (value) => {
      const yinhao = metaType.value === 2 ? '"' : '\''
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

    return {
      metaType, // meta的格式
      showBytype, // 判断类型，然后按照类型做转换
      value
    }
  }
}
</script>

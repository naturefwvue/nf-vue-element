<!--下拉选择-->
<template>
  <el-select
    v-model="value"
    @change="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :placeholder="me.placeholder"
    size="mini"
  >
    <el-option
      v-for="item in optionList"
      :key="'select' + controlId + item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-select',
  props: {
    modelValue: String,
    ...baseFormMeta // 基础属性
  },
  emits: ['change', 'blur', 'focus'],
  setup (props, context) {
    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

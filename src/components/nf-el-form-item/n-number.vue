<!--数字-->
<template>
  <el-input-number
    v-model="value"
    @change="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :readonly="readonly"
    :placeholder="placeholder"
    :title="title"
    :maxlength="maxlength"
    :min="min"
    :max="max"
    :step="step"
    size="mini"
    controls-position="right"
  >
  </el-input-number>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta, numberMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-number',
  props: {
    modelValue: Number,
    ...baseFormMeta,
    ...numberMeta
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

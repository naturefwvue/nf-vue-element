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
import controlManage from '../manage/controlManage.js'
// 引入组件需要的属性
import { baseFormMeta, numberMeta } from '../manage/formItemMeta.js'

export default {
  name: 'nf-el-from-number',
  props: {
    modelValue: Number,
    ...baseFormMeta,
    numberMeta
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    const { value, mySubmit } = controlManage(props, context)

    return {
      value,
      mySubmit
    }
  }
}
</script>

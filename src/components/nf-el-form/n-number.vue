<!--数字-->
<template>
  <el-input-number
    v-model="value"
    @change="mySubmit"
    :id="'c' + meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :readonly="meta.readonly"
    :placeholder="meta.placeholder"
    :title="meta.title"
    :maxlength="meta.maxlength"
    :min="meta.min"
    :max="meta.max"
    :step="meta.step"
    label="描述文字"
  >
  </el-input-number>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-number',
  props: {
    modelValue: Number,
    meta: metaInput
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

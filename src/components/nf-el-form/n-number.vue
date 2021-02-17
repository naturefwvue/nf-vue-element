<!--数字-->
<template>
  <el-input-number
    :placeholder="meta.placeholder"
    :maxlength="meta.maxlength"
    v-model="value"
    @change="mySubmit"
    :min="18"
    :max="70"
    label="描述文字"
    :step="1"
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

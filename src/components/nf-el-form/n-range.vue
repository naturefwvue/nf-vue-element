<!--数字滑块-->
<template>
  <el-slider
    v-model="value"
    @change="mySubmit"
    :title="meta.title"
    :min="18"
    :max="70"
    label="描述文字"
    :step="1"
  >
  </el-slider>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-range',
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

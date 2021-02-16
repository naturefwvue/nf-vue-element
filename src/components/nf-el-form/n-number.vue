<!--数字-->
<template>
  <el-input-number
    :placeholder="meta.placeholder"
    :maxlength="meta.maxlength"
    v-model="value"
    @change="myInput"
    :min="18"
    :max="70"
    label="描述文字"
    :step="1"
  >
  </el-input-number>
</template>

<script>
import inputManage from '../manage/inputManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-number',
  props: {
    modelValue: String,
    meta: metaInput
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    const { value, myInput } = inputManage(props, context)

    return {
      value,
      myInput
    }
  }
}
</script>

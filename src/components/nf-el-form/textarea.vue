<!--文本域-->
<template>
  <el-input
    type="textarea"
    v-model="value"
    @input="myInput"
    :rows="12"
    :autosize="{ minRows: 3, maxRows: 6 }"
    :show-word-limit="true"
    :maxlength="meta.maxlength"
    :placeholder="meta.placeholder"
  >
  </el-input>
</template>

<script>
import inputManage from '../manage/inputManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-textarea',
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

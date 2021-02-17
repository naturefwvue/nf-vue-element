<!--文本域-->
<template>
  <el-input
    type="textarea"
    v-model="value"
    @input="mySubmit"
    :id="meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :readonly="meta.readonly"
    :rows="12"
    :autosize="{ minRows: 3, maxRows: 6 }"
    :show-word-limit="true"
    :maxlength="meta.maxlength"
    :placeholder="meta.placeholder"
  >
  </el-input>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-area',
  props: {
    modelValue: String,
    meta: metaInput
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    return {
      ...controlManage(props, context)
    }
  }
}
</script>

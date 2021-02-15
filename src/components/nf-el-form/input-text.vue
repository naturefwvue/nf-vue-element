<!--单行文本-->
<template>
  <el-input
    v-model="value"
    @input="myInput"
    :id="meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :readonly="meta.readonly"
    :maxlength="meta.maxlength"
    :minlength="meta.minlength"
    :placeholder="meta.placeholder"
    :autofocus="meta.autofocus"
    :autocomplete="meta.autocomplete"
    :title="meta.title"
    :show-word-limit="meta.ele.show_word_limit"
    :clearable="meta.ele.clearable"
    :validate_event="meta.ele.validate_event"
    :resize="meta.ele.resize"
  >
  </el-input>
</template>

<script>
import inputManage from '../manage/inputManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-text',
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

<!--单行文本-->
<template>
  <el-input
    v-model="value"
    @input="mySubmit"
    :id="'c' + meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :readonly="meta.readonly"
    :maxlength="meta.maxlength"
    :minlength="meta.minlength"
    :placeholder="meta.placeholder"
    :title="meta.title"
    :autofocus="meta.autofocus"
    :autocomplete="meta.autocomplete"
    size="mini"
  >
  </el-input>
  <!--
    :show-word-limit="meta.ele.show_word_limit"
    :clearable="meta.ele.clearable"
    :validate_event="meta.ele.validate_event"
    :resize="meta.ele.resize"
  -->
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'nf-el-from-text',
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
})
</script>

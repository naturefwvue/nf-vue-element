<!--单行文本-->
<template>{{show_word_limit}}
  <el-input
    v-model="value"
    @input="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="maxlength"
    :minlength="minlength"
    :placeholder="placeholder"
    :title="title"
    :autofocus="autofocus"
    :autocomplete="autocomplete"
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
// import metaText from '../manage/config.js'
// import { defineComponent } from 'vue'
// 引入组件需要的属性
import { baseFormMeta, textMeta } from '../manage/formItemMeta.js'

export default {
  name: 'nf-el-from-text',
  props: {
    modelValue: String,
    ...baseFormMeta,
    ...textMeta,
    meta: Object
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    console.log('props', props)
    console.log('baseFormMeta', baseFormMeta)
    return {
      ...controlManage(props, context)
    }
  }
}
</script>

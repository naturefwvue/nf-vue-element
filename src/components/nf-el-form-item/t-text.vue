<!--单行文本-->
<template>
  <el-input
    v-model="value"
    @input="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :placeholder="placeholder"
    :title="title"
    :readonly="readonly"
    :maxlength="maxlength"
    :minlength="minlength"
    :autofocus="autofocus"
    :autocomplete="autocomplete"
    size="mini"
  >
  </el-input>
  <!--
    :show-word-limit="show_word_limit"
    :clearable="clearable"
    :validate_event="validate_event"
    :resize="resize"
  -->
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta, textMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-form-text',
  props: {
    modelValue: String,
    ...baseFormMeta, // 基础属性
    ...textMeta // 单行文本的属性
  },
  emits: ['myChange', 'update:modelValue', 'input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    console.log('props-text', props)

    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

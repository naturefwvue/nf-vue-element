<!--单行文本-->
<template>
  <el-input
    v-model="value"
    @input="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :size="size"
    :validate-event="validate_event"
    :show-word-limit="show_word_limit"
    :clearable="clearable"
    :resize="resize"
  >
  </el-input>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormProps, textProps } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-form-text',
  props: {
    modelValue: String,
    ...baseFormProps, // 基础属性
    ...textProps // 单行文本的属性
  },
  emits: ['myChange', 'input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    // console.log('props-text', props)
    // console.log('props-ctx', context)

    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

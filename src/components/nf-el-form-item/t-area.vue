<!--文本域-->
<template>
  <el-input
    type="textarea"
    v-model="value"
    @input="mySubmit"
    @blur="myBlur"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :size="size"
    :rows="rows"
    :autosize="{ minRows: 3, maxRows: 6 }"
    :validate-event="validate_event"
    :show-word-limit="show_word_limit"
  >
  </el-input>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormProps, areaProps } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-area',
  props: {
    modelValue: String,
    ...baseFormProps, // 基础属性
    ...areaProps // 多行文本的属性
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

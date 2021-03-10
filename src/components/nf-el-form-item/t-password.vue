<!--单行文本-->
<template>
  <el-input
    v-model="value"
    @input="mySubmit"
    @blur="myBlur"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :size="size"
    :validate-event="validate_event"
    :show-password="show_password"
  >
  </el-input>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormProps, passwordProps } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-form-password',
  props: {
    modelValue: String,
    ...baseFormProps, // 基础属性
    ...passwordProps // 单行文本的属性
  },
  // emits: ['myChange', 'update:modelValue', 'input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

<!--文本域-->
<template>
  <el-input
    type="textarea"
    v-model="value"
    @input="mySubmit"
    :id="controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :readonly="readonly"
    :rows="12"
    :autosize="{ minRows: 3, maxRows: 6 }"
    :show-word-limit="true"
    :maxlength="maxlength"
    :placeholder="placeholder"
  >
  </el-input>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-area',
  props: {
    modelValue: String,
    ...baseFormMeta // 基础属性
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

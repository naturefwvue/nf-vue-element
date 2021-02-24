<!--勾选框-->
<template>
  <el-checkbox
    v-model="value"
    @change="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :placeholder="placeholder"
  >
    {{title}}
  </el-checkbox>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-checkbox',
  props: {
    modelValue: Boolean,
    ...baseFormMeta // 基础属性
  },
  emits: ['change', 'blur', 'focus'],
  setup (props, context) {
    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

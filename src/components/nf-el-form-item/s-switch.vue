<!--开关，单选-->
<template>
  <el-switch
    v-model="value"
    active-text="on"
    inactive-text=""
    @change="mySubmit"
    :disabled="disabled"
  >
  </el-switch>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-switch',
  props: {
    modelValue: Boolean,
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

<!--开关，单选-->
<template>
  <el-switch
    v-model="value"
    @change="mySubmit"
    @blur="myBlur"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :size="size"
    active-text="on"
    inactive-text=""
  >
  </el-switch>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormProps } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-switch',
  props: {
    modelValue: Boolean,
    ...baseFormProps // 基础属性
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

<!--数字滑块-->
<template>
  <el-slider
    v-model="value"
    @change="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :placeholder="placeholder"
    :title="title"
    :min="min"
    :max="max"
    :step="step"
    label="描述文字"
  >
  </el-slider>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta, numberMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-range',
  props: {
    modelValue: Number,
    ...baseFormMeta, // 基础属性
    ...numberMeta
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    return {
      ...formItemManage(props, context)
    }
  }
})
</script>

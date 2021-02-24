<!--单选组-->
<template>
  <el-radio-group
    v-model="value"
    @change="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :placeholder="placeholder"
  >
    <el-radio
      v-for="item in optionList"
      :key="'radio' + controlId + item.value"
      :label="item.value">
        {{item.label}}
    </el-radio>
  </el-radio-group>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-radios',
  props: {
    modelValue: String,
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

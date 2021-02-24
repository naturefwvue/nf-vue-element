<!--多选组-->
<template>
  <el-checkbox-group
    v-model="value"
    @change="mySubmit"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :placeholder="placeholder"
  >
    <el-checkbox
      v-for="item in optionList"
      :key="'check' + controlId + item.value"
      :label="item.value">
        {{item.label}}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
import { defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta } from '../controlConfig/formItemMeta.js'

export default defineComponent({
  name: 'el-from-checkboxs',
  props: {
    modelValue: Object,
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

<!--下拉选择-->
<template>
  <el-select
    v-model="value"
    @change="mySubmit"
    :id="'c' + meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :placeholder="meta.placeholder"
  >
    <el-option
      v-for="item in meta.optionList"
      :key="'select' + meta.controlId + item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-select',
  props: {
    modelValue: String,
    meta: metaInput
  },
  emits: ['change', 'blur', 'focus'],
  setup (props, context) {
    const { value, mySubmit } = controlManage(props, context)

    return {
      value,
      mySubmit
    }
  }
}
</script>

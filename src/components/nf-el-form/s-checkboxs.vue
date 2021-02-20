<!--多选组-->
<template>
  <el-checkbox-group
    v-model="value"
    @change="mySubmit"
    :id="'c' + meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :placeholder="meta.placeholder"
  >
    <el-checkbox
      v-for="item in meta.optionList"
      :key="'check' + meta.controlId + item.value"
      :label="item.value">
        {{item.label}}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-checkboxs',
  props: {
    modelValue: Object,
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

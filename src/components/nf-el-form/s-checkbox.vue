<!--勾选框-->
<template>
  <el-checkbox
    v-model="value"
    @change="mySubmit"
    :id="'c' + meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :placeholder="meta.placeholder"
  >
    {{meta.title}}
  </el-checkbox>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-checkbox',
  props: {
    modelValue: Boolean,
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

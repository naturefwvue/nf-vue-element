<!--单选组-->
<template>
  <el-radio-group
    v-model="value"
    @change="mySubmit"
    :id="'c' + meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :placeholder="meta.placeholder"
  >
    <el-radio
      v-for="item in meta.optionList"
      :key="'radio' + meta.controlId + item.value"
      :label="item.value">
        {{item.label}}
    </el-radio>
  </el-radio-group>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-radios',
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

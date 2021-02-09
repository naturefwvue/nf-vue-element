<!--开关，单选-->
<template>
  <el-switch
    v-model="value"
    active-text="按月付费"
    inactive-text=""
    @change="myInput"
  >
  </el-switch>
</template>

<script>
import inputManage from '../manage/inputManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-switch',
  props: {
    modelValue: Boolean,
    meta: metaInput
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    const { value, myInput } = inputManage(props, context)

    return {
      value,
      myInput
    }
  }
}
</script>

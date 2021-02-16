<!--多选组-->
<template>
  <el-checkbox-group v-model="checks" @change="myInput">
    <el-checkbox :label="3">备选项</el-checkbox>
    <el-checkbox :label="6">备选项</el-checkbox>
    <el-checkbox :label="9">备选项</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import inputManage from '../manage/inputManage.js'
import { metaInput } from '../manage/config.js'
import { ref } from 'vue'

export default {
  name: 'nf-el-from-checkbox',
  props: {
    modelValue: String,
    meta: metaInput
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    const { value, myInput } = inputManage(props, context)

    const checks = ref([])

    return {
      value,
      myInput,
      checks
    }
  }
}
</script>

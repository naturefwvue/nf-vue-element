<!--URL地址-->
<template>
  <el-input
    :placeholder="meta.placeholder"
    :maxlength="meta.maxlength"
    v-model="value"
    @input="myInput"
  >
    <template #prepend>
      <el-select style="width: 230px;" v-model="select" placeholder="请选择">
        <el-option label="Http://" value="Http://"></el-option>
        <el-option label="Https://" value="Https://"></el-option>
      </el-select>
      </template>
    <template #append>.com</template>
  </el-input>
</template>

<script>
import inputManage from '../manage/inputManage.js'
import { metaInput } from '../manage/config.js'

export default {
  name: 'nf-el-from-url',
  props: {
    modelValue: String,
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

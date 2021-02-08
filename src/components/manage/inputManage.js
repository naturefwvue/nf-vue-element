/*
 input 文本类的管理类，就是共用代码了。
*/

import { ref, watch } from 'vue'

const inputManage = (props, context) => {
  const value = ref('')

  // 监听属性，给 value 赋值
  watch(() => props.modelValue, (v1, v2) => {
    // console.log(v1, v2)
    value.value = v1
  })

  const myInput = (e) => {
    // console.log(e)
    context.emit('update:modelValue', e)
    context.emit('input', e)
    // console.log(props)
  }

  return {
    value,
    myInput
  }
}

export default inputManage

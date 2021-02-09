/*
 input 文本类的管理类，就是共用代码了。
*/
import { ref, watch } from 'vue'

const inputManage = (props, context) => {
  // 绑定控件的值
  const value = ref('')

  // 监听属性，给 value 赋值
  watch(() => props.modelValue, (v1, v2) => {
    value.value = v1
  })

  // 向父组件提交事件
  const myInput = (e) => {
    context.emit('update:modelValue', e)
    context.emit('input', e)
  }

  return {
    value,
    myInput
  }
}

export default inputManage

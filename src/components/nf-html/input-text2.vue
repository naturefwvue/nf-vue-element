<template>
  <input
    :value="modelValue"
    @input="myInput"
  ><br>
  组件内部值：{{modelValue}}
</template>

<script>
import { toRef, toRefs, watch } from 'vue'

// 演示简单的组件
export default {
  name: 'mytext',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    modelValue: String,
    meta: Object
  },
  emits: ['input'],
  setup (props, context) {
    const myProps1 = props // 获取属性
    const myProps = toRefs(props) // toRefs的方式获取属性
    const myValue = toRef(props, 'modelValue') // toRef获取指定的属性
    console.log('原生属性:', props)
    console.log('toRefs的属性:', myProps)
    console.log('toRef 的属性:', myValue)
    console.log('myProps.modelValue:', myProps.modelValue)

    console.log(context)

    // 直接修改，会报错
    // props.modelValue = '直接改属性'

    // 尝试修改，虽然只有警告不会报错，但是修改不会成功。
    myProps1.modelValue = '内部直接修改'

    // 尝试修改，虽然只有警告不会报错，但是修改不会成功。
    myValue.value = '内部修改属性'

    // 监控属性变化
    watch(() => props.modelValue, (v1, v2) => {
      console.log('原值：', v1)
      console.log('新值：', v2)
    })

    // 向父组件提交修改属性
    const myInput = (e) => {
      console.log(e)
      context.emit('update:modelValue', e.target.value)
    }

    return {
      myInput
    }
  }
}
</script>

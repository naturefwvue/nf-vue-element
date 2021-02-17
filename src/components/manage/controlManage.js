import { ref, watch } from 'vue'

/**
* 控件的赋值、提交的统一管理函数
** 属性：
* ** props： 组件的属性，获取modelValue，和meta
* ** context： 上下文获取emit，提交数据
** 返回：
* ** value：绑定到组件的值
* ** mySubmit：向父组件提交的事件
*/
const controlManage = (props, context) => {
  // 用于绑定控件的值。
  const value = ref(props.meta.defaultValue)

  // 获取父组件设置的属性
  const _value = props.modelValue

  // 设置控件值。如果有属性值（修改状态）则把属性值设置给控件值。
  if (!(_value === '' || _value === 0 || _value === null)) {
    value.value = _value
  }

  // 监听 modelValue 属性，给 value 赋值
  watch(() => props.modelValue, (v1, v2) => {
    // console.log('controlManage监听属性变化', v1)
    value.value = v1
  })

  // 向父组件提交事件
  const mySubmit = (val) => {
    context.emit('update:modelValue', val)
    context.emit('input', val)
  }

  return {
    /**
    * 用于绑定控件的值。
    ** 添加状态可以获取默认值。
    ** 修改状态可以设置 modelValue 值
    ** 监听 modelValue 属性，给value 赋值
    */
    value,
    /**
    * 向父组件提交事件
    ** 可以直接绑定到组件的事件，
    ** 也可以套个娃。
    */
    mySubmit
  }
}

export default controlManage

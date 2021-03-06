import { ref, watch } from 'vue'

/**
 * 表单子控件的管理类
 * @param {*} props 组件的属性，获取modelValue和meta属性
 * @param {*} context 上下文获取emit，提交数据
 * @returns {*} value：绑定到组件的值
 * @returns {*} mySubmit：向父组件提交的事件
 */
const formItemManage = (props, context) => {
  // 用于绑定控件的值。
  const value = ref('')

  // 获取父组件设置的属性
  value.value = props.modelValue

  // 监听 modelValue 属性，给 value 赋值
  watch(() => props.modelValue, (v1, v2) => {
    // console.log('controlManage监听属性变化', v1)
    value.value = v1
  })

  // 向父组件提交事件
  const mySubmit = (val) => {
    // 修改 modelValue 属性
    context.emit('update:modelValue', val)
    // 提交 myChange 表单组件需要用，可以得到组件ID和字段名称，
    // 用于区分是哪个组件触发的事件。
    context.emit('myChange', val, props.controlId, props.colName)
    // 文本类需要的事件
    context.emit('input', val)
    // 选择类需要的事件
    context.emit('change', val)
  }

  const myBlur = (val) => {
    // 数据验证需要的事件
    context.emit('blur', val)
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
    mySubmit,
    myBlur
  }
}

export default formItemManage

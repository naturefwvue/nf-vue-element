<!--日期-->
<template>
  <el-time-picker v-if="controlType === 115"
    style="width:130px;"
    v-model="mytime"
    @change="myChange"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :readonly="readonly"
    :placeholder="placeholder"
  >
  </el-time-picker>
  <el-time-select  v-if="controlType === 116"
    style="width:100px;"
    v-model="mytime"
    @change="myChange"
    :id="'c' + controlId"
    :name="'c' + controlId"
    :disabled="disabled"
    :readonly="readonly"
    :placeholder="placeholder"
    start='07:30'
    step='00:15'
    end='18:30'
  >
</el-time-select>
</template>

<script>
import { ref, watch, defineComponent } from 'vue'
// 引入表单子控件的管理类
import formItemManage from '../controlManage/formItemManage.js'
// 引入组件需要的属性
import { baseFormMeta } from '../controlConfig/formItemMeta.js'

/**
 * 日期管理类
 * * 功能：
 * ** 按照类型提交数据，不是date()
 * ** 监听属性，设置value
 * * 参数：
 * ** value： control类的value
 * ** mySubmit： control类的mySubmit，直接就提交了
 * ** controlType：属性里的控件类型
 * * 返回
 * ** 绑定控件的 mydate
 * ** change 事件的 myChange
 */
const timeManage = (value, mySubmit, controlType) => {
  // 日期控件用的v-model，便于做类型转换
  const mytime = ref(new Date('1900-1-1 00:00:00'))

  if (value.value !== null) {
    // mytime.value = new Date('1900-1-1 ' + value.value)
  }

  // 监听属性，设置给 mydate
  watch(() => value.value, (v1, v2) => {
    if (controlType === 115) {
      // 把周数转换成日期
      mytime.value = new Date('1900-1-1 ' + v1)
    } else {
      // mytime.value = new Date(v1)
    }
  })

  // 向父组件提交数据。
  const myChange = (_val) => {
    const val = _val

    if (controlType === 115) {
      const hour = val.getHours().toString().padStart(2, '0')
      const mm = val.getMinutes().toString().padStart(2, '0')
      const ss = val.getSeconds().toString().padStart(2, '0')
      const re = `${hour}:${mm}:${ss}`
      mySubmit(re) // 提交给父组件
    } else {
      mySubmit(val) // 提交给父组件
    }
    console.log('日期控件值：', val, controlType)
  }

  return {
    mytime,
    myChange
  }
}

export default defineComponent({
  name: 'el-from-time',
  props: {
    modelValue: Object,
    ...baseFormMeta // 基础属性
  },
  emits: ['change', 'blur', 'focus'],
  setup (props, context) {
    const { value, mySubmit } = formItemManage(props, context)

    const { mytime, myChange } = timeManage(value, mySubmit, props.controlType)
    return {
      mytime,
      myChange
    }
  }
})
</script>

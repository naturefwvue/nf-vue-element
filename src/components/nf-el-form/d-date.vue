<!--日期-->
<template>
  <el-date-picker :style="style[meta.controlType]"
    v-model="mydate"
    :type="dateType[meta.controlType]"
    @change="myChange"
    :id="'c' + meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :readonly="meta.readonly"
    :placeholder="meta.placeholder"
    :autofocus="meta.autofocus"
    :format="format[meta.controlType]"
  >
  </el-date-picker>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'
import { ref, watch } from 'vue'

// 类型的字典
const dateType = {
  100: 'dates/datetimerange/daterange/monthrange',
  110: 'date',
  111: 'datetime',
  114: 'month',
  115: 'week',
  116: 'year'
}

// 根据类型设置宽度
const style = {
  110: { // date
    width: '160px'
  },
  111: { // datetime
    width: '190px'
  },
  114: { // month
    width: '140px'
  },
  115: { // week
    width: '140px'
  },
  116: { // year
    width: '140px'
  }
}

// 根据类型设置显示用的format
const format = {
  110: 'YYYY-MM-DD',
  111: 'YYYY-MM-DD HH:mm:ss',
  114: 'gggg年 MM月',
  115: 'gggg 第ww周',
  116: 'gggg 年'
}

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
const dateManage = (value, mySubmit, controlType, controlId) => {
  // 日期控件用的v-model，便于做类型转换
  const mydate = ref(new Date(value.value))

  if (controlType === 115) {
    // 把周数转换成日期
    const arr = value.value.split('w')
    if (arr.length > 1) {
      mydate.value = new Date(new Date(arr[0] + '-1-1').valueOf() + arr[1] * 7 * 24 * 3600000)
    }
  }

  // 监听属性，设置给 mydate
  watch(() => value.value, (v1, v2) => {
    if (controlType === 115) {
      // 把周数转换成日期
      const arr = v1.split('w')
      if (arr.length > 1) {
        // mydate.value = new Date(new Date(arr[0] + '-1-1').valueOf() + (arr[1] - 1) * 7 * 24 * 3600000)
      }
    } else {
      mydate.value = new Date(v1)
    }
  })

  // 向父组件提交数据。
  const myChange = (_val) => {
    const val = _val
    const year = val.getFullYear()
    const month = (val.getMonth() + 1).toString().padStart(2, '0')
    const day = val.getDate().toString().padStart(2, '0')

    const hour = val.getHours().toString().padStart(2, '0')
    const mm = val.getMinutes().toString().padStart(2, '0')
    const ss = val.getSeconds().toString().padStart(2, '0')

    let re = ''
    switch (controlType) {
      case 110: // 日期
        re = `${year}-${month}-${day}`
        break
      case 111: // 日期 + 时间
        re = `${year}-${month}-${day} ${hour}:${mm}:${ss}`
        break
      case 114: // 年 + 月
        re = `${year}-${month}`
        break
      case 115: // 第几周。直接去dom找。没发现更好的方法
        setTimeout(() => {
          re = document.getElementsByName('c' + controlId)[0].value
          console.log('周1：', re)
          re = re.replace(' 第', 'w').replace('周', '')
          console.log('周2：', re)
          mySubmit(re) // 提交给父组件
        }, 500)
        break
      case 116: // 年
        re = year
        break
    }
    console.log('日期控件值：', val, controlType)
    mySubmit(re) // 提交给父组件
  }

  return {
    mydate,
    myChange
  }
}

export default {
  name: 'nf-el-from-date',
  props: {
    modelValue: Object,
    meta: metaInput
  },
  emits: ['change', 'blur', 'focus'],
  setup (props, context) {
    const { value, mySubmit } = controlManage(props, context)

    return {
      ...dateManage(value, mySubmit, props.meta.controlType, props.meta.controlId),
      dateType, // 类型：日期、日期时间、年月、年周
      format, // 格式化
      style // 控制宽度
    }
  }
}
</script>

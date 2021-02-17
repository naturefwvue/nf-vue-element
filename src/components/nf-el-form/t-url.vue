<!--URL地址-->
<template>
  <el-input
    v-model="url.value"
    @input="urlSubmit"
    :id="meta.controlId"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :readonly="meta.readonly"
    :maxlength="meta.maxlength"
    :minlength="meta.minlength"
    :placeholder="meta.placeholder"
    :title="meta.title"
  >
    <template #prepend><!--前面的选项-->
      <el-select style="width: 90px;"
        v-model="url.http"
        @change="urlSubmit"
        :disabled="meta.disabled"
      >
          <el-option label="Http://" value="Http://"></el-option>
          <el-option label="Https://" value="Https://"></el-option>
      </el-select>
    </template>
    <template #append><!--后面的域名后缀-->
      <el-autocomplete style="width: 100px;"
        class="inline-input"
        v-model="url.com"
        :fetch-suggestions="querySearch"
        @select="urlSubmit"
        @change="urlSubmit"
      ></el-autocomplete>
    </template>
  </el-input>
</template>

<script>
import controlManage from '../manage/controlManage.js'
import { metaInput } from '../manage/config.js'
import { reactive, watch } from 'vue'

/**
 * 处理url的管理类
 * * 功能：
 * ** 提交拼接后的完整的url
 * ** 提供绑定控件值、事件
 * ** 修改时自动拆分属性
 * * 参数：
 * ** value： control类的value
 * ** mySubmit： control类的mySubmit，直接就提交了
 */
const urlManage = (value, mySubmit) => {
  // 把url分成三份处理
  const url = reactive({
    http: 'Https://',
    com: '.com',
    value: ''
  })

  // 域名后缀
  const comList = [
    { value: '.com' },
    { value: '.cn' },
    { value: '.net' },
    { value: '.gov' },
    { value: '.com.cn' },
    { value: '.net.cn' },
    { value: '.org.cn' },
    { value: '.gov.cn' },
    { value: '.org' },
    { value: '.top' },
    { value: '.vip' },
    { value: '.中国' },
    { value: '.企业' },
    { value: '.公司' },
    { value: '.网络' }
  ]

  // 拆分属性，给url赋值
  watch(() => value.value, (v1, v2) => {
    const arrUrlAll = v1.toLowerCase().split('://')
    console.log('===============================================')
    console.log('父组件:', v1)
    // 判断 ://
    if (arrUrlAll.length === 1) { // 没有http://，直接算作url.value
      url.value = arrUrlAll[0]
    } else if (arrUrlAll.length === 2) {
      url.http = arrUrlAll[0] + '://'
      // 有http://，用 . 拆分后面的
      const arrUrl = arrUrlAll[1].split('.')
      const len = arrUrl.length
      let endPosition = 0
      switch (len) {
        case 1: // 只有一个，直接算作url.value
          url.value = arrUrl[0]
          break
        case 2: // 有两个，一个是url.value，一个是com
          url.value = arrUrl[0]
          url.com = '.' + arrUrl[1]
          break
        default: // 有两个以上，判断两个后缀的情况
          if (arrUrl[len - 1] === 'cn' && (arrUrl[len - 2] === 'com' || arrUrl[len - 2] === 'net' || arrUrl[len - 2] === 'org' || arrUrl[len - 2] === 'gov')) {
            endPosition = len - 2
            url.com = '.' + arrUrl[endPosition] + '.cn'
          } else {
            endPosition = len - 1
            url.com = '.' + arrUrl[endPosition]
          }
          url.value = arrUrl[0]
          for (let i = 1; i < endPosition; i++) {
            url.value += '.' + arrUrl[i]
          }
      }
    }
  })

  // com的查询事件
  const querySearch = (str, cb) => {
    const results = str
      ? comList.filter((item) =>
        item.value.indexOf(str.toLowerCase()) === 0)
      : comList

    // 调用 callback 返回建议列表的数据
    cb(results)
  }

  // url的三个change事件
  const urlSubmit = () => {
    mySubmit(url.http + url.value + url.com)
  }

  return {
    url,
    querySearch,
    urlSubmit
  }
}

export default {
  name: 'nf-el-from-url',
  props: {
    modelValue: String,
    meta: metaInput
  },
  emits: ['input', 'change', 'blur', 'focus', 'clear'],
  setup (props, context) {
    const { value, mySubmit } = controlManage(props, context)

    // const { url, querySearch, urlSubmit } = urlManage(value, mySubmit)

    return {
      ...urlManage(value, mySubmit)
      // querySearch, // com的筛选的函数
      // url, // url 相关的值
      // urlSubmit // 触发事件
    }
  }
}
</script>

import { reactive } from 'vue'

const formManage = () => {
  const json = require('@/components/plat-help/json/help-meta-form.json')
  console.log('json', json)

  // 全部的meta
  const platFormMeta = json.platFormMeta
  // 类型需要的meta
  const typeMeta = json.type
  // 按照数组编织model和meta数组
  const formModule = reactive({})
  // 需要显示的meta
  const formMeta = []

  // 建立表单实体类
  for (const key in platFormMeta) {
    const item = platFormMeta[key]
    formModule[item.colName] = item.defaultValue || ''
  }

  // 组装meta的数组
  typeMeta['101'].forEach((item) => {
    formMeta.push(platFormMeta[item])
  })

  return {
    platFormMeta, // 全部的控件meta
    typeMeta,
    formModule, // 表单的实体类
    formMeta // 表单需要的meta
  }
}

export default formManage

import { reactive, watch } from 'vue'

/**
 * @function 表单控件的管理类
 * @description 创建v-model，创建局部model，设置行列、排序相关的处理
 * @param { object } props 组件参数
 * @param { object } context 上下文
 * @returns { function } 表单管理类
 * * formModel 表单v-model
 * * 创建v-model
 * * 调整列数
 * * 合并
 */
export default function formManage (props, context) {
  // 定义 完整的 v-model
  const formModel = reactive({})
  // 定义局部的 model
  const formPartModel = reactive({})

  // 精简的 model，去掉空白和默认值相同的
  const formMiniModel = reactive({})

  // 确定一个组件占用几个格子
  const formColSpan = reactive({})
  // 定义排序依据
  const formColSort = reactive([])
  // 获取表单meta
  const formMeta = props.meta
  console.log('formMeta', formMeta)
  // 表单元素meta
  const formItemMeta = formMeta.itemMeta
  // 表单验证meta，备用
  // const formRuleMeta = formMeta.ruleMeta

  // 根据表单元素meta，创建 v-model
  const createModel = () => {
    // 依据meta，创建module
    for (const key in formItemMeta) {
      const m = formItemMeta[key]
      // 根据控件类型设置属性值
      switch (m.controlType) {
        case 100: // 文本类
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 130:
        case 131:
          formModel[m.colName] = ''
          break
        case 110: // 日期
        case 111: // 日期时间
        case 112: // 年月
        case 114: // 年
        case 113: // 年周
          formModel[m.colName] = null
          break
        case 115: // 任意时间
          formModel[m.colName] = '00:00:00'
          break
        case 116: // 选择时间
          formModel[m.colName] = '00:00'
          break
        case 120: // 数字
        case 121:
          formModel[m.colName] = 0
          break
        case 150: // 勾选
        case 151: // 开关
          formModel[m.colName] = false
          break
        case 153: // 单选组
        case 160: // 下拉单选
        case 162: // 下拉联动
          formModel[m.colName] = null
          break
        case 152: // 多选组
        case 161: // 下拉多选
          formModel[m.colName] = []
          break
      }
      // 看看有没有设置默认值
      if (typeof m.defaultValue !== 'undefined') {
        switch (m.defaultValue) {
          case '':
            break
          case '{}':
            formModel[m.colName] = {}
            break
          case '[]':
            formModel[m.colName] = []
            break
          case 'date':
            formModel[m.colName] = new Date()
            break
          default:
            formModel[m.colName] = m.defaultValue
            break
        }
      }
    }
    // 同步父组件的v-model
    context.emit('update:modelValue', formModel)
    return formModel
  }
  // 先运行一次
  createModel()

  // 向父组件提交 model
  const mySubmit = (val, controlId, colName) => {
    context.emit('mychange', val, controlId, colName, formModel, formPartModel)
    // 手动设置
    // formModel[colName] = val
    context.emit('update:modelValue', formModel)
    // 同步到部分model
    if (typeof formPartModel[colName] !== 'undefined') {
      formPartModel[colName] = formModel[colName]
    }
    context.emit('update:partModel', formPartModel)
  }

  // 依据用户选项，创建对应的 model
  const createPartModel = (array) => {
    // 先删除属性
    for (const key in formPartModel) {
      delete formPartModel[key]
    }
    // 建立新属性
    for (let i = 0; i < array.length; i++) {
      const colName = formItemMeta[array[i]].colName
      formPartModel[colName] = formModel[colName]
    }
  }

  // 根据配置里面的colCount，设置 formColSpan
  const setFormColSpan = () => {
    const formColCount = formMeta.formColCount // 列数
    const moreColSpan = 24 / formColCount // 一个格子占多少份

    if (formColCount === 1) {
    // 一列的情况
      for (const key in formItemMeta) {
        const m = formItemMeta[key]
        if (typeof m.colCount === 'undefined') {
          formColSpan[m.controlId] = moreColSpan
        } else {
          if (m.colCount >= 1) {
            // 单列，多占的也只有24格
            formColSpan[m.controlId] = moreColSpan
          } else if (m.colCount < 0) {
            // 挤一挤的情况， 24 除以 占的份数
            formColSpan[m.controlId] = moreColSpan / (0 - m.colCount)
          }
        }
      }
    } else {
      // 多列的情况
      for (const key in formItemMeta) {
        const m = formItemMeta[key]
        if (typeof m.colCount === 'undefined') {
          formColSpan[m.controlId] = moreColSpan
        } else {
          if (m.colCount < 0 || m.colCount === 1) {
            // 多列，挤一挤的占一份
            formColSpan[m.controlId] = moreColSpan
          } else if (m.colCount > 1) {
            // 多列，占的格子数 * 份数
            formColSpan[m.controlId] = moreColSpan * m.colCount
          }
        }
      }
    }
  }
  // 先运行一次
  setFormColSpan()

  // 设置组件的显示顺序
  const setFormColSort = (array = formMeta.colOrder) => {
    formColSort.length = 0
    formColSort.push(...array)
  }
  // 先运行一下
  setFormColSort()

  // 监听组件值的变化，调整组件的显示以及显示顺序
  if (typeof formMeta.formColShow !== 'undefined') {
    for (const key in formMeta.formColShow) {
      const ctl = formMeta.formColShow[key]
      const colName = formItemMeta[key].colName
      watch(() => formModel[colName], (v1, v2) => {
        if (typeof ctl[v1] === 'undefined') {
          // 没有设定，显示默认组件
          setFormColSort()
        } else {
          // 按照设定显示组件
          setFormColSort(ctl[v1])
          // 设置部分的 model
          createPartModel(ctl[v1])
        }
      })
    }
  }

  return {
    // 对象
    formModel, // v-model createModel()
    formPartModel, // 用户选择的组件的 model
    formMiniModel, // 局部的基础上去掉空白和默认值相同的
    formColSpan, // 确定组件占位
    formColSort, // 确定组件排序
    // 函数
    createModel, // 创建 v-model
    setFormColSpan, // 设置组件占位
    setFormColSort, // 设置组件排序
    mySubmit // 提交
  }
}

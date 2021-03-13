
import { reactive } from 'vue'

/**
 * @function 创建表单的v-model
 * @description 依据表单的子控件的meta，自动创建model
 * @param { object } meta 表单子控件的meta
 */
export default function (meta) {
  const formModel = reactive({})

  // 依据meta，创建module
  for (const key in meta) {
    const m = meta[key]
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
  return formModel
}

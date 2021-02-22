// 表单域控件类型
const formControlType = {
  100: '多行文本', // textarea， 多行文本框 input-text
  101: '单行文本', // text，单行文本框 input-text
  102: '密码', // password，密码 input-password
  103: '电话号码', // tel，电话 input-text
  104: '电子邮件', // email，电子邮件 input-text
  105: 'url', // url input-url
  // 106: '搜索', // 搜索 search input-text
  107: '颜色', // 颜色 color input-color
  // 108: 'text', // 弹窗选择记录
  110: '日期', // 日期 date input-date
  111: '日期时间', // 日期时间 datetime-local
  112: '年月', // 年月 month
  113: '年周', // 年周 week
  114: '年', // 年 year
  115: '任意时间', // 时间，任意时间 time
  116: '选择时间', // 时间，选择固定选项
  120: '数字', // 数字 number
  121: '滑块', // 滑块 range
  130: '上传文件', // 上传文件 file
  131: '上传图片', // 上传图片
  // 140: 'fulltext', // 富文本编辑器
  150: '勾选', // 勾选 checkbox
  151: '开关', // 开关 switch
  152: '多选组', // 多选组 checkboxs
  153: '单选组', // 单选组 radios
  160: '下拉列表', // 下拉列表框 单选 select
  // 161: '列表框', // 列表框 多选 selects
  162: ' 联动下拉' // 联动下拉列表框 selectMore
}

// 表单域，文本类控件属性
const metaText = {
  type: Object,
  default: () => {
    return {
      // 通用
      controlId: Number, // 编号，区别同一个表单里的其他控件
      colName: String, // 字段名称
      label: String, // 中文名称
      controlType: Number, // 用类型编号表示type
      isClear: {
        // isClear  连续添加时是否恢复默认值
        type: Boolean,
        default: false
      },
      defaultValue: String, // 默认值
      autofocus: { // 是否自动获得焦点
        type: Boolean,
        default: false
      },
      disabled: {
        // 是否禁用
        type: Boolean,
        default: false
      },
      required: { // 必填
        type: Boolean,
        default: true
      },
      readonly: { // 只读
        type: Boolean,
        default: false
      },
      pattern: String, // 用正则做验证。
      class: {
        type: String,
        default: ''
      },
      placeholder: String,
      title: String, // 提示信息
      size: Number, // 字符宽度
      maxlength: Number, // 最大字符数
      minlength: Number, // 最小字符数
      autocomplete: { // off
        type: String,
        default: 'on'
      },
      optionKey: String, // 备选文字标识
      optionItem: Object, // 备选的选项
      // 多行文本
      rows: Number, // 行数
      autosize: Object, // 自适应内容高度
      // 数字
      max: Number,
      min: Number,
      step: Number,
      ele: {
        type: Object,
        default: () => {
          return {
            show_word_limit: { // 是否显示输入字数统计 text和area有效
              type: Boolean,
              default: true
            },
            clearable: { // 是否显示清空标记
              type: Boolean,
              default: true
            },
            show_password: { // 是否显示切换密码图标
              type: Boolean,
              default: true
            },
            validate_event: { // 输入时是否触发表单的校验
              type: Boolean,
              default: true
            },
            resize: String // none, both, horizontal, vertical
          }
        }
      }
    }
  }
}

export default {
  formControlType,
  metaText // 文本类的属性
}

export const getControlTypeOptionList = () => {
  const typeOptionList = []
  for (const key in formControlType) {
    const m = formControlType[key]
    typeOptionList.push({
      value: key,
      label: m
    })
  }
  return {
    typeOptionList
  }
}

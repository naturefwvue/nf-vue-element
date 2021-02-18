// 表单域控件类型
const formControlType = {
  100: 'textarea', // 多行文本框 input-text
  101: 'text', // 单行文本框 input-text
  102: 'password', // 密码 input-password
  103: 'tel', // 电话 input-text
  104: 'email', // 电子邮件 input-text
  105: 'url', // url input-url
  106: 'search', // 搜索 input-text
  107: 'color', // 颜色 input-color
  108: 'text', // 弹窗选择记录
  110: 'date', // 日期 input-date
  111: 'datetime-local', // 日期时间
  112: 'time', // 时间，任意时间
  113: 'time2', // 时间，选择固定选项
  114: 'month', // 年月
  115: 'week', // 年周
  116: 'year', // 年
  120: 'number', // 数字
  121: 'range', // 滑块
  130: 'file', // 上传文件
  131: 'file', // 上传图片
  140: 'fulltext', // 富文本编辑器
  150: 'checkbox', // 勾选
  152: 'checkboxs', // 多选组
  153: 'radios', // 单选组
  170: 'select', // 下拉列表框 单选
  171: 'selects', // 列表框 多选
  172: 'selectMore' // 联动下拉列表框
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

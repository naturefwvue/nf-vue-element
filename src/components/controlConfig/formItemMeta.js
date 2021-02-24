
/**
 * 表单子控件需要的属性。
 * * 共用属性部分，基本上每个控件都需要。
 */
export const baseFormMeta = {
  controlId: { // 101 控件ID，必填
    type: Number,
    required: true
  },
  colName: { // 102 字段名称，必填
    type: String,
    required: true
  },
  label: String, // 103 中文名称，标签
  controlType: { // 104 控件类型编号
    type: Number,
    default: 101
  },
  isClear: { // 105 表单控件用 连续添加时是否恢复默认值
    type: Boolean,
    default: false
  },
  defaultValue: { // 106 默认值
    type: String,
    default: ''
  },
  autofocus: { // 107 表单控件设置
    type: Boolean,
    default: false
  },
  disabled: { // 108 是否禁用
    type: Boolean,
    default: false
  },
  placeholder: String, // 109 占位提示信息
  title: String, // 110 提示信息
  size: { // 120 medium / small / mini 三选一
    type: String,
    default: 'mini',
    validator: (value) => {
      // 这个值必须匹配下列字符串中的一个
      return ['medium', 'small', 'mini'].indexOf(value) !== -1
    }
  }

}

/**
 * el-text 单行文本用的属性
 */
export const textMeta = {
  readonly: { // 只读
    type: Boolean,
    default: false
  },
  autocomplete: { // off
    type: String,
    default: 'off'
  },
  maxlength: Number, // 最大字符数
  minlength: Number, // 最小字符数
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

/**
 * 数字的属性
 */
export const numberMeta = {
  max: Number,
  min: Number,
  step: Number
}

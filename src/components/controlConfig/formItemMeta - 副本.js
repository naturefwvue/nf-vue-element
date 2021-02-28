
/**
 * 表单子控件需要的属性。
 * * 共用属性部分，基本上每个控件都需要。
 */
export const baseFormProps = {
  controlId: { // 101 控件ID，必填
    type: Number,
    required: true
  },
  // colName: { // 102 字段名称，必填
  //  type: String,
  //  required: true
  // },
  // label: String, // 103 中文名称，标签，表单控件必填
  controlType: Number, // 104 控件类型编号，必填，识别表单子控件的类型
  // isClear: { // 105 表单控件用，必填， 连续添加时是否恢复默认值
  //  type: Boolean,
  //  default: false
  // },
  // defaultValue: { // 106 默认值
  //  type: String,
  //  default: ''
  // },
  // disabled: { // 108 是否禁用
  //  type: Boolean,
  //  default: false
  // },
  // placeholder: String, // 109 占位提示信息
  // title: String, // 110 提示信息
  size: { // 109 medium / small / mini 三选一，不必填
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
export const textProps = {
  // readonly: { // 只读
  //  type: Boolean,
  //  default: false
  // },
  // autocomplete: { // off
  //  type: String,
  //  default: 'off'
  // },
  // maxlength: Number, // 最大字符数
  // minlength: Number, // 最小字符数
  show_word_limit: { // 统一设置，不必填，是否显示输入字数统计 text和area有效
    type: Boolean,
    default: true
  },
  clearable: { // 统一设置，不必填，是否显示清空标记
    type: Boolean,
    default: true
  },
  validate_event: { // 统一设置，不必填，输入时是否触发表单的校验
    type: Boolean,
    default: true
  },
  resize: { // 109 是否允许缩放  统一设置，不必填 none, both, horizontal, vertical 四选一，不必填
    type: String,
    default: 'none',
    validator: (value) => {
      // 这个值必须匹配下列字符串中的一个
      return ['none', 'both', 'horizontal', 'vertical'].indexOf(value) !== -1
    }
  }
}

/**
 * 密码的属性
 */
export const passwordProps = {
  show_password: { // 统一设置，不必填，是否显示切换密码图标
    type: Boolean,
    default: true
  }
}

/**
 * 数字的属性
 */
export const numberProps = {
  controls_position: { // 统一设置，不必填，+-号的位置
    type: String,
    default: 'right'
  }
}

/**
 * 滑块的属性
 */
export const sliderProps = {
  'input-size': { // 统一设置，不必填，是否显示切换密码图标
    type: String,
    default: 'mini',
    validator: (value) => {
      // 这个值必须匹配下列字符串中的一个
      return ['large', 'medium', 'small', 'mini'].indexOf(value) !== -1
    }
  }
}

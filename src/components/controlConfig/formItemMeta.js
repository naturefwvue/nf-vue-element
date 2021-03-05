
/**
 * 表单子控件需要的属性。
 * @this controlId 控件ID
 * * 共用属性部分，基本上每个控件都需要。
 */
export const baseFormProps = {
  controlId: { // 101 控件ID，必填
    type: Number,
    required: true
  },
  colName: String, // 102 字段名称，必填，避免自动绑定
  isClear: Boolean, // 103 连续添加是否清空，必填，避免自动绑定
  controlType: Number, // 104 控件类型编号，必填，识别表单子控件的类型
  size: { // 109 medium / small / mini 三选一，不必填
    type: String,
    default: 'mini',
    validator: (value) => {
      // 这个值必须匹配下列字符串中的一个
      return ['medium', 'small', 'mini'].indexOf(value) !== -1
    }
  },
  optionList: { // 备用选项
    type: Array,
    default: []
  },
  validate_event: { // 统一设置，不必填，输入时是否触发表单的校验
    type: Boolean,
    default: true
  }
}

/**
 * 多行文本的属性
 */
export const areaProps = {
  show_word_limit: { // 统一设置，不必填，是否显示输入字数统计 text和area有效
    type: Boolean,
    default: true
  },
  rows: { //
    type: Number,
    default: 3
  }
}

/**
 * el-text 单行文本用的属性
 */
export const textProps = {
  show_word_limit: { // 统一设置，不必填，是否显示输入字数统计 text和area有效
    type: Boolean,
    default: true
  },
  clearable: { // 统一设置，不必填，是否显示清空标记
    type: Boolean,
    default: true
  },
  resize: String // 统一设置，不必填， none, both, horizontal, vertical
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
  input_size: { // 统一设置，不必填，是否显示切换密码图标
    type: String,
    default: 'mini',
    validator: (value) => {
      // 这个值必须匹配下列字符串中的一个
      return ['large', 'medium', 'small', 'mini'].indexOf(value) !== -1
    }
  }
}

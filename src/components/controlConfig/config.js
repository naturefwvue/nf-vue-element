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

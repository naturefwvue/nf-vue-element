import { defineAsyncComponent } from 'vue'

/**
 * 组件里面注册控件用
 * * 文本
 * ** eltext 单行文本、电话、邮件、搜索
 * ** elarea 多行文本
 * ** elurl
 * * 数字
 * ** elnumber 数字
 * ** elrange 滑块
 * * 日期
 * ** eldate 日期、年月、年周、年
 * ** eltime 时间
 * * 选择
 * ** elcheckbox 勾选
 * ** elswitch 开关
 * ** elcheckboxs 多选组
 * ** elradios 单选组
 * ** elselect 下拉选择
 */
const formItemList = {
  // 文本类 defineComponent
  eltext: defineAsyncComponent(() => import('./t-text.vue')),
  elarea: defineAsyncComponent(() => import('./t-area.vue')),
  elurl: defineAsyncComponent(() => import('./t-url.vue')),
  // 数字
  elnumber: defineAsyncComponent(() => import('./n-number.vue')),
  elrange: defineAsyncComponent(() => import('./n-range.vue')),
  // 日期、时间
  eldate: defineAsyncComponent(() => import('./d-date.vue')),
  eltime: defineAsyncComponent(() => import('./d-time.vue')),
  // 选择、开关
  elcheckbox: defineAsyncComponent(() => import('./s-checkbox.vue')),
  elswitch: defineAsyncComponent(() => import('./s-switch.vue')),
  elcheckboxs: defineAsyncComponent(() => import('./s-checkboxs.vue')),
  elradios: defineAsyncComponent(() => import('./s-radios.vue')),
  elselect: defineAsyncComponent(() => import('./s-select.vue')),
  elselwrite: defineAsyncComponent(() => import('./s-selwrite.vue'))
}

/**
 * 动态组件的字典，便于v-for循环里面设置控件
 */
const formItemListKey = {
  // 文本类
  100: formItemList.elarea, // 多行文本
  101: formItemList.eltext, // 单行文本
  102: formItemList.eltext, // 密码
  103: formItemList.eltext, // 电话
  104: formItemList.eltext, // 邮件
  105: formItemList.elurl, // url
  106: formItemList.eltext, // 搜索
  // 数字
  120: formItemList.elnumber, // 数组
  121: formItemList.elrange, // 滑块
  // 日期、时间
  110: formItemList.eldate, // 日期
  111: formItemList.eldate, // 日期 + 时间
  112: formItemList.eldate, // 年月
  113: formItemList.eldate, // 年周
  114: formItemList.eldate, // 年
  115: formItemList.eltime, // 任意时间
  116: formItemList.eltime, // 选择固定时间
  // 选择、开关
  150: formItemList.elcheckbox, // 勾选
  151: formItemList.elswitch, // 开关
  152: formItemList.elcheckboxs, // 多选组
  153: formItemList.elradios, // 单选组
  160: formItemList.elselect, // 下拉
  161: formItemList.elselwrite, // 下拉多选
  162: formItemList.elselect // 下拉联动

}

export default {
  formItemList,
  formItemListKey
}

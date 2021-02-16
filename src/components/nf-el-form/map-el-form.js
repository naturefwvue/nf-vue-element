import { defineAsyncComponent } from 'vue'

const formItemList = {
  // 文本类
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
  elradios: defineAsyncComponent(() => import('./s-radios.vue')),
  elswitch: defineAsyncComponent(() => import('./s-switch.vue')),
  elcheckbox: defineAsyncComponent(() => import('./s-checkbox.vue')),
  elselect: defineAsyncComponent(() => import('./s-select.vue'))
}

const formItemListKey = {
  // 文本类
  100: formItemList.elarea,
  101: formItemList.eltext,
  102: formItemList.eltext,
  103: formItemList.eltext,
  104: formItemList.eltext,
  105: formItemList.elurl,
  106: formItemList.eltext,
  // 数字
  120: formItemList.elnumber,
  121: formItemList.elrange,
  // 日期、时间
  110: formItemList.eldate,
  112: formItemList.eltime,
  // 选择、开关
  150: formItemList.elcheckbox,
  152: formItemList.elselect,
  151: formItemList.elswitch,
  153: formItemList.elradios
}

export default {
  formItemList,
  formItemListKey
}

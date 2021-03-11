import { defineAsyncComponent } from 'vue'

/**
 * 组件里面注册控件用
 * * 文本
 * ** el-form-text 单行文本、电话、邮件、搜索
 * ** el-form-area 多行文本
 * ** el-form-password 密码
 * ** el-form-url
 * * 数字
 * ** el-form-number 数字
 * ** el-form-range 滑块
 * * 日期
 * ** el-form-date 日期、年月、年周、年
 * ** el-form-time 时间
 * * 选择
 * ** el-form-checkbox 勾选
 * ** el-form-switch 开关
 * ** el-form-checkboxs 多选组
 * ** el-form-radios 单选组
 * ** el-form-select 下拉选择
 */
export const formItemList = {
  // 文本类 defineComponent
  'el-form-text': defineAsyncComponent(() => import('./t-text.vue')),
  'el-form-area': defineAsyncComponent(() => import('./t-area.vue')),
  'el-form-url': defineAsyncComponent(() => import('./t-url.vue')),
  'el-form-password': defineAsyncComponent(() => import('./t-password.vue')),
  // 数字
  'el-form-number': defineAsyncComponent(() => import('./n-number.vue')),
  'el-form-range': defineAsyncComponent(() => import('./n-range.vue')),
  // 日期、时间
  'el-form-date': defineAsyncComponent(() => import('./d-date.vue')),
  'el-form-time': defineAsyncComponent(() => import('./d-time.vue')),
  // 选择、开关
  'el-form-checkbox': defineAsyncComponent(() => import('./s-checkbox.vue')),
  'el-form-switch': defineAsyncComponent(() => import('./s-switch.vue')),
  'el-form-checkboxs': defineAsyncComponent(() => import('./s-checkboxs.vue')),
  'el-form-radios': defineAsyncComponent(() => import('./s-radios.vue')),
  'el-form-select': defineAsyncComponent(() => import('./s-select.vue')),
  'el-form-selwrite': defineAsyncComponent(() => import('./s-selwrite.vue')),
  'el-form-select-cascader': defineAsyncComponent(() => import('./s-select-cascader.vue'))

}

/**
 * 动态组件的字典，便于v-for循环里面设置控件
 */
export const formItemListKey = {
  // 文本类
  100: formItemList['el-form-area'], // 多行文本
  101: formItemList['el-form-text'], // 单行文本
  102: formItemList['el-form-password'], // 密码
  103: formItemList['el-form-text'], // 电话
  104: formItemList['el-form-text'], // 邮件
  105: formItemList['el-form-url'], // url
  106: formItemList['el-form-text'], // 搜索
  // 数字
  120: formItemList['el-form-number'], // 数组
  121: formItemList['el-form-range'], // 滑块
  // 日期、时间
  110: formItemList['el-form-date'], // 日期
  111: formItemList['el-form-date'], // 日期 + 时间
  112: formItemList['el-form-date'], // 年月
  113: formItemList['el-form-date'], // 年周
  114: formItemList['el-form-date'], // 年
  115: formItemList['el-form-time'], // 任意时间
  116: formItemList['el-form-time'], // 选择固定时间
  // 选择、开关
  150: formItemList['el-form-checkbox'], // 勾选
  151: formItemList['el-form-switch'], // 开关
  152: formItemList['el-form-checkboxs'], // 多选组
  153: formItemList['el-form-radios'], // 单选组
  160: formItemList['el-form-select'], // 下拉
  161: formItemList['el-form-selwrite'], // 下拉多选
  162: formItemList['el-form-select-cascader'] // 下拉联动

}

// const keyControl = {
//  100: 'el-form-area',
//  101: 'el-form-text'
// }

export function formItemComponents () {
  const com = {
    'el-form-text': defineAsyncComponent(() => import('./t-text.vue')),
    'el-form-area': defineAsyncComponent(() => import('./t-area.vue')),
    'el-form-url': defineAsyncComponent(() => import('./t-url.vue')),
    'el-form-password': defineAsyncComponent(() => import('./t-password.vue')),
    // 数字
    'el-form-number': defineAsyncComponent(() => import('./n-number.vue')),
    'el-form-range': defineAsyncComponent(() => import('./n-range.vue')),
    // 日期、时间
    'el-form-date': defineAsyncComponent(() => import('./d-date.vue')),
    'el-form-time': defineAsyncComponent(() => import('./d-time.vue')),
    // 选择、开关
    'el-form-checkbox': defineAsyncComponent(() => import('./s-checkbox.vue')),
    'el-form-switch': defineAsyncComponent(() => import('./s-switch.vue')),
    'el-form-checkboxs': defineAsyncComponent(() => import('./s-checkboxs.vue')),
    'el-form-radios': defineAsyncComponent(() => import('./s-radios.vue')),
    'el-form-select': defineAsyncComponent(() => import('./s-select.vue')),
    'el-form-selwrite': defineAsyncComponent(() => import('./s-selwrite.vue')),
    'el-form-select-cascader': defineAsyncComponent(() => import('./s-select-cascader.vue'))
  }

  // console.log(keyControl)
  // alert('动态加载组件')
  /**
   * 需要一个编号，一个标签，一个动态注册的方法
   * 类型：加载全局注册的组件；加载动态加载的组件
   const aa = {
    key: 500,
    biaoqian: 'input',
    kind: 1, //
    com: {
      'input-1': 'aa'
    }
  }
  // console.log(aa)
  */

  // const canshu = inject('sysCom')
  // if (typeof canshu !== 'undefined') {
  //   console.log(canshu)
  // }
  return com
}

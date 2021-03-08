import { useStore } from 'vuex'

/**
 * 管理表单meta的状态管理类
 */
export function manageFormMetaHelp () {
  /**
   * 内部变量，状态管理
   */
  const store = useStore()

  /**
   * 返回表单meta
   */
  const getFormMeta = () => {
    return store.state.form.formMeta
  }

  /**
   * 返回表单子控件的meta，多个
   */
  const getformItemMeta = () => {
    return store.state.form.formItemMeta
  }

  /**
   * 返回当前编辑的表单子控件的meta，一个
   */
  const getCurrFormItemMeta = () => {
    return store.state.form.currFormItem
  }

  return {
    getFormMeta, // 获取表单的meta
    getformItemMeta, // 获取表单子控件的meta
    getCurrFormItemMeta // 当前表单子控件的数据
  }
}

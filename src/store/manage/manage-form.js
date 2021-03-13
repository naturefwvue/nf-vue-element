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
   * 返回整个表单的meta
   */
  const getFormMeta = () => {
    return store.state.form.formMeta
  }

  /**
   * 返回表单自己的meta
   */
  const getFormBaseMeta = () => {
    return store.state.form.formMeta.baseMeta
  }

  /**
   * 返回表单子控件的meta，多个
   */
  const getFormItemMeta = () => {
    return store.state.form.formMeta.itemMeta
  }

  /**
   * 返回当前编辑的表单子控件的meta，一个
   */
  const getCurrFormItemMeta = () => {
    return store.state.form.currFormItem
  }

  return {
    getFormMeta, // 获取表单的meta
    getFormBaseMeta, // 返回表单自己的meta
    getFormItemMeta, // 获取表单子控件的meta
    getCurrFormItemMeta // 当前表单子控件的数据
  }
}

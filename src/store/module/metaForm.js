
/**
 * 表单控件需要的meta
 * 表单的meta：
 * 表单子控件的meta
 */
export default {
  namespaced: true,
  state: () => ({
    formMeta: {
      id: 1, // 表单ID
      name: '', // 表单名称
      allColumn: [], // 显示的字段以及排序
      state: 'add', // 表单状态，添加、修改、显示（只读）
      colCount: 1 // 表单列数
    },
    formItemMeta: {
      101: {
        controlId: 101,
        colName: 'name',
        controlType: 101,
        defaultValue: '1',
        isClear: false,
        readonly: false,
        disabled: false,
        placeholder: '请输入姓名',
        title: '姓名',
        maxlength: 6,
        minlength: 2,
        autofocus: true,
        colCount: 1
      }
    },
    currFormItem: {
      id: 0, // 当前编辑的表单子控件的meta
      allItemMeta: {}, // 完整的子控件meta
      partItemMeta: {}, // 标准的子控件meta
      miniItemMeta: {} // 最简的子控件meta
    }
  })
}

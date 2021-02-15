
const metaForm = {
  namespaced: true,
  state: () => ({
    metaForm: {
      id: 1,
      name: '',
      allColumn: [],
      state: 'add',
      colCount: 1
    },
    formItem: {},
    currFormItem: {
      id: 0
    }
  })
}
export default metaForm

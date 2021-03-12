<template>
  <!--按照meta显示子控件-->
  <div>333
  </div>
  js版 json版：完全版 标准版 精简版22
  <div contenteditable="true">
    <elForm
      v-model="model"
      v-model:partModel="partModel"
      :meta="formMeta">
    </elForm>
  </div>
</template>

<script>
import { ref } from 'vue'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import { formItemList } from '@/components/nf-el-form-item/map-el-form-item.js'

import elForm from '@/components/nf-el-form/el-form-div'

/**
 * 按照表单的json渲染表单
*/
export default {
  name: 'meta-form',
  components: {
    elForm,
    ...formItemList
  },
  setup () {
    const value = ref(0)

    // 表单的model
    const model = ref({})
    const partModel = ref({})

    // 整个表单的meta
    const { getFormMeta } = manageFormMetaHelp()
    const formMeta = getFormMeta()
    console.log('整个表单的meta--------', formMeta)

    return {
      model,
      partModel,
      formMeta, // 当前表单子控件meta
      value
    }
  }

}
</script>

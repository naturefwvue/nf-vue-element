<template>
  <el-row>
    <el-col :span=24>
      表单meta{{model}}
      <elForm
        v-model="model"
        :meta="formMeta">
      </elForm>
    </el-col>
  </el-row>
</template>

<script>
import { reactive, ref } from 'vue'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import elForm from '@/components/nf-el-form/el-form-div'

/**
 * 表单meta的 辅助工具
 * ** 设置表单自己的props
 * ** 设置表单的子控件的列表
 */
export default {
  name: 'meta-help-form',
  components: {
    elForm
  },
  setup () {
    // 获取状态管理里面的表单meta
    const { getFormMeta } = manageFormMetaHelp()

    // 绑定表单控件的model
    const model = reactive({})
    // 状态管理里的表单meta的数据
    const formModel = getFormMeta()
    console.log('状态里的formmeta', formModel)

    // 加载编辑表单需要的meta
    // 读取json，获得配置。
    const json = require('@/components/plat-help/json/meta-form.json')
    console.log('编辑表单的meta', json)
    // 创建表单控件需要的meta
    const formMeta = reactive(json.formMeta) // 表单的meta
    // 添加重新绑定的开关
    formMeta.reload = false

    const value = ref(0)

    return {
      model, // 绑定表单用
      formModel, // 表单数据
      formMeta, // 创建表单控件需要的meta
      value
    }
  }

}
</script>

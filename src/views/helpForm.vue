<template>
  <div class="home">
    表单json的辅助工具
  </div>
  <div>
    <el-row>
      <el-col :span="4">
        <div>
          表单：表单的配置
          <form-meta-edit/>
        </div>
        <div>
          字段：字段列表，点击右面显示具体属性
        </div>
      </el-col>
      <el-col :span="11">
        配置
        <form-item-meta-edit/>
      </el-col>
      <el-col :span="9">
        json：
        <div contenteditable="true">
          这里显示json<br>
          <json-format :json="currItemMeta.allItemMeta"/>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=11>
        表单控件展示
      </el-col>
      <el-col :span=11>
        model数据
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import formMetaEdit from '@/components/plat-help/form/form-meta-help'
import formItemMetaEdit from '@/components/plat-help/form/form-item-meta-help'
import josnFormat from '@/components/showjson/json-format'

export default {
  name: 'formHelp',
  components: {
    'json-format': josnFormat,
    'form-item-meta-edit': formItemMetaEdit, // 编辑选中的表单子控件的meta
    'form-meta-edit': formMetaEdit // 编辑表单控件的meta
  },
  setup () {
    const value = ref('1')
    const store = useStore()
    const metaForm = store.state.metaForm

    const { getFormMeta, getCurrFormItemMeta } = manageFormMetaHelp()
    console.log('状态里的formmeta', getFormMeta())
    // 当前表单子控件meta
    const currItemMeta = getCurrFormItemMeta()
    console.log('当前表单子控件meta', currItemMeta)

    return {
      currItemMeta, // 当前表单子控件meta
      value,
      metaForm
    }
  }

}
</script>

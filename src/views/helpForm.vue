<template>
  <div class="home">
    表单 meta 的辅助工具
  </div>
  <div>
    <el-row :gutter="30">
      <el-col :span="7">
        <el-card class="box-card">
          <template #header>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span>表单的meta</span>
            </div>
          </template>
          <form-meta-edit/>
        </el-card>
        <div>
          字段：字段列表，点击右面显示具体属性
        </div>
      </el-col>
      <el-col :span="11">
        <form-item-meta-edit/>
      </el-col>
      <el-col :span="6">
        js版 json版：完全版 标准版 精简版
        <div contenteditable="true">
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
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import formMetaEdit from '@/components/plat-help/form/form-meta-help'
import formItemMetaEdit from '@/components/plat-help/form/form-item-meta-help'
import josnFormat from '@/components/plat-help/showjson/json-format'

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

    // const ref1 = ref(0)
    const ref2 = ref({ value: 0 })
    const ret1 = reactive({ value: 0 })

    console.log('--------------------')
    console.log(ref2, ret1)

    return {
      currItemMeta, // 当前表单子控件meta
      value,
      metaForm
    }
  }

}
</script>

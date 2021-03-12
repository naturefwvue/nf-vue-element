<template>
  <div class="home">
    表单 meta 的辅助工具
  </div>
  <div>
    <el-row :gutter="30">
      <el-col :span="7">
        <!--编辑表单的meta-->
        <el-card class="box-card">
          <template #header>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span>表单的meta</span>
            </div>
          </template>
          <meta-help-form/>
        </el-card>
      </el-col>
      <el-col :span="11">
        <!--编辑子控件的meta-->
        <div style="height:600px;overflow:auto">
          <meta-help-form-item/>
        </div>
      </el-col>
      <el-col :span="6">
        <!--显示子控件和json-->
        <meta-show-form-item/>
      </el-col>
    </el-row>
    <el-row>
      <!--显示表单控件和json-->
      <el-col :span="7">
        model数据
      </el-col>
      <el-col :span=11>
        表单控件展示ee
        <meta-el-form/>
      </el-col>
      <el-col :span=6>
        json数据
        <meta-show-form/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import metaHelpForm from '@/components/plat-help/form/meta-help-form'
import metaHelpFormItem from '@/components/plat-help/form/meta-help-form-item'
import metaShowFormItem from '@/components/plat-help/form/meta-show-form-item'
import metaShowForm from '@/components/plat-help/form/meta-show-form'
import metaelForm from '@/components/plat-help/form/meta-form'

export default {
  name: 'formHelp',
  components: {
    'meta-help-form': metaHelpForm, // 编辑表单控件的meta
    'meta-help-form-item': metaHelpFormItem, // 编辑选中的表单子控件的meta
    'meta-show-form-item': metaShowFormItem, // 根据子控件的meta渲染dom
    'meta-show-form': metaShowForm, // 根据子控件的meta渲染dom
    'meta-el-form': metaelForm // 根据子控件的meta渲染dom
  },
  setup () {
    const value = ref('1')
    const store = useStore()
    const metaForm = store.state.metaForm

    const { getCurrFormItemMeta } = manageFormMetaHelp()
    // console.log('状态里的formmeta', getFormMeta())
    // 当前表单子控件meta
    const currItemMeta = getCurrFormItemMeta()
    // console.log('当前表单子控件meta', currItemMeta)

    return {
      currItemMeta, // 当前表单子控件meta
      value,
      metaForm
    }
  }

}
</script>

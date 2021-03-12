<template>
  <el-card class="box-card">
    <template #header>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span>子控件的扩展属性</span>
      </div>
    </template>
    <elForm
      v-model:modelValue="model"
      v-model:partModel="partModel"
      v-model:miniModel="miniModel"
      :meta="metaBaseProps"
      @mychange="formChange"
    >
    </elForm>
  </el-card>
</template>

<script>
import { reactive, ref } from 'vue'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import elForm from '@/components/nf-el-form/el-form-div'

/**
 * 子控件的扩展属性的维护
 */
export default {
  name: 'meta-help-form-extend',
  props: {
    componentType: {
      type: Number,
      default: 101
    }
  },
  components: {
    elForm // 表单控件
  },
  setup () {
    const model = ref({})
    const partModel = ref({})
    const miniModel = ref({})

    const json = require('@/components/plat-help/json/meta-el-101.json')
    const metaBaseProps = reactive(json.formMeta)
    // 添加重新绑定的开关
    metaBaseProps.reload = false

    // 重新渲染表单
    const spanChange = () => {
      metaBaseProps.reload = !metaBaseProps.reload
    }

    // 获取状态管理里面的当前表单子控件的meta信息
    const { getCurrFormItemMeta } = manageFormMetaHelp()
    // 当前表单子控件meta
    const currItemmeta = getCurrFormItemMeta()
    // console.log('当前表单子控件meta', currItemmeta)

    const formChange = (val, controlId, colName, formModel, formPartModel) => {
      // console.log(val, controlId, colName)
      currItemmeta.allItemMeta = model.value
      currItemmeta.partItemMeta = partModel.value
      currItemmeta.miniItemMeta = miniModel.value
    }

    return {
      // 表单控件里面的子控件的事件
      formChange,
      model, // 完整的meta
      partModel, // 部分meta
      miniModel, // 精简meta
      metaBaseProps, // 基础属性表单需要的meta
      spanChange // 重新渲染表单
    }
  }
}
</script>

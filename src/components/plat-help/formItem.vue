<template>
  <div class="home">
    生成表单域元素的json
  </div>
  <div>{{formModule}}
    <el-form ref="form" :model="formModule" label-width="100px">
      <el-form-item v-for="(item, index) in platFormMeta"
        :key="'form_'+index"
        :label="item.label+'：'">
          <component
            :is="ctlList[item.controlType]"
            v-model="formModule[item.colName]"
            :meta="item">
          </component>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import elFormConfig from '@/components/nf-el-form/el-form-map.js'
import platFormManage from '@/components/plat-help/js/formManage.js'

// 定义样式
const formTitleStyle = {
  'text-align': 'right',
  'padding-right': '10px'
}

// 控件类型的属性
const metaText = reactive({
  controlId: 103,
  colName: 'controlType',
  controlType: 190,
  optionList: [],
  isClear: false,
  disabled: false,
  required: true,
  pattern: '',
  title: '组件类型',
  placeholder: '请输入组件类型',
  maxlength: 100,
  readonly: false,
  ele: {}
})

export default {
  name: 'plat-help-form-item-json',
  components: {
    ...elFormConfig.formItemList
  },
  setup () {
    const value = ref('1')
    const store = useStore()

    // 共享的要操作的meta
    const metaForm = store.state.metaForm
    // 控件字典
    const ctlList = elFormConfig.formItemListKey

    const {
      platFormMeta, // 全部的控件meta
      typeMeta,
      formModule, // 表单的实体类
      formMeta // 表单需要的meta
    } = platFormManage()

    return {
      value,
      metaForm,
      formTitleStyle,
      metaText,
      ctlList, // 控件字典
      // json
      platFormMeta, // 全部的控件meta
      typeMeta,
      formModule, // 表单的实体类
      formMeta // 表单需要的meta
    }
  }

}
</script>

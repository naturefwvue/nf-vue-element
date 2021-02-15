<template>
  <div class="home">
    生成表单域元素的json
  </div>
  <div>
    <el-form ref="form" :model="model" label-width="80px">
      <el-form-item label="活动名称">
        <eltext v-model="model.name" :meta="metaText"/>
      </el-form-item>
      <el-form-item label="遍历字段">
        <component :is="ctlList[101]" v-model="model.name" :meta="metaText"></component>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import elFormItem from '@/components/nf-el-form/map-el-form.js'

// 定义表单实体类
const model = reactive({
  age: 1,
  url: '',
  name: '',
  contact: '',
  date: null,
  time: null,
  radio: 1,
  checks: [],
  select: 1,
  switch: true

})

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
    ...elFormItem.formItemList
  },
  setup () {
    const value = ref('1')
    const store = useStore()

    const metaForm = store.state.metaForm

    const ctlList = elFormItem.formItemListKey

    return {
      value,
      metaForm,
      model,
      formTitleStyle,
      metaText,
      ctlList
    }
  }

}
</script>

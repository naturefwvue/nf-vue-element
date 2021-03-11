<template>
  <!--按照meta显示子控件-->
  <div>子控件：
    <component
      :is="ctlList[currItemMeta.allItemMeta.controlType]"
      v-model="value"
      v-bind="currItemMeta.allItemMeta"
      @myChange="mySubmit">
    </component>
  </div>
  <div>
    子控件值：{{value}}
  </div>
  <div style="margin: 5px">
    <el-radio-group v-model="metaClass" size="mini">
      <el-radio-button label="allItemMeta">全部</el-radio-button>
      <el-radio-button label="partItemMeta">标准版</el-radio-button>
      <el-radio-button label="miniItemMeta">精简版</el-radio-button>
    </el-radio-group>
  </div>
  <div>
    <json-format :json="currItemMeta[metaClass]"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import { formItemListKey, formItemComponents } from '@/components/nf-el-form-item/map-el-form-item.js'

import josnFormat from '@/components/plat-help/json-format/json-format'

/**
 * 显示子控件，显示json
 * ** 按照meta动态渲染表单子控件
 * ** 显示meta，js 格式和json文件格式
 * ** 标准版、精简版
 */
export default {
  name: 'meta-show-form-item',
  components: {
    'json-format': josnFormat,
    ...formItemComponents()
  },
  setup () {
    const value = ref(0)

    // 控件的字典
    const ctlList = formItemListKey

    // 控件的model
    const model = ref(0)
    // 获取共享数据，当前编辑的子控件的meta
    const { getCurrFormItemMeta } = manageFormMetaHelp()
    // console.log('状态里的formmeta--------', getFormMeta())
    // 当前表单子控件meta
    const currItemMeta = getCurrFormItemMeta()
    // console.log('当前表单子控件meta--------', currItemMeta)

    // meta的类别
    const metaClass = ref('partItemMeta')

    return {
      metaClass, // meta的类别，全部、标准、精简
      currItemMeta, // 当前表单子控件meta
      ctlList, // 控件字典
      model,
      value
    }
  }
}
</script>

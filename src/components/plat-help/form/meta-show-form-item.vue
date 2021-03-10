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
  js版 json版：完全版 标准版 精简版
  <div contenteditable="true">
    <json-format :json="currItemMeta.allItemMeta"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import { formItemListKey, formItemComponents } from '@/components/nf-el-form-item/map-el-form-item.js'

import josnFormat from '@/components/plat-help/showjson/json-format'

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

    return {
      currItemMeta, // 当前表单子控件meta
      ctlList, // 控件字典
      model,
      value
    }
  }
}
</script>

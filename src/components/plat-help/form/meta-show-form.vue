<template>
  <!--按照meta显示子控件-->
  <div>
    {{currItemMeta}}
  </div>
  js版 json版：完全版 标准版 精简版22
  <div contenteditable="true">
    <json-format :json="currItemMeta.allItemMeta"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import { manageFormMetaHelp } from '@/store/manage/manage-form'

import josnFormat from '@/components/plat-help/showjson/json-format'

/**
 * 显示表单控件，显示表单的json
 * ** 按照meta动态渲染表单控件
 * ** 显示meta，js 格式和json文件格式
*/
export default {
  name: 'meta-show-form-item',
  components: {
    'json-format': josnFormat
  },
  setup () {
    const value = ref(0)

    const { getFormMeta, getCurrFormItemMeta } = manageFormMetaHelp()
    console.log('状态里的formmeta--------', getFormMeta())
    // 当前表单子控件meta
    const currItemMeta = getCurrFormItemMeta()
    console.log('当前表单子控件meta--------', currItemMeta)

    return {
      currItemMeta, // 当前表单子控件meta
      value
    }
  }

}
</script>

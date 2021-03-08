<template>生成表单子控件的meta
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="13">
        <div style="padding-left:20px;">
          <elForm
            v-model:modelValue="model"
            v-model:partModel="partModel"
            :meta="meta"
            @mychange="formChange"
          >
          </elForm>
        </div>
      </el-col>
      <el-col :span="11">
        完整的 model 值：<br><br>
        <template v-for="(item, key) in model" :key="key">
          {{key}}：{{item}}<br>
        </template>
        <br>
        <hr>
        相应的 model 值：<br><br>
        <template v-for="(item, key) in partModel" :key="key">
          {{key}}：{{item}}<br>
        </template>22<br>
        {{model}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { getControlTypeOptionList } from '@/components/controlConfig/config.js'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import elForm from '@/components/nf-el-form/el-form-div'

/**
 * 生成表单子控件meta的辅助工具
 */
export default {
  name: 'form-item-meta-help',
  components: {
    elForm // 表单控件
  },
  setup () {
    const model = ref({})
    const partModel = ref({})
    const { typeOptionList } = getControlTypeOptionList()

    // 读取json，获得配置。
    // 基础属性的表单的meta
    // 扩展属性的表单的meta
    const json = require('@/views/json/meta-form.json')
    const meta = reactive(json.formMeta) // 表单的meta
    // 添加重新绑定的开关
    meta.reload = false
    // 设置组件类型
    meta.itemMeta[103].optionList = typeOptionList
    console.log('meta', meta)

    // 重新渲染表单
    const spanChange = () => {
      meta.reload = !meta.reload
    }

    // 获取状态管理里面的当前表单子控件的meta信息
    const { getCurrFormItemMeta } = manageFormMetaHelp()
    // 当前表单子控件meta
    const currItemmeta = getCurrFormItemMeta()
    console.log('当前表单子控件meta', currItemmeta)

    const formChange = (val, controlId, colName, formModel, formPartModel) => {
      console.log(val, controlId, colName)
      currItemmeta.allItemMeta = model
      currItemmeta.partItemMeta = partModel
    }

    return {
      formChange, // 表单控件里面的子控件的事件
      model,
      partModel,
      meta,
      spanChange // 重新渲染表单
    }
  }

}
</script>

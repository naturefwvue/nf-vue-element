<template>
  <el-card class="box-card">
    <template #header>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span>子控件的基础属性</span>
      </div>
    </template>
    <elForm
      v-model:modelValue="model"
      v-model:partModel="partModel"
      v-model:miniModel="miniModel"
      :meta="metaBaseProps"
      @mychange="formChange"
    >
      <!--插槽实现备选项-->
      <template v-slot:123="">
        <el-table
          stripe
          border
          :data="optionItem"
          style="width: 100%"
        >
            <el-table-column
              prop="value"
              label="value"
              width="130">
              <template #default="scope">
                <el-input-number
                  style="width:100px"
                  controls-position="right"
                  v-model="scope.row.value"
                  @input="optionInput"
                  :min="1"
                  :max="100"
                  label="备选项的编号">
                </el-input-number>
              </template>
            </el-table-column>
            <el-table-column
              prop="label"
              label="label"
              width="180">
              <template #default="scope">
                <el-input
                  @input="optionInput"
                  v-model="scope.row.label"
                  placeholder="备选项的内容"
                >
                </el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作">
            <template #default="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">
                  删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </elForm>
  </el-card>
  <!--
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
  -->
</template>

<script>
import { reactive, ref } from 'vue'
import { getControlTypeOptionList } from '@/components/controlConfig/config.js'
import { manageFormMetaHelp } from '@/store/manage/manage-form'
import elForm from '@/components/nf-el-form/el-form-div'

/**
 * 管理备选项
 * ** 下列表
 * ** 联动
 * ** 多选组和单选组
 * ** 文本框的备选
 */
const optionListManage = (model1, model2, model3) => {
  // 别选项的项目
  const optionItem = reactive([
    {
      value: 1,
      label: '11'
    },
    {
      value: 2,
      label: '22'
    }
  ])
  // 备选项的数量
  const optionCount = ref(1)

  // 同步数据
  const optionInput = (val) => {
    model1.value.optionList = optionItem
    model2.value.optionList = optionItem
    model3.value.optionList = optionItem
  }

  // 删掉一个备选项
  const handleDelete = (index, row) => {
    console.log(index, row)
  }

  return {
    optionItem,
    optionCount,
    optionInput,
    handleDelete
  }
}

/**
 * 生成表单子控件meta的辅助工具
 * * 基础属性
 * * 扩展属性
 */
export default {
  name: 'meta-help-form-item',
  components: {
    elForm // 表单控件
  },
  setup () {
    const model = ref({})
    const partModel = ref({})
    const miniModel = ref({})
    const { typeOptionList } = getControlTypeOptionList()

    // 读取json，获得配置。
    // 基础属性的表单的meta
    // 扩展属性的表单的meta
    const json = require('@/components/plat-help/json/meta-form-item.json')
    const metaBaseProps = reactive(json.formMeta) // 表单的meta
    // 添加重新绑定的开关
    metaBaseProps.reload = false
    // 设置组件类型
    metaBaseProps.itemMeta[103].optionList = typeOptionList
    // console.log('meta', meta)

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

    // 处理备选项
    const {
      optionItem,
      optionCount,
      optionInput,
      handleDelete
    } = optionListManage(model, partModel, miniModel)

    return {
      // 备选项
      optionItem,
      optionCount,
      optionInput,
      handleDelete,
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

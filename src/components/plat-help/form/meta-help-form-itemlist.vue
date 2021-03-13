<template>
  <el-table
    :data="arrItmeList"
    style="width: 100%"
    @row-click="editItem"
  >
    <el-table-column
      label="id"
      width="120">
      <template #default="scope">
        <el-input-number
          style="width:100px"
          controls-position="right"
          v-model="scope.row.controlId"
          @input="addOption"
          :min="100"
          :max="99999"
          label="备选项的数量">
        </el-input-number>
      </template>
    </el-table-column>
    <el-table-column
      label="名称"
      width="120">
      <template #default="scope">
        <el-input
          @input="optionInput"
          v-model="scope.row.colName"
          placeholder="子控件名称"
        >
        </el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { reactive, ref, toRaw } from 'vue'
import { manageFormMetaHelp } from '@/store/manage/manage-form'

/**
 * 表单的子控件的列表方式的管理
 * ** 设置子控件的id、name、和控件类型
 */
export default {
  name: 'meta-help-form-itemlist',
  components: {
  },
  setup () {
    // 获取状态管理里面的表单meta
    const { getFormItemMeta, getCurrFormItemMeta } = manageFormMetaHelp()

    // 状态管理里的表单自己的属性
    const formItemList = getFormItemMeta()
    console.log('===状态管理的表单子控件列表', formItemList)

    const currFormItemMeta = getCurrFormItemMeta()

    const arrItmeList = reactive([])
    for (const key in formItemList) {
      arrItmeList.push(formItemList[key])
    }
    // 加载编辑表单需要的meta
    // 读取json，获得配置。
    const json = require('@/components/plat-help/json/meta-form.json')
    console.log('编辑表单的meta', json)
    // 创建表单控件需要的meta
    const formMeta = reactive(json.formMeta) // 表单的meta
    // 添加重新绑定的开关
    formMeta.reload = false

    const value = ref(0)

    // 选择某一行，设置为当前的子控件
    const editItem = (row, column, event) => {
      console.log(row, column, event)
      currFormItemMeta.id = row.controlId
      Object.assign(currFormItemMeta.allItemMeta, toRaw(row))
    }

    // 把表单自己的属性设置到状态里面
    const submit = () => {
      // Object.assign(formItemList, model.value)
    }
    return {
      formItemList, // 表单数据
      arrItmeList, // 数组形式的子控件列表，用于绑定el-table
      formMeta, // 创建表单控件需要的meta
      editItem, // 选择某一行，设置为当前的子控件
      submit, // 把表单自己的属性设置到状态里面
      value
    }
  }

}
</script>

<template>
  <div >
    <el-form
      ref="form"
      :inline="false"
      class="demo-form-inline"
      :model="formModel"
      label-suffix="："
      label-width="130px"
      size="mini"
    >
      <el-row>
        <!--不循环row，直接循环col，放不下会自动往下换行。-->
        <el-col
          v-for="(ctrId, index) in formColSort"
          :key="'form_'+index"
          :span="formColSpan[ctrId]"
        >
          <el-form-item :label="getCtrMeta(ctrId).label">
            <!--表单item组件，采用动态组件的方式-->
            <component
              :is="ctlList[getCtrMeta(ctrId).controlType]"
              v-model="formModel[getCtrMeta(ctrId).colName]"
              :meta="getCtrMeta(ctrId)"
              @myChange="mySubmit">
            </component>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { watch } from 'vue'
import elFormConfig from '@/components/nf-el-form/el-form-map.js'
import formManage from '@/components/nf-el-form/el-form-manage.js'

export default {
  name: 'el-form-div',
  components: {
    ...elFormConfig.formItemList
  },
  props: {
    modelValue: Object,
    partModel: Object,
    meta: Object
  },
  setup (props, context) {
    // 控件字典
    const ctlList = elFormConfig.formItemListKey

    // 表单管理类
    const {
      formModel, // 依据meta，创建 Model
      formColSpan, // 依据meta，创建 span
      formColSort,
      setFormColSpan,
      setFormColSort, // 设置组件排序
      mySubmit
    } = formManage(props, context)

    // 监听列数的变化
    watch(() => props.meta.formColCount, (v1, v2) => {
      setFormColSpan()
    })
    // 监听reload
    watch(() => props.meta.reload, (v1, v2) => {
      setFormColSpan()
      setFormColSort()
    })

    // 监听组件值的变化，
    // 依据ID获取组件的meta，因为model不支持【】嵌套
    const getCtrMeta = (id) => {
      return props.meta.itemMeta[id] || {}
    }

    return {
      formModel,
      formColSpan,
      formColSort,
      ctlList,
      getCtrMeta,
      mySubmit
    }
  }
}
</script>

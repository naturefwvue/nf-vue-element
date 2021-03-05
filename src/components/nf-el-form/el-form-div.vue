<template>
  <div >
    <el-form
      :model="formModel"
      :rules="rules"
      ref="formModel"
      :inline="false"
      class="demo-form-inline"
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
          <el-form-item
            :label="getCtrMeta(ctrId).label"
            :prop="getCtrMeta(ctrId).colName"
          >
            <template v-if="ctrId === 103 || ctrId === 104">
              <slot :name="ctrId">父组件没有设置插槽</slot>
            </template>
            <!--表单item组件，采用动态组件的方式-->
            <component
              :is="ctlList[getCtrMeta(ctrId).controlType]"
              v-model="formModel[getCtrMeta(ctrId).colName]"
              v-bind="getCtrMeta(ctrId)"
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
import elFormConfig from '@/components/nf-el-form-item/map-el-form-item.js'
import formManage from '@/components/controlManage/formManage.js'

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

    // 表单验证的测试
    const rules = {
      colName: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    }
    return {
      formModel, // 实体类
      rules, // 验证规则
      formColSpan, // 一个子控件占几份
      formColSort, // 排序依据
      ctlList, // 子控件字典
      getCtrMeta, // 返回子控件的meta
      mySubmit
    }
  }
}
</script>

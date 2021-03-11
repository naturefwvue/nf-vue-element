<template>
  <div >
    <el-form
      :model="formModel"
      :rules="rules"
      ref="formControl"
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
        ><!--:prop="getCtrMeta(ctrId).colName"-->
          <el-form-item
            :label="getCtrMeta(ctrId).label"
          >
            <!--判断要不要加载插槽-->
            <template v-if="getCtrMeta(ctrId).controlType === 1">
              <slot :name="ctrId">父组件没有设置插槽</slot>
            </template>
            <!--表单item组件，采用动态组件的方式-->
            <template v-else>
              <component
                :is="ctlList[getCtrMeta(ctrId).controlType]"
                v-model="formModel[getCtrMeta(ctrId).colName]"
                v-bind="getCtrMeta(ctrId)"
                @myChange="mySubmit">
              </component>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button @click="resetForm">重置</el-button>
  </div>
</template>

<script>
import { watch, ref, onMounted } from 'vue'
import { formItemListKey, formItemComponents } from '@/components/nf-el-form-item/map-el-form-item.js'
import formManage from '@/components/controlManage/formManage.js'

/**
 * @function div格式的表单控件
 * @description 可以依据json动态生成表单，可以多行多列、排序、插槽、验证等
 * @returns {*} Vue组件，表单控件
 */
export default {
  name: 'el-form-div',
  components: {
    ...formItemComponents() // 动态加载表单子控件
  },
  props: {
    modelValue: Object, // 完整的model
    partModel: Object, // 根据选项过滤后的model
    miniModel: Object, // 精简的model
    meta: Object
  },
  setup (props, context) {
    // 控件字典
    const ctlList = formItemListKey
    // console.log(formItemList)

    // 表单管理类
    const {
      formModel, // 依据meta，创建 Model
      // formMiniModel, // 精简的model
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
    // 获取 $ref
    const formControl = ref(null)
    onMounted(() => {
      // console.log('表单dom', formControl)
    })

    const resetForm = () => {
      // 清空表单
      formControl.value.resetFields()
    }

    return {
      resetForm, // 重置表单
      formControl, // 获取表单dom
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

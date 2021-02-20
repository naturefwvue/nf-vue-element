<template>
  <div style="width:900px;">
    <el-form
      ref="form"
      :inline="false"
      class="demo-form-inline"
      :model="formModel"
      label-suffix="："
      label-width="130px">
      <el-row>
        <!--不循环row，直接循环col，放不下会自动往下换行。-->
        <el-col
          v-for="(ctrId, index) in meta.colOrder"
          :key="'form_'+index"
          :span="formSpan[ctrId]"
        >
          <el-form-item :label="getCtrMeta(ctrId).label">
            <!--表单item组件，采用动态组件的方式-->
            <component
              :is="ctlList[getCtrMeta(ctrId).controlType]"
              v-model="formModel[getCtrMeta(ctrId).colName]"
              :meta="getCtrMeta(ctrId)"
              @input="mySubmit">
            </component>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import elFormConfig from '@/components/nf-el-form/map-el-form.js'
import { reactive, ref, watch } from 'vue'

/**
 * 表单的管理类
 * * 创建v-model
 * * 调整列数
 * * 合并
 */
const formManage = (props, context) => {
  // 定义 v-model
  const formModel = reactive({})
  // 表单meta
  const formMeta = props.meta
  console.log('formMeta', formMeta)
  // 表单元素meta
  const formItemMeta = formMeta.itemMeta
  // 表单验证meta
  // const formRuleMeta = formMeta.ruleMeta

  // 创建 v-model
  const createModel = () => {
    // 依据meta，创建module
    for (const key in formItemMeta) {
      const m = formItemMeta[key]
      // 根据控件类型设置属性值
      switch (m.controlType) {
        case 100: // 文本类
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 130:
        case 131:
          formModel[m.colName] = ''
          break
        case 110: // 日期
        case 111: // 日期时间
        case 112: // 年月
        case 114: // 年
        case 113: // 年周
          formModel[m.colName] = null
          break
        case 115: // 任意时间
          formModel[m.colName] = '00:00:00'
          break
        case 116: // 选择时间
          formModel[m.colName] = '00:00'
          break
        case 120: // 数字
        case 121:
          formModel[m.colName] = 0
          break
        case 150: // 勾选
        case 151: // 开关
          formModel[m.colName] = false
          break
        case 153: // 单选组
        case 160: // 下拉单选
        case 162: // 下拉联动
          formModel[m.colName] = null
          break
        case 152: // 多选组
        case 161: // 下拉多选
          formModel[m.colName] = []
          break
      }
      // 看看有没有设置默认值
      if (typeof m.defaultValue !== 'undefined') {
        switch (m.defaultValue) {
          case '':
            break
          case '{}':
            formModel[m.colName] = {}
            break
          case '[]':
            formModel[m.colName] = []
            break
          case 'date':
            formModel[m.colName] = new Date()
            break
          default:
            formModel[m.colName] = m.defaultValue
            break
        }
      }
    }
    // 同步父组件的v-model
    context.emit('update:modelValue', formModel)
    return formModel
  }

  // 调整行列
  const span = reactive({})
  // 根据配置里面的colCount，设置span
  const getSpan = () => {
    const formColCount = formMeta.formColCount // 列数
    const moreColSpan = 24 / formColCount // 一个格子占多少份

    if (formColCount === 1) {
    // 一列的情况
      for (const key in formItemMeta) {
        const m = formItemMeta[key]
        if (typeof m.colCount === 'undefined') {
          span[m.controlId] = moreColSpan
        } else {
          if (m.colCount >= 1) {
            // 单列，多占的也只有24格
            span[m.controlId] = moreColSpan
          } else if (m.colCount < 0) {
            // 挤一挤的情况， 24 除以 占的份数
            span[m.controlId] = moreColSpan / (0 - m.colCount)
          }
        }
      }
    } else {
      // 多列的情况
      for (const key in formItemMeta) {
        const m = formItemMeta[key]
        if (typeof m.colCount === 'undefined') {
          span[m.controlId] = moreColSpan
        } else {
          if (m.colCount < 0 || m.colCount === 1) {
            // 多列，挤一挤的占一份
            span[m.controlId] = moreColSpan
          } else if (m.colCount > 1) {
            // 多列，占的格子数 * 份数
            span[m.controlId] = moreColSpan * m.colCount
          }
        }
      }
    }
  }
  // 先运行一次
  getSpan()

  // 向父组件提交 model
  const mySubmit = () => {
    context.emit('update:modelValue', formModel)
  }

  return {
    createModel,
    mySubmit,
    span,
    getSpan
  }
}

export default {
  name: 'el-form-div',
  components: {
    ...elFormConfig.formItemList
  },
  props: {
    modelValue: Object,
    meta: Object
  },
  setup (props, context) {
    const value = ref('11')

    // 控件字典
    const ctlList = elFormConfig.formItemListKey

    // 表单管理类
    const {
      createModel,
      span,
      getSpan,
      mySubmit
    } = formManage(props, context)

    // 依据meta，创建 Model
    const formModel = createModel()
    console.log('model', formModel)
    // 依据meta，创建 span
    const formSpan = span

    // 监听列数的变化
    watch(() => props.meta.formColCount, (v1, v2) => {
      getSpan()
    })
    // 监听列数的变化
    watch(() => props.meta.reload, (v1, v2) => {
      getSpan()
    })

    // 依据ID获取组件的meta，因为model不支持【】嵌套
    const getCtrMeta = (id) => {
      return props.meta.itemMeta[id] || {}
    }

    return {
      value,
      ctlList,
      formModel,
      mySubmit,
      formSpan,
      getCtrMeta
    }
  }
}
</script>

<template>
  <!--表单控件-->
  <el-row :gutter="20">
    <el-col :span="12">
      <el-form ref="form" :model="model" label-width="80px">
        <el-row>
          <el-col :span="10">
            <el-form-item label="活动名称">
              <eltext v-model="model.name" :meta="metaText"/>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="年龄要求">
              <elnumber v-model="model.age" :meta="metaText" @input="myChange"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="活动日期">
          <eldate v-model="model.date" :meta="metaDate" @input="myChange"/> -
          <eltime v-model="model.time" :meta="metaTime" @input="myChange"/>
        </el-form-item>
        <el-form-item label="活动网址">
          <elurl v-model="model.url" :meta="metaText" @input="myChange"/>
        </el-form-item>
        <el-form-item label="年龄要求">
          <elrange v-model="model.age" :meta="metaText" @input="myChange"/>
        </el-form-item>
        <el-form-item label="活动区域">
          <elselect v-model="model.select" :meta="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="即时配送">
          <elradios v-model="model.radio" :meta="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="活动性质">
          <elcheckbox v-model="model.checks" :meta="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="特殊资源">
          <elswitch v-model="model.switch" :meta="metaText" @input="myChange"/>
        </el-form-item>
        <el-form-item label="活动形式">
          <elarea v-model="model.contact" :meta="metaText" @input="myChange"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="11">
        表单值：<br>
      <template v-for="(item, key) in model" :key="key">
        {{key}}：{{item}}<br>
      </template>
    </el-col>
  </el-row>
  <!--查询控件-->
  <!--列表控件-->
  <!--分页控件-->
</template>

<script>
import { reactive, ref } from 'vue'
import elFormConfig from '@/components/nf-el-form/map-el-form.js'

export default {
  name: 'eleBase',
  components: {
    ...elFormConfig.formItemList
  },
  setup () {
    // 定义表单实体类
    const model = reactive({
      age: 1,
      url: '',
      name: '',
      contact: '',
      date: '2020w18',
      time: null,
      radio: 1,
      checks: [],
      select: 1,
      switch: true

    })

    // 定义样式
    const formTitleStyle = {
      'text-align': 'right',
      'padding-right': '10px'
    }

    // 控件类型的属性
    const metaText = reactive({
      controlId: 103,
      colName: 'controlType',
      controlType: 101,
      defaultValue: '1',
      optionList: [],
      isClear: false,
      disabled: false,
      required: true,
      pattern: '',
      title: '组件类型',
      placeholder: '请输入组件类型',
      maxlength: 100,
      readonly: false,
      ele: {}
    })
    // 下拉
    const metaSelect = reactive({
      controlId: 170,
      colName: 'select',
      controlType: 170,
      defaultValue: '1',
      optionList: [
        { value: 1, label: '选项一' },
        { value: 2, label: '选项二' },
        { value: 3, label: '选项三' },
        { value: 4, label: '选项四' },
        { value: 5, label: '选项五' },
        { value: 6, label: '选项六' },
        { value: 7, label: '选项七' }
      ],
      isClear: false,
      disabled: false,
      required: true,
      pattern: '',
      title: '下拉列表框',
      placeholder: '请选择'
    })
    // 日期
    const metaDate = reactive({
      controlId: 120,
      colName: 'date',
      controlType: 115,
      defaultValue: '2020-1-8',
      isClear: false,
      disabled: false,
      required: true,
      placeholder: '请选择日期',
      readonly: false
    })
    // 时间
    const metaTime = reactive({
      controlId: 121,
      colName: 'time',
      controlType: 112,
      defaultValue: '00:00:00',
      isClear: false,
      disabled: false,
      required: true,
      placeholder: '请选择日期',
      readonly: false
    })
    // 定义
    const currentTabComponent = ref('elurl')

    const myChange = (e) => {
      // console.log('changele')
    }

    return {
      currentTabComponent,
      model,
      formTitleStyle,
      metaText,
      metaSelect,
      metaDate,
      metaTime,
      myChange
    }
  }

}
</script>

<template>
  <!--表单控件-->
  <el-row :gutter="20">
    <el-col :span="12">
      <el-form
        ref="form"
        :model="model"
        label-width="80px"
        :rules="rules"
      >
        <el-form-item label="单行文本"  prop="text">
          <el-form-text v-model="model.text" v-bind="metaText">
             <template #prepend>
              <el-select v-model="select" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
            </template>
          </el-form-text>
        </el-form-item>
        <el-form-item label="多行文本">
          <el-form-area v-model="model.area" v-bind="metaArea" @input="myChange"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-form-password v-model="model.psw" v-bind="metaPassword"/>
        </el-form-item>
        <el-form-item label="url">
          <el-form-url v-model="model.url" v-bind="metaUrl" @input="myChange"/>
        </el-form-item>
        <el-form-item label="数字">
          <el-form-number v-model="model.number" v-bind="metaNumber" @input="myChange"/>
        </el-form-item>
        <el-form-item label="滑块">
          <el-form-range v-model="model.slider" v-bind="metaRange" @input="myChange"/>
        </el-form-item>
        <el-form-item label="开关">
          <el-form-switch v-model="model.switch" v-bind="metaSwitch" @input="myChange"/>
        </el-form-item>
        <el-form-item label="勾选">
          <el-form-checkbox v-model="model.switch" v-bind="metaSwitch" @input="myChange"/>
        </el-form-item>
        <el-form-item label="单选组">
          <el-form-radios v-model="model.radio" v-bind="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="多选组">
          <el-form-checkboxs v-model="model.checks" v-bind="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="下拉单选">
          <el-form-select v-model="model.selectId" v-bind="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="下拉多选">
          <el-form-select v-model="model.selectMore" v-bind="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="下拉级联">
          <el-form-select-cascader v-model="model.selecCascader" v-bind="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="可填可选">
          <el-form-selwrite v-model="model.selectwrite" v-bind="metaSelwrite" @input="myChange"/>
        </el-form-item>
        <el-form-item label="日期">
          <el-form-date v-model="model.date" v-bind="metaDate" @input="myChange"/> -
        </el-form-item>
        <el-form-item label="时间">
          <el-form-time v-model="model.time" v-bind="metaTime" @input="myChange"/>
        </el-form-item>
        <el-form-item>
          <component :is="'el-input'" v-model="model.name" v-bind="{autofocus:true, maxlength: 10 }" ></component>
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
</template>

<script>
import { reactive } from 'vue'
import elFormConfig from '@/components/nf-el-form-item/map-el-form-item.js'

const meteList = {
  // 单行文本的属性
  metaText: reactive({
    controlId: 101,
    colName: 'name',
    controlType: 101,
    // defaultValue: '1',
    // isClear: false,
    // readonly: false,
    // disabled: false,
    // placeholder: '请输入姓名',
    // title: '姓名',
    // maxlength: 6,
    // minlength: 2,
    // autofocus: true,
    'suffix-icon': 'el-icon-date'
  }),
  // 多行文本的属性
  metaArea: reactive({
    controlId: 100,
    controlType: 100,
    colName: 'name'
  }),
  // 密码的属性
  metaPassword: reactive({
    controlId: 103,
    controlType: 101,
    colName: 'name'
  }),
  // url的属性
  metaUrl: reactive({
    controlId: 103,
    controlType: 101,
    colName: 'name'
  }),
  // 数字的属性
  metaNumber: reactive({
    controlId: 103,
    controlType: 101,
    colName: 'age'
  }),
  // 滑块的属性
  metaRange: reactive({
    controlId: 103,
    controlType: 101,
    colName: 'age'
  }),
  // 开关的属性
  metaSwitch: reactive({
    controlId: 103,
    controlType: 101,
    colName: 'age'
  }),
  // 单选组、多选组、下拉的属性
  metaSelect: reactive({
    controlId: 152,
    colName: 'select',
    controlType: 152,
    defaultValue: 1,
    optionList: [
      { value: 1, label: '选项一' },
      { value: 2, label: '选项二' },
      { value: 3, label: '选项三' },
      { value: 4, label: '选项四' },
      { value: 5, label: '选项五' },
      { value: 6, label: '选项六' },
      { value: 7, label: '选项七' }
    ]
  }),
  // 下拉可写
  metaSelwrite: reactive({
    controlId: 170,
    colName: 'select11',
    controlType: 170,
    defaultValue: [],
    optionList: [
      { value: 1, label: '选项一' },
      { value: 2, label: '选项二' },
      { value: 3, label: '选项三' },
      { value: 4, label: '选项四' },
      { value: 5, label: '选项五' },
      { value: 6, label: '选项六' },
      { value: 7, label: '选项七' }
    ],
    title: '我同意条款',
    placeholder: '请选择'
  }),
  // 日期
  metaDate: reactive({
    controlId: 110,
    colName: 'date',
    controlType: 110,
    defaultValue: '2018-1-8',
    placeholder: '请选择日期'
  }),
  // 时间
  metaTime: reactive({
    controlId: 121,
    colName: 'time',
    controlType: 115,
    defaultValue: '00:00:00',
    placeholder: '请选择日期'
  })
}

export default {
  name: 'eleBase',
  components: {
    ...elFormConfig.formItemList
  },
  setup (props, ctx) {
    console.log('ctx', ctx)
    // 定义表单实体类
    const model = reactive({
      text: '', // 单行文本
      area: '', // 多行文本
      psw: '', // 密码
      url: '', // 网址
      number: 1, // 数字
      slider: 1, // 滑块
      switch: false, // 开关
      radio: null, // 单选组
      checks: [], // 多选组
      selectId: null, // 下拉单选
      selectMore: [], // 下拉单选多选
      selecCascader: [], // 下拉级联
      selectwrite: null, // 可选可填
      check: false,
      date: '2020-1-1', // 日期
      time: null, // 时间
      select: [],
      myName: ''

    })

    const rules = {
      text: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    }

    // 定义样式
    const formTitleStyle = {
      'text-align': 'right',
      'padding-right': '10px'
    }

    // 定义

    const myChange = (e) => {
      // console.log('changele')
    }

    return {
      model,
      rules,
      formTitleStyle,
      myChange,
      ...meteList
    }
  }

}
</script>

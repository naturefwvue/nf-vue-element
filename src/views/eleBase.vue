<template>
  <!--表单控件-->
  <el-row :gutter="20">
    <el-col :span="12">
      <el-form ref="form" :model="model" label-width="80px">
        <el-row>
          <el-col :span="10">
            <el-form-item label="活动名称">
              <eltext v-model="model.name" v-bind="metaText"/>
            </el-form-item>
          </el-col>
          <!--
          <el-col :span="10">
            <el-form-item label="年龄要求">
              <elnumber v-model="model.age" :meta="metaText" @input="myChange"/>
            </el-form-item>
          </el-col>
          -->
        </el-row>
        <!--
        <el-form-item label="活动性质">
          <elcheckbox v-model="model.check" :meta="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="这是开关">
          <elswitch v-model="model.switch" :meta="metaText" @input="myChange"/>
        </el-form-item>
        <el-form-item label="即时配送">
          <elradios v-model="model.radio" :meta="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="活动性质">
          <elcheckboxs v-model="model.checks" :meta="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="活动区域">
          <elselect v-model="model.select" :meta="metaSelect" @input="myChange"/>
        </el-form-item>
        <el-form-item label="活动区域">
          <elselwrite v-model="model.select" :meta="metaSelwrite" @input="myChange"/>
        </el-form-item>
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
        <el-form-item label="活动形式">
          <elarea v-model="model.contact" :meta="metaText" @input="myChange"/>
        </el-form-item>
        <el-form-item>
          <component :is="'el-input'" v-model="model.name" v-bind="{autofocus:true, maxlength: 10 }" ></component>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
        -->
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
import elFormConfig from '@/components/nf-el-form/el-form-map.js'

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
      date: '2020-1-1',
      time: null,
      check: false,
      switch: true,
      radio: null,
      checks: [],
      select: []

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
      autofocus: true,
      // optionList: [],
      isClear: false,
      disabled: false,
      title: '组件类型',
      placeholder: '请输入组件类型',
      maxlength: 100,
      readonly: false
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
      title: '我同意条款',
      placeholder: '请选择'
    })
    // 下拉可写
    const metaSelwrite = reactive({
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
      isClear: false,
      disabled: false,
      required: true,
      pattern: '',
      title: '我同意条款',
      placeholder: '请选择'
    })
    // 日期
    const metaDate = reactive({
      controlId: 120,
      colName: 'date',
      controlType: 110,
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
      controlType: 115,
      defaultValue: '00:00:00',
      isClear: false,
      disabled: false,
      required: true,
      placeholder: '请选择日期',
      readonly: false
    })
    // 定义

    const myChange = (e) => {
      // console.log('changele')
    }

    return {
      model,
      formTitleStyle,
      metaText,
      metaSelect,
      metaSelwrite,
      metaDate,
      metaTime,
      myChange
    }
  }

}
</script>

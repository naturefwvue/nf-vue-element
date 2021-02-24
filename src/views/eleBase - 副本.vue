<template>
  <!--直接使用el-row、el-col-->
  <div class="home">
    <el-row>
      <el-col :span="6" :style="formTitleStyle">
        文本框：
      </el-col>
      <el-col :span="18">
        <eltext v-model="model.name" :meta="metaText"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :style="formTitleStyle">
        多行文本框：
      </el-col>
      <el-col :span="18" :style="formTitleStyle">
        <elarea v-model="model.contact" :meta="metaText" @input="myChange"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :style="formTitleStyle">
        URL：
      </el-col>
      <el-col :span="18">
        <elurl v-model="model.url" :meta="metaText" @input="myChange"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :style="formTitleStyle">
        数字：
      </el-col>
      <el-col :span="18">
        <elnumber v-model="model.age" :meta="metaText" @input="myChange"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :style="formTitleStyle">
        ：
      </el-col>
      <el-col :span="18">

      </el-col>
    </el-row>
    <br>
    <div style="text-align:left;padding-left:100px;">
      表单值：<br>
      <template v-for="(item, key) in model" :key="key">
        {{key}}：{{item}}<br>
      </template>
    </div>
  </div>
  <!--直接使用el-form-->
  <div>
    <el-form ref="form" :model="model" label-width="80px">
      <el-form-item label="活动名称">
        <eltext v-model="model.name" :meta="metaText"/>
      </el-form-item>
      <el-form-item label="活动网址">
        <elurl v-model="model.url" :meta="metaText" @input="myChange"/>
      </el-form-item>
      <el-form-item label="年龄要求">
        <elnumber v-model="model.age" :meta="metaText" @input="myChange"/>
      </el-form-item>
      <el-form-item label="年龄要求">
        <elrange v-model="model.age" :meta="metaText" @input="myChange"/>
      </el-form-item>
      <el-form-item label="活动区域">
        <elselect v-model="model.select" :meta="metaText" @input="myChange"/>
      </el-form-item>
      <el-form-item label="活动日期">
        <eldate v-model="model.date" :meta="metaText" @input="myChange"/> -
        <eltime v-model="model.time" :meta="metaText" @input="myChange"/>
      </el-form-item>
      <el-form-item label="即时配送">
        <elradios v-model="model.radio" :meta="metaText" @input="myChange"/>
      </el-form-item>
      <el-form-item label="活动性质">
        <elcheckbox v-model="model.checks" :meta="metaText" @input="myChange"/>
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
    <component :is="'elurl'" v-model="model.url" :meta="metaText" @input="myChange"></component>
  </div>
  <!--使用el-form的v-for-->

</template>

<script>
import { reactive, ref } from 'vue'
import eltext from '@/components/nf-el-form-item/t-text.vue'
import elarea from '@/components/nf-el-form-item/t-area.vue'
import elurl from '@/components/nf-el-form-item/t-url.vue'
import elnumber from '@/components/nf-el-form-item/n-number.vue'
import elrange from '@/components/nf-el-form-item/n-range.vue'
import eldate from '@/components/nf-el-form-item/d-date.vue'
import eltime from '@/components/nf-el-form-item/d-time.vue'
import elradios from '@/components/nf-el-form-item/s-radios.vue'
import elcheckbox from '@/components/nf-el-form-item/s-checkbox.vue'
import elselect from '@/components/nf-el-form-item/s-select.vue'
import elswitch from '@/components/nf-el-form-item/s-switch.vue'

export default {
  name: 'eleBase',
  components: {
    eltext,
    elarea,
    elurl,
    elnumber,
    elrange,
    eldate,
    eltime,
    elradios,
    elcheckbox,
    elselect,
    elswitch

  },
  setup () {
    // 定义表单实体类
    const model = reactive({
      age: 1,
      url: '',
      name: '',
      contact: '',
      date: null,
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
      controlType: 190,
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

    // 定义
    const currentTabComponent = ref('elurl')

    const myChange = (e) => {
      // alert(e)
      console.log('changele')
    }

    return {
      currentTabComponent,
      model,
      formTitleStyle,
      metaText,
      myChange
    }
  }

}
</script>

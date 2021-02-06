<template>
  <div class="" style="text-align: left;">
    <el-row>
      <el-col :span="9">
        <el-row>
          <el-col :span="20">
            参数：
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            placeholder:
          </el-col>
          <el-col :span="10">{{test}}
            <input type="text" v-model="meta.placeholder"/>
          </el-col>
        </el-row>
          <el-row>
          <el-col :span="8">
            type:
          </el-col>
          <el-col :span="10">
            <nfselect v-model="meta.controlType" :meta="metaType"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="9">
        值：{{value}}<br>
        <nftext v-model="value" :test="test" :meta="meta"/><br>
      </el-col>
      <el-col :span="5">
        <template v-for="(item, key, index) in meta" :key="index">
          {{index}}-{{key}}:{{item}}<br>
        </template>
      </el-col>
    </el-row>

  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref } from 'vue'
import nftext from '@/components/nf-html/input-text.vue'
import nfselect from '@/components/nf-html/select.vue'

export default {
  name: 'Home',
  components: {
    nftext,
    nfselect
  },
  setup () {
    // 测试控件内部修改
    const test = ref('111')
    // 控件值
    const value = ref('')
    // 控件属性
    const meta = reactive({
      controlId: 1000,
      colName: 'companyName',
      controlType: 101,
      // isClear: true,
      // disabled: false,
      // required: true,
      // readonly: false,
      // pattern: '',
      // class: '',
      placeholder: '请输入公司名称',
      title: '公司名称',
      autocomplete: 'on',
      size: 30,
      maxlength: 100,
      optionList: [],
      tdCount: 1
    })

    // 控件类型的属性
    const metaType = reactive({
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
      readonly: false
    })

    const type = [
      { value: 100, title: '多行文本框' },
      { value: 101, title: '单行文本框' },
      { value: 102, title: '密码框' },
      { value: 103, title: '电话' },
      { value: 104, title: '电子邮件' },
      { value: 105, title: 'url' },
      { value: 106, title: '搜索' },
      { value: 107, title: '当前登录人' },
      { value: 120, title: '富文本编辑器' },
      { value: 131, title: '数字' },
      { value: 132, title: '滑块' },
      { value: 140, title: '日期' },
      { value: 141, title: '日期时间' },
      { value: 142, title: '时间' },
      { value: 143, title: '年月' },
      { value: 144, title: '年周' },
      { value: 150, title: '上传文件' },
      { value: 151, title: '上传图片' },
      { value: 160, title: '颜色' },
      { value: 170, title: '弹窗选择记录' },
      { value: 180, title: '勾选' },
      { value: 182, title: '多选组' },
      { value: 183, title: '单选组' },
      { value: 190, title: '下拉列表框' },
      { value: 191, title: '列表框' },
      { value: 192, title: '联动下拉列表框' }
    ]

    metaType.optionList = type

    return {
      test,
      value,
      meta,
      metaType
    }
  }
}
</script>

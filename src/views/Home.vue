<template>
  <div class="" style="text-align: left;">
    <el-row>
      <el-col :span="11">
        共享数据：
      </el-col>
      <el-col :span="11">
        本组件数据：
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from 'vue'

export default {
  name: 'Home',
  components: {
  },
  setup () {
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
      { value: 107, title: '颜色' },
      { value: 108, title: '弹窗选择记录' },
      { value: 110, title: '日期' },
      { value: 111, title: '日期时间' },
      { value: 112, title: '时间' },
      { value: 113, title: '年月' },
      { value: 114, title: '年周' },
      { value: 120, title: '数字' },
      { value: 121, title: '滑块' },
      { value: 130, title: '上传文件' },
      { value: 131, title: '上传图片' },
      { value: 140, title: '富文本编辑器' },
      { value: 150, title: '勾选' },
      { value: 152, title: '多选组' },
      { value: 153, title: '单选组' },
      { value: 160, title: '下拉列表框' },
      { value: 161, title: '列表框' },
      { value: 162, title: '联动下拉列表框' }
    ]

    metaType.optionList = type

    return {
      metaType
    }
  }
}
</script>

<template>
  <!---->
  <input :id="'c' + meta.controlId"
    :type="type[meta.controlType]"
    :name="'c' + meta.controlId"
    :value="modelValue"
    :disabled="meta.disabled"
    :readonly="meta.readonly"
    :class="meta.class"
    :placeholder="meta.placeholder"
    :title="meta.title"
    :size="meta.size"
    :maxlength="meta.maxlength"
    :autocomplete="meta.autocomplete"
    :list="meta.optionKey"
    @input="myInput"
    :key="'ckey_'+meta.controlId">
    <!--文本框的备选项-->
    <datalist v-if="typeof(meta.optionKey)!=='undefined'" :id="meta.optionKey">
      <option :key="item.value" v-for="item in meta.optionList" :label="item.title" :value="item.value" />
    </datalist>
    {{test}}22--{{modelValue}}
</template>

<script>
import { ref, toRefs } from 'vue'

const metaProp = {
  type: Object,
  default: () => {
    return {
      // 通用
      controlId: Number, // 编号，区别同一个表单里的其他控件
      colName: String, // 字段名称
      controlType: Number, // 用类型编号表示type
      isClear: {
        // isClear  连续添加时是否恢复默认值
        type: Boolean,
        default: false
      },
      defaultValue: String, // 默认值
      autofocus: { // 是否自动获得焦点
        type: Boolean,
        default: false
      },
      disabled: {
        // 是否禁用
        type: Boolean,
        default: false
      },
      required: { // 必填
        type: Boolean,
        default: true
      },
      readonly: { // 只读
        type: Boolean,
        default: false
      },
      pattern: String, // 用正则做验证。
      class: {
        type: String,
        default: 'ant-input ant-input-sm'
      },
      placeholder: String,
      title: String, // 提示信息
      size: Number, // 字符宽度
      maxlength: Number, // 最大字符数
      autocomplete: { // off
        type: String,
        default: 'on'
      },
      optionKey: String, // 备选文字标识
      optionItem: Object // 备选的选项
    }
  }
}

export default {
  name: 'nf-html-form-input-text',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    test: String,
    modelValue: String,
    meta: metaProp
  },
  emits: ['enlarge-text'],
  setup (props, context) {
    const myProps = toRefs(props)
    console.log('props:', props)
    console.log('myProps:', myProps)

    myProps.meta.value.placeholder = '内部修改'
    myProps.test.value = '内部修改1111'
    console.log('myProps.test:', myProps.test)

    const v = ref(1)
    const type = {
      100: 'textarea', // 多行文本框
      101: 'text', // 单行文本框
      102: 'password', // 密码
      103: 'tel', // 电话
      104: 'email', // 电子邮件
      105: 'url', // url
      106: 'search', // 搜索
      107: 'text', // 当前登录人
      120: 'fulltext', // 富文本编辑器
      131: 'number', // 数字
      132: 'range', // 滑块
      140: 'date', // 日期
      141: 'datetime-local', // 日期时间
      142: 'time', // 时间
      143: 'month', // 年月
      144: 'week', // 年周
      150: 'file', // 上传文件
      151: 'file', // 上传图片
      160: 'color', // 颜色
      170: 'text', // 弹窗选择记录
      180: 'checkbox', // 勾选
      182: 'checkboxs', // 多选组
      183: 'radios', // 单选组
      190: 'select', // 下拉列表框 单选
      191: 'selects', // 列表框 多选
      192: 'selectMore' // 联动下拉列表框
    }

    const myInput = (e) => {
      console.log(e)
      console.log(context)
      context.emit('update:modelValue', e.target.value)
    }

    return {
      v,
      type,
      myInput
    }
  }
}
</script>

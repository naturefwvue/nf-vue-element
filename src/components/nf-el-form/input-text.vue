<template>
  <!---->
  <el-input :id="'c' + meta.controlId"
    :value="modelValue"
    @input="myInput"
    :name="'c' + meta.controlId"
    :disabled="meta.disabled"
    :readonly="meta.readonly"
    :class="meta.class"
    :placeholder="meta.placeholder"
    :title="meta.title"
    :size="meta.size"
    :maxlength="meta.maxlength"
    :autocomplete="meta.autocomplete"
    :list="meta.optionKey"
    :key="'ckey_'+meta.controlId"
  >
  </el-input>{{modelValue}}
</template>

<script>
import { defineComponent, ref } from 'vue'

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

export default defineComponent({
  name: 'nf-html-form-text',
  props: {
    modelValue: String,
    meta: metaProp
  },
  emits: ['input'],
  setup (props, context) {
    console.log('props:', props)

    const v = ref(1)

    const myInput = (e) => {
      console.log(e)
      console.log(props)
      context.emit('update:modelValue', e)
      console.log(props)
    }

    return {
      v,
      myInput
    }
  }
})
</script>

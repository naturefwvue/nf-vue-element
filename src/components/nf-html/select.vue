/** 下拉列表框，多选的那个再考虑考虑 */
<template>
  <select :id="'c'+meta.controlId"
    :name="'c'+meta.controlId"
    :class="meta.class"
    :multiple="meta.controlType === 191"
    :disabled="meta.disabled"
    @change="myInput"
    >
      <option :key="-2" value="-2" >请选择</option>
      <option
        v-for="(item,index) in meta.optionList"
        :key="index"
        :value="item.value"
        :selected="modelValue==item.value">
          {{item.title}}
      </option>
    </select>
</template>

<script>

export default {
  name: 'nf-html-form-select',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    modelValue: String,
    meta: {
      type: Object,
      default: () => {
        return {
          controlId: Number, // 编号，区别同一个表单里的其他控件
          controlType: Number, // 用类型编号表示type
          colName: String, // 字段名称
          isClear: { // isClear  连续添加时是否恢复默认值
            type: Boolean,
            default: false
          },
          disabled: { // 是否禁用
            type: Boolean,
            default: false
          },
          required: { // 必填
            type: Boolean,
            default: true
          },
          max: { // 最多选择数量，0表示不限制
            type: Number,
            default: 0
          },
          class: String,
          title: String // 中文名称
        }
      }
    }
  },
  methods: {
    myInput: function (e) {
      var returnValue = e.target.value
      var colName = this.meta.colName
      if (this.meta.controlType === 190) {
        // 单选
        if (!isNaN(returnValue)) { // 如果是数字，返回number类型的值
          returnValue = parseInt(returnValue)
        }
      } else {
        // 多选
        var arr = []
        var opts = e.target.options
        for (var i = 0; i < opts.length; i += 1) {
          var opt = opts[i]
          if (opt.selected) {
            arr.push(opt.value)
            // 检查是否超过最大限制。
            if (this.meta.max > 0) {
              if (arr.length > this.meta.max) {
                alert('超过了最大选择数量')
                opt.selected = false
                arr = []
                for (var j = 0; j < opts.length; j += 1) {
                  opt = opts[j]
                  if (opt.selected) {
                    arr.push(opt.value)
                  }
                }
              }
            }
          }
        }
        returnValue = arr.join(',')
      }
      this.$emit('update:modelValue', returnValue) // 返回给调用者
      this.$emit('getvalue', returnValue, colName) // 返回给中间组件
    }
  }
}
</script>

<template>
  <div class="home">
    父组件的值：{{value}}<br>
    element的文本框：<eltext v-model="value" :meta="metaText"/><br>
    element的文本域：<elarea v-model="value" :meta="metaText" @input="myChange"/><br>
    element的文本域：<elurl v-model="value" :meta="metaText" @input="myChange"/><br>
    原生文本框：<input type="text" v-model="value"/>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
// import mytext from '@/components/nf-html/input-text2.vue'
import eltext from '@/components/nf-el-form/input-text.vue'
import elarea from '@/components/nf-el-form/textarea.vue'
import elurl from '@/components/nf-el-form/url.vue'

export default {
  name: 'eleBase',
  components: {
    eltext,
    elarea,
    elurl
  },
  setup () {
    const value = ref('1')

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
      readonly: false
    })

    const myChange = (e) => {
      // alert(e)
      console.log('changele')
    }

    return {
      value,
      metaText,
      myChange
    }
  }

}
</script>

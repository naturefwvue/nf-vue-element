<template>
  <div class="home">
    <text1 :meta="meta"/>
  </div>
</template>

<script>
// @ is an alias to /src
import text1 from '@/components/nf-html/input-text.vue'
import { reactive } from 'vue'

export default {
  name: 'Home',
  components: {
    text1
  },
  setup () {
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

    return {
      meta
    }
  }
}
</script>

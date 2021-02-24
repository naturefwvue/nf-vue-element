<template>
  <div class="home">
    表单json的辅助工具
  </div>
  <div>
    <el-row>
      <el-col :span="4">
        <div>
          表单：表单的配置
        </div>
        <div>
          字段：字段列表，点击右面显示具体属性
        </div>
      </el-col>
      <el-col :span="11">
        配置
        <helpFormItem/>
      </el-col>
      <el-col :span="9">
        json：
        <div contenteditable="true">
          这里显示json<br>
          第二行
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import helpFormItem from '@/components/plat-help/formItem'

export default {
  name: 'formHelp',
  components: {
    // helpFormItem
  },
  setup () {
    const value = ref('1')
    const store = useStore()
    const metaForm = store.state.metaForm

    return {
      value,
      metaForm
    }
  }

}
</script>

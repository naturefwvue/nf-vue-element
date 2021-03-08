<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="13">
        <div style="padding-left:20px;">
          列数：<el-slider v-model="meta.formColCount" :min="1" :max="5"></el-slider>
          <elForm
            v-model="model"
            v-model:partModel="partModel"
            :meta="meta">
              <template v-slot:102="">
                <h3>这是外面建立的子控件</h3>
                <el-input v-model="model.colName" placeholder="请输入内容"></el-input>
              </template>
              <template v-slot:104="">
                <h3>这是外面建立的另一个子控件</h3>
                <input type="text">
              </template>
          </elForm>
        </div>
      </el-col>
      <el-col :span="3">
        完整的 model 值：<br><br>
        <template v-for="(item, key) in model" :key="key">
          {{key}}：{{item}}<br>
        </template>
        <br>
        <hr>
        相应的 model 值：<br><br>
        <template v-for="(item, key) in partModel" :key="key">
          {{key}}：{{item}}<br>
        </template>
      </el-col>
      <el-col :span="8">
        <!--排序-->
        <div @dragover="allowDrop($event)">
          <div :style="styleCol"
            v-for="(id, index) in meta.colOrder"
            :key="index"
            draggable="true"
            @dragstart="myDrag(id, index)"
          >
            {{meta.itemMeta[id].label}}
            <span style="font-size:9px;color:blue;" @drop="myDrop1(id, index, $event)">
              插入
            </span>
            <span style="font-size:9px;color:blue;" @drop="myDrop2(id, index, $event)">
              交换
            </span>
            <!--设置一个组件占多少格子-->
            <elselect
              @input="spanChange"
              style="width:90px;"
              v-model="meta.itemMeta[id].colCount"
              :meta="spanSelectMeta"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, onBeforeMount } from 'vue'
import { getControlTypeOptionList } from '@/components/controlConfig/config.js'
import { formItemList } from '@/components/nf-el-form-item/map-el-form-item.js'
import elForm from '@/components/nf-el-form/el-form-div'
// @ is an alias to /src

// 设置组件占位的meta
const spanSelectMeta = {
  controlId: 9527,
  colName: 'controlType',
  controlType: 160,
  defaultValue: '1',
  optionList: [
    { value: 1, label: '一格' },
    { value: 2, label: '二格' },
    { value: 3, label: '三格' },
    { value: 4, label: '四格' },
    { value: -2, label: '一半' },
    { value: -3, label: '三份' },
    { value: -4, label: '四份' },
    { value: -5, label: '五份' }
  ],
  isClear: false,
  disabled: false,
  title: '占位',
  placeholder: '选择占位'
}

// 拖拽排序的框
const styleCol = {
  width: '250px',
  height: '26px',
  margin: '10px',
  padding: '10px',
  border: '1px solid #aaaaaa'
}

// 拖拽排序管理类
const dragManage = (meta) => {
  // 记录拖拽组件的数据
  const ctl = reactive({
    id: 1, // 组件ID
    index: 1 // 在数组里的下标
  })

  // 允许拖拽，拦截默认事件
  const allowDrop = (ev) => {
    ev.preventDefault()
  }

  // 选择的字段
  const myDrag = (id, index) => {
    ctl.id = id
    ctl.index = index
  }

  // 小号插入大号的前面
  const myDrop1 = (id, index, e) => {
    if (ctl.index < index - 1) {
      for (let i = ctl.index; i < index; i++) {
        meta.colOrder[i] = meta.colOrder[i + 1]
      }
      meta.colOrder[index - 1] = ctl.id
    }
    meta.reload = !meta.reload
  }
  // 交互顺序
  const myDrop2 = (id, index, e) => {
    meta.colOrder[ctl.index] = id
    meta.colOrder[index] = ctl.id
    meta.reload = !meta.reload
  }

  return {
    allowDrop,
    myDrag,
    myDrop1,
    myDrop2
  }
}

export default {
  name: 'eleBase',
  components: {
    elForm,
    ...formItemList
  },
  beforeCreate () {
    // alert('22')
  },
  provide: {
    sysCom: {
      key: 600,
      biaoqian: 'input',
      kind: 1, //
      com: {
        'input-1': 'aa'
      }
    }
  },
  setup () {
    onBeforeMount(() => {
      // 注入需要加载的组件
    })

    const model = reactive({})
    const partModel = reactive({})
    const { typeOptionList } = getControlTypeOptionList()

    // 读取json，获得配置。
    const json = require('@/views/json/meta-form.json')
    const meta = reactive(json.formMeta) // 表单的meta
    // 添加重新绑定的开关
    meta.reload = false
    // 设置组件类型
    meta.itemMeta[103].optionList = typeOptionList
    console.log('meta', meta)

    // 设置使用插槽的表单子控件
    meta.itemMeta[102].controlId = 102
    meta.itemMeta[102].controlType = 1
    // meta.itemMeta[104].controlType = 1

    // 实现拖拽排序的功能
    const {
      allowDrop,
      myDrag,
      myDrop1,
      myDrop2
    } = dragManage(meta)

    // 重新渲染表单
    const spanChange = () => {
      meta.reload = !meta.reload
    }

    return {
      model,
      partModel,
      meta,
      // 排序
      allowDrop,
      // 字段排序
      styleCol,
      myDrag,
      myDrop1,
      myDrop2,
      spanChange, // 重新渲染表单
      spanSelectMeta
    }
  }

}
</script>

<template>
  <div class="home">
    <el-row>
      <el-col :span="16" style="padding-left:30px;">
        <el-slider v-model="meta.formColCount" :min="1" :max="6"></el-slider>
      </el-col>
    </el-row>
    <el-row>
      <!--不循环row，直接循环col，放不下会自动往下串行。-->
      <el-col :span="17">
        <elForm v-model="model" :meta="meta"/>
      </el-col>
      <el-col :span="5">
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
            <el-select style="width:90px;"
              v-model="meta.itemMeta[id].colCount"
              placeholder="请选择"
              @change="spanChange"
            >
              <el-option label="一格" :value="1"></el-option>
              <el-option label="二格" :value="2"></el-option>
              <el-option label="三格" :value="3"></el-option>
              <el-option label="四格" :value="4"></el-option>
              <el-option label="一半" :value="-2"></el-option>
              <el-option label="三分之一" :value="-3"></el-option>
              <el-option label="四分之一" :value="-4"></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
       <el-col :span="2">
      <template v-for="(item, key) in model" :key="key">
          {{key}}：{{item}}<br>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive } from 'vue'
import elForm from '@/components/nf-el-form/el-form-div'
// @ is an alias to /src

export default {
  name: 'eleBase',
  components: {
    elForm
  },
  setup () {
    const model = reactive({})

    // 读取json，获得配置。
    const json = require('@/views/json/meta-form.json')
    const meta = reactive(json.formMeta) // 表单的meta
    // 添加重新绑定的开关
    meta.reload = false
    console.log('meta11', meta)

    const col = meta.formColCount

    // 拖拽排序
    const allowDrop = (ev) => {
      ev.preventDefault()
    }

    // 拖拽物体
    const drag = (ev) => {
      ev.dataTransfer.setData('Text', ev.target.id)
    }

    // 释放物体
    const drop = (ev) => {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('Text')
      ev.target.appendChild(document.getElementById(data))
    }

    const ctl = reactive({
      id: 1,
      index: 1
    })
    // 选择的字段
    const myDrag = (id, index) => {
      ctl.id = id
      ctl.index = index
    }
    // 重写排序
    const myDrop = (id, index, e) => {
      // 交互顺序
      console.log(e.clientX)
      // meta.colOrder[ctl.index] = id
      // meta.colOrder[index] = ctl.id
      // 小号插入大号的前面
      if (ctl.index < index - 1) {
        for (let i = ctl.index; i < index; i++) {
          meta.colOrder[i] = meta.colOrder[i + 1]
        }
        meta.colOrder[index - 1] = ctl.id
      }
    }
    const myDrop1 = (id, index, e) => {
      // 小号插入大号的前面
      if (ctl.index < index - 1) {
        for (let i = ctl.index; i < index; i++) {
          meta.colOrder[i] = meta.colOrder[i + 1]
        }
        meta.colOrder[index - 1] = ctl.id
      }
    }
    const myDrop2 = (id, index, e) => {
      // 交互顺序
      meta.colOrder[ctl.index] = id
      meta.colOrder[index] = ctl.id
    }

    // 排序判断
    const mykeyup = (e) => {
      console.log(e)
    }

    // 重写渲染表单
    const spanChange = () => {
      meta.reload = !meta.reload
    }

    const style = {
      float: 'left',
      width: '198px',
      height: '166px',
      margin: '10px',
      padding: '10px',
      border: '1px solid #aaaaaa'
    }

    const styleCol = {
      width: '232px',
      height: '26px',
      margin: '10px',
      padding: '10px',
      border: '1px solid #aaaaaa'
    }

    return {
      model,
      meta,
      col,
      // 排序
      allowDrop,
      drag,
      drop,
      style,
      // 字段排序
      styleCol,
      myDrag,
      myDrop,
      myDrop1,
      myDrop2,
      spanChange,
      mykeyup
    }
  }

}
</script>

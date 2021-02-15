import { defineAsyncComponent } from 'vue'

const formItemList = {
  eltext: defineAsyncComponent(() => import('./input-text.vue')
  )
}

const formItemListKey = {
  101: formItemList.eltext
}

export default {
  formItemList,
  formItemListKey
}

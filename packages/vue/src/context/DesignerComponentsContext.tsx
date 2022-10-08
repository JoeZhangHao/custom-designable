import { defineComponent, provide, reactive, readonly, toRefs } from 'vue'
import type { DnComponent, IDesignerComponents } from '../types'

export const DesignerComponentsStateSymbol = Symbol('DesignerComponentsState')
export const DesignerComponentsUpdateSymbol = Symbol('DesignerComponentsUpdate')

// 设计器已挂载的组件
export const DesignerComponentsContext = defineComponent({
  name: 'DesignerComponentsContext',
  setup(_props, { slots }) {
    const state = reactive<IDesignerComponents>({})

    provide(DesignerComponentsStateSymbol, toRefs(readonly(state)))

    const update = (key: string, value: DnComponent<any>) => {
      state[key] = value
    }

    provide(DesignerComponentsUpdateSymbol, update)

    return () => {
      return slots.default?.()
    }
  },
})

import { defineComponent, provide, readonly, ref, toRefs } from 'vue'
import type { Engine } from '@designable/core'

export const DesignerEngineStateSymbol = Symbol('DesignerEngineState')
export const DesignerEngineUpdateSymbol = Symbol('DesignerEngineUpdate')

// 当前设计引擎
export const DesignerEngineContext = defineComponent({
  name: 'DesignerEngineContext',
  setup(_props, { slots }) {
    const state = ref<Engine>({} as Engine)

    provide(DesignerEngineStateSymbol, toRefs(readonly(state)))

    const update = (value: Engine) => {
      state.value = value
    }

    provide(DesignerEngineUpdateSymbol, update)

    return () => {
      return slots.default?.()
    }
  },
})

import { defineComponent, provide, readonly, ref, toRefs } from 'vue'
import type { Engine } from '@designable/core'

export const DesigneEngineStateSymbol = Symbol('DesigneEngineState')
export const DesigneEngineUpdateSymbol = Symbol('DesigneEngineUpdate')

// 当前设计引擎
const DesigneEngineContext = defineComponent({
  name: 'DesigneEngineContext',
  setup(_props, { slots }) {
    const state = ref<Engine>({} as Engine)

    provide(DesigneEngineStateSymbol, toRefs(readonly(state)))

    const update = (value: Engine) => {
      state.value = value
    }

    provide(DesigneEngineUpdateSymbol, update)

    return () => {
      return slots.default?.()
    }
  },
})

export default DesigneEngineContext

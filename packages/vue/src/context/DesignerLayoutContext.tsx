import { defineComponent, provide, reactive, readonly, toRefs } from 'vue'
import type { IDesignerLayoutContext } from '../types'

export const DesignerLayoutStateSymbol = Symbol('DesignerLayoutState')
export const DesignerLayoutUpdateSymbol = Symbol('DesignerLayoutUpdate')

// 设计器风格对象
const DesignerLayoutContext = defineComponent({
  name: 'DesignerLayoutContext',
  setup(_props, { slots }) {
    const state = reactive<IDesignerLayoutContext>({
      prefixCls: 'dn-',
      position: 'relative',
    })

    provide(DesignerLayoutStateSymbol, toRefs(readonly(state)))

    const update = <
      T extends keyof IDesignerLayoutContext,
      V extends IDesignerLayoutContext[T]
    >(
      key: T,
      value: V
    ) => {
      state[key] = value
    }

    provide(DesignerLayoutUpdateSymbol, update)

    return () => {
      return slots.default?.()
    }
  },
})

export default DesignerLayoutContext

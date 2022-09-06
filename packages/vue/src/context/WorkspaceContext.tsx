import { defineComponent, provide, reactive, readonly, toRefs } from 'vue'
import type { IWorkspaceContext } from '../types'

export const WorkspaceStateSymbol = Symbol('WorkspaceState')
export const WorkspaceUpdateSymbol = Symbol('WorkspaceUpdate')

// 当前的工作空间
const WorkspaceContext = defineComponent({
  name: 'WorkspaceContext',
  setup(_props, { slots }) {
    const state = reactive<IWorkspaceContext>({
      id: 'id',
    })

    provide(WorkspaceStateSymbol, toRefs(readonly(state)))

    const update = <
      T extends keyof IWorkspaceContext,
      V extends IWorkspaceContext[T]
    >(
      key: T,
      value: V
    ) => {
      state[key] = value
    }

    provide(WorkspaceUpdateSymbol, update)

    return () => {
      return slots.default?.()
    }
  },
})

export default WorkspaceContext

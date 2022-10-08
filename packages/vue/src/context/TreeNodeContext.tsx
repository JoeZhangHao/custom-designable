import { defineComponent, provide, readonly, ref, toRefs } from 'vue'
import type { TreeNode } from '@designable/core'

export const TreeNodeStateSymbol = Symbol('TreeNodeState')
export const TreeNodeUpdateSymbol = Symbol('TreeNodeUpdate')

// 组件树
export const TreeNodeContext = defineComponent({
  name: 'TreeNodeContext',
  setup(_props, { slots }) {
    const state = ref<TreeNode>({} as TreeNode)

    provide(TreeNodeStateSymbol, toRefs(readonly(state)))

    const update = (value: TreeNode) => {
      state.value = value
    }

    provide(TreeNodeUpdateSymbol, update)

    return () => {
      return slots.default?.()
    }
  },
})

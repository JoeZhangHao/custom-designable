import { computed, onMounted } from 'vue'
import { CursorDragType, CursorStatus } from '@designable/core'
import { LayoutObserver } from '../shared/observer'
import { useViewport } from './useViewport'
import { useDesigner } from './useDesigner'
import type { TreeNode } from '@designable/core'

const isEqualRect = (rect1: DOMRect, rect2: DOMRect) => {
  return (
    rect1?.x === rect2?.x &&
    rect1?.y === rect2?.y &&
    rect1?.width === rect2?.width &&
    rect1?.height === rect2?.height
  )
}

export const useValidNodeOffsetRect = (node: TreeNode) => {
  const engine = useDesigner()
  const viewport = useViewport()

  const rectRef = computed(() => ({
    current: viewport.getValidNodeOffsetRect(node),
  }))

  const element = viewport.findElementById(node?.id)

  const compute = () => {
    if (
      engine.cursor.status !== CursorStatus.Normal &&
      engine.cursor.dragType === CursorDragType.Move
    )
      return
    const nextRect = viewport.getValidNodeOffsetRect(node)
    if (!isEqualRect(rectRef.value.current, nextRect) && nextRect) {
      rectRef.value.current = nextRect
    }
  }

  onMounted(() => {
    const layoutObserver = new LayoutObserver(compute)
    if (element) layoutObserver.observe(element)
    return () => {
      layoutObserver.disconnect()
    }
  })

  return rectRef.value.current
}

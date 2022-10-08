import { inject } from 'vue'
import { globalThisPolyfill } from '@designable/shared'
import { WorkspaceStateSymbol } from '../context'
import { useDesigner } from './useDesigner'
import type { IWorkspaceContext } from '../types'
import type { Workspace } from '@designable/core'

export const useWorkspace = (id?: string): Workspace => {
  const designer = useDesigner()
  const workspaceId = id || inject<IWorkspaceContext>(WorkspaceStateSymbol)?.id
  if (workspaceId) {
    return designer.workbench.findWorkspaceById(workspaceId)
  }
  if ((globalThisPolyfill as any)['__DESIGNABLE_WORKSPACE__'])
    return (globalThisPolyfill as any)['__DESIGNABLE_WORKSPACE__']
  return designer.workbench.currentWorkspace
}

import type { Engine, IBehavior, IResource } from '@designable/core'
import type { ComponentPublicInstance } from 'vue'

export interface IDesignerLayoutProps {
  prefixCls?: string
  theme?: 'dark' | 'light' | (string & Record<string, any>)
  variables?: Record<string, string>
  position?: 'fixed' | 'absolute' | 'relative'
}
export interface IDesignerProps extends IDesignerLayoutProps {
  engine: Engine
}

export type DnComponent<P = Record<string, any>> =
  ComponentPublicInstance<P> & {
    Resource?: IResource[]
    Behavior?: IBehavior[]
  }

export interface IDesignerComponents {
  [key: string]: DnComponent<any>
}

export interface IDesignerLayoutContext {
  theme?: 'dark' | 'light' | (string & Record<string, any>)
  prefixCls: string
  position: 'fixed' | 'absolute' | 'relative'
}

export interface IWorkspaceContext {
  id: string
  title?: string
  description?: string
}

import { inject, onMounted } from 'vue'
import { globalThisPolyfill, isFn } from '@designable/shared'
import { DesignerEngineStateSymbol } from '../context'
import type { Ref } from 'vue'
import type { Engine } from '@designable/core'

export interface IEffects {
  (engine: Engine): void
}

export const useDesigner = (effects?: IEffects): Engine => {
  const designer: Engine =
    (globalThisPolyfill as any)['__DESIGNABLE_ENGINE__'] ||
    inject<Ref<Engine>>(DesignerEngineStateSymbol)?.value

  onMounted(() => {
    if (isFn(effects)) {
      return effects(designer)
    }
  })
  return designer
}

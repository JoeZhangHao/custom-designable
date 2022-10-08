import { inject } from 'vue'
import { DesignerComponentsStateSymbol } from '../context/DesignerComponentsContext'

export const useComponents = () => inject(DesignerComponentsStateSymbol)

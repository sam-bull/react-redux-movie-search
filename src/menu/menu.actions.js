import { GOTO } from './menu.action.types'

export const goToPage = (page) => ({
  type: GOTO,
  payload: { page }
})
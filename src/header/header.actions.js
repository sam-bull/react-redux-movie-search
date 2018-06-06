import { GOTO } from './header.action.types'

export const goToPage = (page) => ({
  type: GOTO,
  payload: { page }
})
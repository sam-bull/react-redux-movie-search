import { GOTO } from './header.action.types'

const headerReducer = (state = {}, action) => {
  const payload = action.payload
  switch (action.type) {
    case GOTO:
    console.log('menuReducer updating page in state from', state.page, 'to', payload.page)
      return { ...state, page: payload.page }
    default:
      return state
  }
}

export default headerReducer
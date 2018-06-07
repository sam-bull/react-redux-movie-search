import { GOTO } from './header.action.types'

const headerReducer = (state = {}, action) => {
  const payload = action.payload
  switch (action.type) {
    case GOTO:
      return { ...state, page: payload.page }
    default:
      return state
  }
}

export default headerReducer
import { OK_MODAL, SHOW_MODAL } from '../actions/modal'

const initialState = {
  isShowing: false,
  isOK: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isShowing: action.payload
      }

    case OK_MODAL:
      return {
        ...state,
        isOK: action.payload
      }

    default:
      return state
  }
}

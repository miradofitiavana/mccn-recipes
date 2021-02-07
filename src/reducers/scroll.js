import { SET_SCROLL } from '../actions/scroll'

const initialState = {
  scrollPos: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCROLL:
      return {
        ...state,
        scrollPos: action.payload
      }

    default:
      return state
  }
}

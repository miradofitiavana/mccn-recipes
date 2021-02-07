import { SET_LOADER } from '../actions/loader'

const initialState = {
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

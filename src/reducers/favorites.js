import { DISPLAY_FAVORITES, TOGGLE_FAVORITE } from '../actions/favorites'

const initialState = {
  listFavorites: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_FAVORITES:
      return {
        ...state,
        listFavorites: action.payload
      }

    case TOGGLE_FAVORITE:
      return {
        ...state
      }

    default:
      return state
  }
}

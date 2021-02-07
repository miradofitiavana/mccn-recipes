import { DISPLAY_RECIPES, RESET_RECIPE, SHOW_RECIPE } from '../actions/recipes'

const initialState = {
  recipesList: [],
  recipeItem: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_RECIPES:
      return {
        ...state,
        recipesList: action.payload
      }

    case SHOW_RECIPE:
      return {
        ...state,
        recipeItem: action.payload
      }

    case RESET_RECIPE:
      return {
        ...state,
        recipeItem: {},
        recipesList: []
      }

    default:
      return state
  }
}

import { combineReducers } from 'redux'

import theme from './theme'
import scroll from './scroll'
import loader from './loader'
import recipes from './recipes'
import pagination from './pagination'
import favorites from './favorites'
import add_recipe from './add-recipe'
import modal from './modal'

export default combineReducers({
  theme,
  scroll,
  loader,
  recipes,
  pagination,
  favorites,
  add_recipe,
  modal
})

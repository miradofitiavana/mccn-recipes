import axios from 'axios'
import { setLoader } from './loader'
import { initPagination } from './pagination'

export const DISPLAY_RECIPES = 'DISPLAY_RECIPES'
export const SHOW_RECIPE = 'SHOW_RECIPE'
export const RESET_RECIPE = 'RESET_RECIPE'

export const resetRecipe = () => ({
  type: RESET_RECIPE
})

export const showRecipe = recipe => ({
  type: SHOW_RECIPE,
  payload: recipe
})

export const displayRecipes = recipesList => ({
  type: DISPLAY_RECIPES,
  payload: recipesList
})

export const getRecipe = id => dispatch => {
  dispatch(setLoader(true))
  axios({
    method: 'get',
    url: `http://recettes-api.mirado-ramanoelison.com/api/recipes/${id}`,
    params: {}
  })
    .then(res => {
      dispatch(showRecipe(res.data.datas))
    })
    .catch(err => {
      dispatch(setLoader(false))
      return err
    })
    .finally(() => {
      dispatch(setLoader(false))
    })
}

export const getRecipes = (number = 10, page = 1) => dispatch => {
  dispatch(setLoader(true))
  axios({
    method: 'get',
    url: 'http://recettes-api.mirado-ramanoelison.com/api/recipes',
    params: {
      per_page: number,
      page: page,
      asc: 'created_at'
      // desc: 'created_at'
    }
  })
    .then(res => {
      dispatch(displayRecipes(res.data.datas.data))
      dispatch(
        initPagination({
          last_page: res.data.datas.last_page,
          current_page: res.data.datas.current_page
        })
      )
    })
    .catch(err => {
      dispatch(setLoader(false))
      return err
    })
    .finally(() => {
      dispatch(setLoader(false))
    })
}

import { isModalOK, showModal } from './modal'

export const DISPLAY_FAVORITES = 'DISPLAY_FAVORITES'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export const displayFavorites = listFavorites => ({
  type: DISPLAY_FAVORITES,
  payload: listFavorites
})

export const togglesFavorite = () => ({
  type: TOGGLE_FAVORITE
})

export const getFavorites = () => dispatch => {
  let favs = JSON.parse(localStorage.getItem('recipesfav')) || []
  dispatch(displayFavorites(favs))
}

export const addRemoveFavorite = recipe => dispatch => {
  const currentFavorite = JSON.parse(localStorage.getItem('recipesfav')) || []
  const isPresent = currentFavorite.map(e => e.id).indexOf(recipe.id)

  if (isPresent === -1) {
    currentFavorite.push(recipe)
    localStorage.setItem('recipesfav', JSON.stringify(currentFavorite))
    dispatch(togglesFavorite())
  } else {
    dispatch(isModalOK(false))
    dispatch(showModal(false))
    const filteredRecettes = currentFavorite.filter(
      recette => recette.id !== recipe.id
    )
    localStorage.setItem('recipesfav', JSON.stringify(filteredRecettes))
    dispatch(togglesFavorite())
  }
  dispatch(getFavorites())
}

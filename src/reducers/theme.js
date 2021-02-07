import { CHANGE_THEME, GET_THEME } from '../actions/theme'

const initialState = {
  currentTheme: localStorage.getItem('theme') || 'light'
}

const toggleTheme = state => {
  let currentTheme = state.currentTheme == 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', currentTheme)
  return currentTheme
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_THEME:
      return {
        ...state
      }

    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: toggleTheme(state)
      }

    default:
      return state
  }
}

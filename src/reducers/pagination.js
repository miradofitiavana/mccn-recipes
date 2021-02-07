import {
  GOTO_PAGE,
  INIT_PAGINATION,
  NEXT_PAGE,
  PREV_PAGE
} from '../actions/pagination'

const initialState = {
  current_page: 1,
  last_page: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_PAGINATION:
      return {
        ...state,
        last_page: action.payload.last_page,
        current_page: action.payload.current_page
      }

    case NEXT_PAGE:
      return {
        ...state,
        current_page: state.current_page + 1
      }

    case PREV_PAGE:
      return {
        ...state,
        current_page: state.current_page - 1
      }

    case GOTO_PAGE:
      return {
        ...state,
        current_page: action.payload
      }

    default:
      return state
  }
}

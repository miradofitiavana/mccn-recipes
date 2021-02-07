export const INIT_PAGINATION = 'INIT_PAGINATION'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'
export const GOTO_PAGE = 'GOTO_PAGE'

export const initPagination = pagination => ({
  type: INIT_PAGINATION,
  payload: pagination
})

export const goToPage = page => ({
  type: GOTO_PAGE,
  payload: page
})

export const nextPage = () => ({
  type: NEXT_PAGE
})

export const prevPage = () => ({
  type: PREV_PAGE
})

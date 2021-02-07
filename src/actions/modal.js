export const SHOW_MODAL = 'SHOW_MODAL'
export const OK_MODAL = 'OK_MODAL'

export const showModal = isShowing => ({
  type: SHOW_MODAL,
  payload: isShowing
})

export const isModalOK = isOK => ({
  type: OK_MODAL,
  payload: isOK
})

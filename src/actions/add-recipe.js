export const GO_TO_STEP = 'GO_TO_STEP'
export const NEXT_STEP = 'NEXT_STEP'
export const PREV_STEP = 'PREV_STEP'
export const RESET_FORMDATA = 'RESET_FORMDATA'
export const SET_FORMDATA = 'SET_FORMDATA'

export const resetFormdata = () => ({
  type: RESET_FORMDATA
  // payload: formData
})

export const setFormdata = formData => ({
  type: SET_FORMDATA,
  payload: formData
})

export const goToStep = step => ({
  type: GO_TO_STEP,
  payload: step
})

export const nextStep = () => ({
  type: NEXT_STEP
})

export const prevStep = () => ({
  type: PREV_STEP
})

// export const getRecipe = id => dispatch => {
//   dispatch(setLoader(true))
//   axios({
//     method: 'get',
//     url: `http://recettes-api.mirado-ramanoelison.com/api/recipes/${id}`,
//     params: {}
//   })
//     .then(res => {
//       dispatch(showRecipe(res.data.datas))
//     })
//     .catch(err => {
//       dispatch(setLoader(false))
//       return err
//     })
//     .finally(() => {
//       dispatch(setLoader(false))
//     })
// }

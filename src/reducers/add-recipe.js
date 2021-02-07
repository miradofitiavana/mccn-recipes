import {
  GO_TO_STEP,
  NEXT_STEP,
  PREV_STEP,
  RESET_FORMDATA,
  SET_FORMDATA
} from '../actions/add-recipe'

const initialState = {
  formData: {
    details: {
      recipeName: '',
      image: {
        name: null,
        src: null,
        image: null
      },
      description: '',
      duration: '',
      difficulty: '',
      parts: ''
    },
    steps: [{ id: 0, text: '' }],
    ingredients: [{ id: 0, name: '', quantity: '' }]
  },
  currentStep: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1
      }

    case PREV_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1
      }

    case GO_TO_STEP:
      return {
        ...state,
        currentStep: action.payload
      }

    case RESET_FORMDATA:
      return {
        ...state,
        formData: {
          details: {
            recipeName: '',
            image: {
              name: null,
              src: null,
              image: null
            },
            description: '',
            duration: '',
            difficulty: '',
            parts: ''
          },
          steps: [{ id: 0, text: '' }],
          ingredients: [{ id: 0, name: '', quantity: '' }]
        }
      }

    case SET_FORMDATA:
      return {
        ...state,
        formData: action.payload
      }

    default:
      return state
  }
}

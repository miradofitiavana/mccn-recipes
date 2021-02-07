import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goToStep, resetFormdata } from '../../actions/add-recipe'
import Details from './form-components/details'
import Ingredients from './form-components/ingredients'
import Review from './form-components/review'
import Steps from './form-components/steps'
import Submit from './form-components/submit'
import Welcome from './form-components/welcome'

const MultiForm = () => {
  const currentStep = useSelector(state => state.add_recipe.currentStep)
  const formData = useSelector(state => state.add_recipe.formData)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      console.log('ligne 36')
      dispatch(resetFormdata())
      dispatch(goToStep(0))
    }
  }, [])

  const steps = [
    { id: 'welcome' },
    { id: 'details' },
    { id: 'ingredients' },
    { id: 'steps' },
    { id: 'review' },
    { id: 'submit' }
  ]
  const props = { formData }

  switch (steps[currentStep].id) {
    case 'welcome':
      console.log('here')
      return <Welcome {...props} />
    case 'details':
      return <Details {...props} />
    case 'ingredients':
      return <Ingredients {...props} />
    case 'steps':
      return <Steps {...props} />
    case 'review':
      return <Review {...props} />
    case 'submit':
      return <Submit {...props} />
  }

  return <div></div>
}

export default MultiForm

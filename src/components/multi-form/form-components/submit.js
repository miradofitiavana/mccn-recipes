import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../../layouts/container'
import Row from '../../../layouts/row'
import Col from '../../../layouts/col'
import Title from '../../title'
import Button from '../../button'
import { goToStep } from '../../../actions/add-recipe'

const Submit = () => {
  const formData = useSelector(state => state.add_recipe.formData)

  const dispatch = useDispatch()

  useEffect(() => {
    let mysteps = []
    formData.steps.map(step => {
      mysteps.push({ text: step.text, step: step.id + 1 })
    })

    const data = new FormData()
    data.append(
      'basicInfo',
      JSON.stringify({
        name: formData.details.recipeName,
        duration: formData.details.duration,
        difficulty: formData.details.difficulty,
        numplates: formData.details.parts,
        description: formData.details.description
      })
    )
    data.append('ingredients', JSON.stringify(formData.ingredients))
    data.append('steps', JSON.stringify(mysteps))
    data.append('image', formData.details.image.src)

    axios
      .post(`http://recettes-api.mirado-ramanoelison.com/api/recipes`, data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {})
  }, [formData])

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Title
            as='h2'
            name='Thank you for submitting, we will be in touch!'
            textAlign='center'
          ></Title>
          <Button
            padding='10px 20px'
            margin='0 10px 0 10px'
            title='Ajouter une nouvelle recette'
            onclickfunction={() => dispatch(goToStep(0))}
          ></Button>
          <Button
            padding='10px 20px'
            margin='0 10px 0 10px'
            title="Retourner à l'accueil"
            onclickfunction={() => dispatch(goToStep(0))}
          ></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Submit

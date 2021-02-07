import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../../layouts/container'
import Button from '../../button'
import Title from '../../title'
import Col from '../../../layouts/col'
import Row from '../../../layouts/row'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, prevStep, setFormdata } from '../../../actions/add-recipe'

const Ingredients = () => {
  const formData = useSelector(state => state.add_recipe.formData)
  const ingredients = formData.ingredients

  const dispatch = useDispatch()

  const [lines, setLines] = useState(
    ingredients || [{ id: 0, name: '', quantity: '' }]
  )
  // console.log(formData)
  const handleChange = event => {
    // console.log(event)
    let inputs = lines.slice()
    // console.log(inputs)
    for (let i in inputs) {
      // console.log(inputs[i].id)
      if (inputs[i].id == event.target.id) {
        inputs[i].name = `${event.target.value}`
        setLines(inputs)
        break
      }
    }
    dispatch(setFormdata({ ...formData, ingredients: lines }))
  }

  const addIngredient = () => {
    setLines([...lines, { id: lines.length, name: '', quantity: '' }])
    dispatch(setFormdata({ ...formData, steps: lines }))
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Title as='h2' name='Ingredients' textAlign='center'></Title>
          {lines.map((ingredient, index) => (
            <FormGroup key={index}>
              <NomLabel>{`Ingredient ${index + 1}`}</NomLabel>
              <NomInput
                as='textarea'
                id={index}
                value={ingredient.name}
                onChange={handleChange}
              />
            </FormGroup>
          ))}
          <ButtonAdd onClick={() => addIngredient()}>Ajouter</ButtonAdd>
          <Container textAlign='center'>
            <Button
              padding='10px 20px'
              margin='0 10px 0 10px'
              display='inline-block'
              title='Retour'
              onclickfunction={() => dispatch(prevStep())}
            ></Button>
            <Button
              padding='10px 20px'
              margin='0 10px 0 10px'
              display='inline-block'
              title='Suivant'
              onclickfunction={() => dispatch(nextStep())}
            ></Button>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

const ButtonAdd = styled.button`
  margin-left: auto;
  display: block;
  padding: 5px;

  background-color: ${props => props.theme.buttonBg};
  border: solid 1px ${props => props.theme.buttonBorder};
  color: ${props => props.theme.buttonColor};

  border-radius: 18px;
  outline: none;
  font-weight: 400;
  font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
  font-size: 14px;
  letter-spacing: -0.1px;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.theme.buttonBgHover};
  }
`

const NomInput = styled.input`
  width: 70%;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  color: ${props => props.theme.color};
  border: solid 1px ${props => props.theme.borderColor};
`

const NomLabel = styled.label`
  width: 30%;
  display: inline-block;
  box-sizing: border-box;
  text-align: right;
  padding-right: 30px;
  color: ${props => props.theme.color};
`

const FormGroup = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
`

Ingredients.propTypes = {
  formData: PropTypes.any
}

export default Ingredients

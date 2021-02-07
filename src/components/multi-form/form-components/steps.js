import React, { useEffect, useState } from 'react'
import { Container } from '../../../layouts/container'
import Button from '../../button'
import Col from '../../../layouts/col'
import Row from '../../../layouts/row'
import Title from '../../title'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, prevStep, setFormdata } from '../../../actions/add-recipe'

const Steps = () => {
  const formData = useSelector(state => state.add_recipe.formData)
  const etapes = formData.steps

  const dispatch = useDispatch()

  const [lines, setLines] = useState(etapes || [{ id: 0, text: '' }])
  // console.log(formData)
  const handleChange = event => {
    let inputs = lines.slice()
    // console.log(event)
    // console.log(inputs)

    for (let i in inputs) {
      // console.log(inputs)
      // console.log(inputs[i].id == event.target.id)
      if (inputs[i].id == event.target.id) {
        // console.log('zz')
        inputs[i].text = `${event.target.value}`
        setLines(inputs)
        // formData.steps = inputs
        // console.log(inputs)
        dispatch(setFormdata({ ...formData, steps: inputs }))
        break
      }
    }
    // dispatch(setFormdata({ ...formData, steps: lines }))
  }

  const addStep = () => {
    setLines([...lines, { id: lines.length, text: '' }])
    dispatch(setFormdata({ ...formData, steps: lines }))
    // formData.etapes = lines
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Title
            as='h2'
            name='Etapes de préparation'
            textAlign='center'
          ></Title>
          {lines.map((etape, index) => (
            <FormGroup key={index}>
              <NomLabel>{`Etape ${index + 1}`}</NomLabel>
              <NomInput
                as='textarea'
                id={index}
                value={etape.text}
                onChange={handleChange}
              />
            </FormGroup>
          ))}
          <ButtonAdd onClick={() => addStep()}>Ajouter</ButtonAdd>

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

export default Steps

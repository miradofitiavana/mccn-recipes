import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../../layouts/container'
import Row from '../../../layouts/row'
import Col from '../../../layouts/col'
import styled from 'styled-components'
import Title from '../../title'
import Button from '../../button'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, prevStep, setFormdata } from '../../../actions/add-recipe'
import { useTranslation } from 'react-i18next'

const Details = () => {
  const formData = useSelector(state => state.add_recipe.formData)
  const details = formData.details

  const dispatch = useDispatch()

  // console.log(formData)
  const { t, i18n } = useTranslation()
  const difficulty = t('difficulty', { returnObjects: true })

  const [{ name, src, image }, setImage] = useState(
    details.image || { name: null, src: null, image: null }
  )

  const imageChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      details.image = {
        name: e.target.files[0].name,
        src: e.target.files[0],
        image: URL.createObjectURL(e.target.files[0])
      }
      setImage({
        name: e.target.files[0].name,
        src: e.target.files[0],
        image: URL.createObjectURL(e.target.files[0])
      })
      dispatch(setFormdata({ ...formData, details: details }))
    }
  }

  const inputChange = event => {
    let name = event.target.name
    details[name] = `${event.target.value}`
    dispatch(setFormdata({ ...formData, details: details }))
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Title
            as='h2'
            name='Détails de la recette'
            textAlign='center'
          ></Title>

          <FormGroup>
            <NomLabel>Nom</NomLabel>
            <NomInput
              name='recipeName'
              value={details['recipeName']}
              onChange={inputChange}
            />
          </FormGroup>

          <FormGroup>
            <NomLabel>Description</NomLabel>
            <NomInput
              as='textarea'
              name='description'
              value={details.description}
              onChange={inputChange}
            />
          </FormGroup>

          <FormGroup>
            <NomLabel>Photo</NomLabel>
            <NomInput type='file' name='details.image' onChange={imageChange} />
          </FormGroup>
          <Container>{src ? <img src={image} alt={name} /> : null}</Container>

          <FormGroup>
            <NomLabel>Durée</NomLabel>
            <NomInput
              type='number'
              name='duration'
              value={details.duration}
              onChange={inputChange}
            />
          </FormGroup>

          <FormGroup>
            <NomLabel>Difficulté</NomLabel>
            {/* <NomInput
              type='number'
              name='difficulty'
              value={details.difficulty}
              onChange={inputChange}
            /> */}
            <NomSelect
              name='difficulty'
              value={details.difficulty}
              onChange={inputChange}
            >
              <NomOption value='0'>--</NomOption>
              {difficulty.map(diff => (
                <NomOption key={diff.value} value={diff.value}>
                  {diff.text}
                </NomOption>
              ))}
            </NomSelect>
          </FormGroup>

          <FormGroup>
            <NomLabel>Nombre de personnes</NomLabel>
            <NomInput
              type='number'
              name='parts'
              value={details.parts}
              onChange={inputChange}
            />
          </FormGroup>

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

const NomOption = styled.option``

const NomSelect = styled.select`
  width: 70%;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  color: ${props => props.theme.color};
  border: solid 1px ${props => props.theme.borderColor};
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

Details.propTypes = {
  formData: PropTypes.any,
  setForm: PropTypes.func,
  navigation: PropTypes.any
}

export default Details

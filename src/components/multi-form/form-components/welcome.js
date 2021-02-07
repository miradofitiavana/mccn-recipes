import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../button'
import { Container } from '../../../layouts/container'
import Row from '../../../layouts/row'
import Col from '../../../layouts/col'
import Title from '../../title'
import { useDispatch } from 'react-redux'
import { nextStep } from '../../../actions/add-recipe'

const Welcome = () => {
  const dispatch = useDispatch()

  console.log('Welcome')
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Title
            as='h2'
            name='Nous allons créer une recette!'
            textAlign='center'
          ></Title>
          <Button
            padding='10px 20px'
            margin='auto'
            display='block'
            title='Suivant'
            onclickfunction={() => dispatch(nextStep())}
          ></Button>
        </Col>
      </Row>
    </Container>
  )
}

Welcome.propTypes = {
  currentStep: PropTypes.number,
  setCurrentStep: PropTypes.func
}

export default Welcome

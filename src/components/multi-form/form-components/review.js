import React from 'react'
import { Container } from '../../../layouts/container'
import Row from '../../../layouts/row'
import Col from '../../../layouts/col'
import Title from '../../title'
import Button from '../../button'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { goToStep, nextStep } from '../../../actions/add-recipe'

const Review = () => {
  const formData = useSelector(state => state.add_recipe.formData)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Title as='h2' name='Récapitulatif' textAlign='center'></Title>
          <Row>
            <Col xs={12}>
              <TitleContainer>
                <Title as='h3' name='Détails'></Title>
                <Button
                  withIcon
                  icone='pen'
                  iconSize='12px'
                  border='none'
                  onclickfunction={() => dispatch(goToStep(1))}
                ></Button>
              </TitleContainer>
              <NomText>
                <NomTitle>Nom de la recette</NomTitle>
                <span>{formData.details.recipeName}</span>
              </NomText>
              <NomText>
                <NomTitle>Description</NomTitle>
                <span>{formData.details.description}</span>
              </NomText>
              <NomText>
                <NomTitle>Durée</NomTitle>
                <span>{formData.details.duration}</span>
              </NomText>
              <NomText>
                <NomTitle>Difficultés</NomTitle>
                <span>{formData.details.difficulty}</span>
              </NomText>
              <NomText>
                <NomTitle>Nombre de personnes</NomTitle>
                <span>{formData.details.parts}</span>
              </NomText>
            </Col>
            <Col xs={12}>
              <TitleContainer>
                <Title as='h3' name='Ingredients'></Title>
                <Button
                  withIcon
                  icone='pen'
                  iconSize='12px'
                  border='none'
                  onclickfunction={() => dispatch(goToStep(2))}
                ></Button>
              </TitleContainer>
              <ul>
                {formData.ingredients.map((ingredient, index) => (
                  <ReviewList key={index}>{ingredient.name}</ReviewList>
                ))}
              </ul>
            </Col>
            <Col xs={12}>
              <TitleContainer>
                <Title as='h3' name='Etapes de la préparation'></Title>
                <Button
                  withIcon
                  icone='pen'
                  iconSize='12px'
                  border='none'
                  onclickfunction={() => dispatch(goToStep(3))}
                ></Button>
              </TitleContainer>
              <ul>
                {formData.steps.map((etape, index) => (
                  <ReviewList key={index}>{etape.text}</ReviewList>
                ))}
              </ul>
            </Col>
          </Row>
          <Container>
            <Button
              padding='10px 20px'
              margin='0 10px 0 10px'
              title='Submit'
              onclickfunction={() => dispatch(nextStep())}
            ></Button>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

const ReviewList = styled.li`
  color: ${props => props.theme.color};
`

const NomTitle = styled.span`
  padding-right: 10px;
  font-weight: 600;
  &:after {
    content: ':';
  }
`

const NomText = styled.p`
  margin: 0;
  color: ${props => props.theme.color};
`

const TitleContainer = styled.div`
  display: flex;
`
export default Review

import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getRecipe, resetRecipe } from '../actions/recipes'
import Title from '../components/title'
import Col from '../layouts/col'
import { Container, Main } from '../layouts/container'
import Row from '../layouts/row'

import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/fr'
import { maxWidth, minWidth } from '../layouts/breakpoints'
import Loader from '../components/loader'

const Detail = props => {
  const recipeID = props.match.params.id
  const recipe = useSelector(state => state.recipes.recipeItem)
  const loader = useSelector(state => state.loader.isLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('effect')
    dispatch(getRecipe(recipeID))

    return () => {
      console.log('cleaned up')
      dispatch(resetRecipe())
    }
  }, [recipeID])
  return (
    <Main>
      <Container>
        <Row>
          {loader ? (
            <Loader />
          ) : (
            <>
              <Col sm={12}>
                <Title
                  as='h1'
                  name={recipe.name}
                  margin='0 auto 30px auto'
                  textAlign='center'
                  fontSize='32px'
                ></Title>
                <MetaDetail>
                  <CreateDate>
                    <Moment format='D MMM YYYY'>{recipe.created_at}</Moment>
                  </CreateDate>
                </MetaDetail>
              </Col>
              <Col sm={12}>
                <ImageDetail
                  src={`${recipe?.parameters?.link_images}${recipe?.image}`}
                />

                <RowMeta>
                  <ColMeta xs={6} md={4} borderLeft=''>
                    <TitleMeta>TIME</TitleMeta>
                    <ContentMeta>{recipe?.duration}mn</ContentMeta>
                  </ColMeta>
                  <ColMeta xs={6} md={4} borderLeft='1px solid #eaeaea'>
                    <TitleMeta>DIFFICULTY</TitleMeta>
                    <ContentMeta>{recipe?.difficulty}</ContentMeta>
                  </ColMeta>
                  <ColMeta xs={12} md={4} borderLeft='1px solid #eaeaea'>
                    <TitleMeta>SERVES</TitleMeta>
                    <ContentMeta>{recipe?.numplates} personnes</ContentMeta>
                  </ColMeta>
                </RowMeta>
              </Col>

              <Col sm={12} margin='50px 0'>
                <Title as='h2' name='Ingredients'></Title>
                <Row>
                  {recipe?.ingredients?.map(ingredient => (
                    <Col xs={12} md={6} key={ingredient.id}>
                      <Ingredient>
                        {ingredient.quantity} {ingredient.name}
                      </Ingredient>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col sm={12} margin='50px 0'>
                <Title as='h2' name='Etapes de préparation'></Title>
                <Row>
                  {recipe?.steps?.map(step => (
                    <ColSteps xs={12} key={step.id}>
                      <Steps>{step.text}</Steps>
                    </ColSteps>
                  ))}
                </Row>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </Main>
  )
}

const Steps = styled.div`
  color: #707070;
  padding: 0.8rem 0.625rem;
  line-height: 1.5;
`

const ColSteps = styled(Col)`
  &::nth-child(even) {
    background-color: ${props =>
      props.theme.buttonBgHover ? props.theme.buttonBgHover : ''};
  }
  &::nth-child(odd) {
    background-color: ${props =>
      props.theme.buttonBg ? props.theme.buttonBg : ''};
  }
`

const Ingredient = styled.div`
  border-bottom: 1px solid #eee;
  color: #707070;
  padding: 0.8rem 0.625rem;
  line-height: 1.5;
`

const ContentMeta = styled.p`
  margin: 0;
  text-align: center;
  color: ${props => props.theme.metaDetailColor};
`

const TitleMeta = styled.h4`
  margin: 0;
  text-align: center;
  color: ${props => props.theme.metaDetailColor};
`

const ColMeta = styled(Col)`
  ${props =>
    props.borderLeft ? minWidth('md')(`border-left: ${props.borderLeft}`) : ''};
  ${maxWidth('md')`
   margin-bottom: 10px
   `}
`

const RowMeta = styled(Row)`
  margin-top: 20px;
  background-color: ${props => props.theme.metaDetailBg};
  padding: 10px;
`

const CreateDate = styled.div`
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  font-style: italic;
`

const MetaDetail = styled.div`
  margin-bottom: 22px;
  font-size: 13px;
  line-height: 1.35;
  color: #909090;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ImageDetail = styled.img`
  max-height: 400px;
  margin: auto;
  display: block;
  transition: all 0.3s;
  object-fit: cover;

  ${minWidth('xs')`
    width: 100%;
  `}

  ${minWidth('sm')`
    width: 90%;
  `}
  
  ${minWidth('md')`
    width: 80%;
  `}
  
  ${minWidth('lg')`
    width: 60%;
  `}
`

export default Detail

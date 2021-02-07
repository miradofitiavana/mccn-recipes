import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getRecipes, resetRecipe } from '../actions/recipes'
import Banner from '../components/banner'
import ListCard from '../components/list-card'
import Loader from '../components/loader'
// import SearchForm from '../components/search-form'
import Title from '../components/title'
import Col from '../layouts/col'
import { Container, Main } from '../layouts/container'
import Row from '../layouts/row'

import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/fr'
import { Link } from 'react-router-dom'

import { maxWidth, minWidth } from '../layouts/breakpoints'
import SearchForm from '../components/search-form'
import { getFavorites } from '../actions/favorites'
import Pagination from '../components/pagination'

const Home = () => {
  const dispatch = useDispatch()
  let recipes = useSelector(state => state.recipes.recipesList)
  const loader = useSelector(state => state.loader.isLoading)

  const current_page = useSelector(state => state.pagination.current_page)

  const { t, i18n } = useTranslation()

  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    dispatch(getFavorites())
  }, [])

  useEffect(() => {
    console.log('effect home')
    dispatch(getRecipes(10, current_page))
    return () => {
      console.log('cleaned up')
      dispatch(resetRecipe())
    }
  }, [current_page])

  useEffect(() => {
    setRecipe(recipes.length > 0 ? recipes[0] : null)
    // recipes.filter(e => {
    //   return e.id != recipe.id
    // })
  }, [recipes])

  return (
    <Main>
      <Container paddingBottom='0'>
        <Row>
          <Col xs={12}>
            <Title
              as='h1'
              name='Laissez-nous vous aider à trouver une recette !'
              fontSize='28px'
              textAlign='center'
            ></Title>
            <SearchForm />
          </Col>

          {loader ? (
            <Loader />
          ) : (
            <>
              {recipe ? (
                <Col xs={12}>
                  <BannerContainer>
                    <ImageHolder>
                      <ImageContainer
                        image={`${recipe.parameters.link_images}${recipe.image}`}
                      />
                    </ImageHolder>
                    <TextContainer>
                      <TextTop>
                        <TextMeta>
                          <MetaIcon icon={['fas', 'clock']}></MetaIcon>
                          <CookTime>{recipe.duration}&nbsp;MIN</CookTime>
                        </TextMeta>

                        <TextMeta>
                          <MetaIcon icon={['fas', 'calendar-alt']}></MetaIcon>
                          <TextDate>
                            <Moment format='D MMM YYYY'>
                              {recipe.created_at}
                            </Moment>
                          </TextDate>
                        </TextMeta>
                      </TextTop>
                      <div>
                        <Title as='h2' name={recipe.name}></Title>
                      </div>
                      {/* <TextBottom>
                        
                      </TextBottom> */}
                      <TextLink>
                        <TextLinkStyled to={`/recipe/${recipe.id}`}>
                          Voir&nbsp;&gt;
                        </TextLinkStyled>
                      </TextLink>
                    </TextContainer>
                  </BannerContainer>
                </Col>
              ) : null}

              <Col xs={12}>
                <ListCard recettes={recipes}></ListCard>
              </Col>
              <Col xs={12}>
                <Pagination />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </Main>
  )
}

const TextLinkStyled = styled(Link)`
  font-size: 17px;
  color: #c00a27;
  text-decoration: none;
  font-weight: 500;
  padding-right: 33px;
  position: relative;
  display: block;
  overflow: hidden;
  max-width: max-content;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TextLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const TextDate = styled.span`
  color: #888;
  text-decoration: none;
  font-size: 14px;
  box-sizing: border-box;
`

const MetaIcon = styled(FontAwesomeIcon)`
  color: #888;
  margin-right: 10px;
  box-sizing: border-box;
`

const CookTime = styled.span`
  color: #888;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 20px;
  text-transform: uppercase;
  display: block;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
`

const TextMeta = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`

const TextTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 16px;
  box-sizing: border-box;
`

const TextContainer = styled.div`
  width: 42%;
  padding: 6%;
  float: left;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ${maxWidth('lg')`
    width: 100%;
    padding: 50px 20px;
    height: auto;
  `}
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 1s ease;
  background-image: url(${props => props.image});
  box-sizing: border-box;
  animation: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ImageHolder = styled.div`
  width: 58%;
  right: 15px;
  top: 0;
  bottom: 0;
  position: absolute;
  overflow: hidden;
  border-left: 4px solid #e40707;
  box-sizing: border-box;

  ${maxWidth('lg')`
    width: 100%;
    position: relative;
    height: 350px;
    right: 0;
  `}
`

const BannerContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  float: left;
  clear: both;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  padding: 0 15px;
`

export default Home
// https://itnext.io/react-push-notifications-with-hooks-d293d36f4836

// https://www.npmjs.com/package/react-push-notification

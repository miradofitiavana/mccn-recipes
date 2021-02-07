import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { addRemoveFavorite, getFavorites } from '../actions/favorites'
import { isModalOK, showModal } from '../actions/modal'
import ListCard from '../components/list-card'
import Modal from '../components/modal'
import NoData from '../components/no-data'
import Title from '../components/title'
import Col from '../layouts/col'
import { Container, Main } from '../layouts/container'
import Row from '../layouts/row'

const Favoris = () => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.listFavorites)

  useEffect(() => {
    dispatch(getFavorites())
  }, [])

  const { t, i18n } = useTranslation()

  return (
    <Main>
      <Container paddingBottom='0'>
        <Row>
          <Col sm={12}>
            <Title
              as='h2'
              name={t('titres.favoritesH1')}
              textTransform='uppercase'
              margin='0'
              textAlign='center'
            ></Title>
          </Col>
        </Row>
      </Container>
      <Container>
        {favorites.length <= 0 ? (
          <NoData text='Pas de recette en favoris pour le moment!' />
        ) : (
          <ListCard recettes={favorites}></ListCard>
        )}
      </Container>
    </Main>
  )
}

export default Favoris

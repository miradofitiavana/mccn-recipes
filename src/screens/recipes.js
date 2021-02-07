import React, { useEffect } from 'react'
import ListCard from '../components/list-card'
import { Container, Main } from '../layouts/container'
import NoData from '../components/no-data'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes, resetRecipe } from '../actions/recipes'
import Loader from '../components/loader'
import Pagination from '../components/pagination'

const Recipes = () => {
  const dispatch = useDispatch()
  const recipes = useSelector(state => state.recipes.recipesList)
  const loader = useSelector(state => state.loader.isLoading)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    console.log('effect home')
    dispatch(getRecipes(10))

    return () => {
      console.log('cleaned up')
      dispatch(resetRecipe())
    }
  }, [])

  return (
    <Main>
      <Container>
        {loader ? (
          <Loader />
        ) : recipes.length <= 0 ? (
          <NoData />
        ) : (
          <>
            <ListCard recettes={recipes}></ListCard>
            <Pagination />
          </>
        )}
      </Container>
    </Main>
  )
}

export default Recipes

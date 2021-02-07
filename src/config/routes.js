import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './theme'

import Home from '../screens/home'
import Favoris from '../screens/favoris'
import Recipes from '../screens/recipes'
import AddRecipe from '../screens/add-recipe'
import Header from '../components/header'
import Footer from '../components/footer'
// import { setScroll } from '../actions/scroll'
import Detail from '../screens/detail'
import Modal from '../components/modal'
import { isModalOK, showModal } from '../actions/modal'

const Routes = () => {
  const dispatch = useDispatch()

  const isShowingObject = useSelector(state => state.modal.isShowing)
  const isShowing = isShowingObject.state
  const isShowingID = isShowingObject.id

  // let lastScrollY = 0

  // let handleScroll = () => {
  //   lastScrollY = window.scrollY
  //   window.requestAnimationFrame(() => {
  //     dispatch(setScroll(lastScrollY))
  //   })
  // }
  // window.addEventListener('scroll', handleScroll, true)

  return (
    <ThemeProvider
      theme={
        useSelector(state => state.theme.currentTheme) == 'light'
          ? themeLight
          : themeDark
      }
    >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/favoris' component={Favoris} />
          <Route path='/recipes' component={Recipes} />
          <Route path='/recipe/:id' component={Detail} />
          <Route path='/add-recipe' component={AddRecipe} />
          <Redirect to='/home'></Redirect>
        </Switch>
        {isShowing ? (
          <Modal
            title='My Modal'
            isShowing={isShowing}
            onClose={() => dispatch(showModal(false))}
            doAction={() => {
              dispatch(isModalOK({ state: true, id: isShowingID }))
              // dispatch(showModal(false))
            }}
          >
            <p>This is modal body</p>
          </Modal>
        ) : null}
        <Footer></Footer>
      </Router>
    </ThemeProvider>
  )
}

export default Routes

import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logoNormal from '../../assets/img/logo-dark.png'
import logoWhite from '../../assets/img/logo-white.png'
import Button from '../button'
import { useTranslation } from 'react-i18next'

import flagFR from '../../translation/fr/fr.svg'
import flagEN from '../../translation/en/en.svg'
import { toggleTheme } from '../../actions/theme'
import { Container } from '../../layouts/container'

const Header = () => {
  const dispatch = useDispatch()

  const scrollPos = useSelector(state => state.scroll.scrollPos)

  const currentTheme = useSelector(state => state.theme.currentTheme)
  const logo = currentTheme == 'light' ? logoNormal : logoWhite
  const themeIcon = currentTheme == 'light' ? 'moon' : 'sun'

  const { t, i18n } = useTranslation()
  const currentLng = i18n.language

  const flag = currentLng == 'fr' ? flagEN : flagFR

  return (
    <HeaderContainer fixed={scrollPos > 0}>
      <nav>
        <Container
          paddingTop='0'
          paddingBottom='0'
          paddingRight='15px'
          paddingLeft='15px'
        >
          <NavTop>
            <Button
              withIcon
              icone={themeIcon}
              onclickfunction={() => dispatch(toggleTheme())}
            ></Button>
            <Link to='/home'>
              <Logo src={logo} />
            </Link>
            <Button
              withImg
              img={flag}
              onclickfunction={() =>
                i18n.changeLanguage(currentLng == 'fr' ? 'en' : 'fr')
              }
            ></Button>
          </NavTop>
          <HeaderLinksContainer>
            <HeaderLinks to='/recipes'>{t('menu.recettes')}</HeaderLinks>
            <HeaderLinks to='/favoris'>{t('menu.favoris')}</HeaderLinks>
            <HeaderLinks to='/add-recipe'>
              {t('menu.ajouterRecette')}
            </HeaderLinks>
          </HeaderLinksContainer>
        </Container>
      </nav>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  transition: all 0.3s;
  background-color: ${props => props.theme.headerBg};
  position: ${props => (props.fixed ? 'fixed' : 'relative')};
  z-index: 99;
  left: 0;
  right: 0;
  transition: all 0.3s;
`

const NavTop = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 1200px;
  margin: auto;
  padding-top: 15px;
  text-align: center;

  display: flex;
  justify-content: space-between;
`

const Logo = styled.img`
  height: 50px;
  width: auto;
`

const HeaderLinks = styled(Link)`
  padding: 15px;
  transition: all 0.3s;
  color: ${props => props.theme.color};
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
`

const HeaderLinksContainer = styled.div`
  text-align: center;
`

export default Header

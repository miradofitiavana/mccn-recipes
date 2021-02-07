import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { minWidth } from '../../layouts/breakpoints'
import Button from '../button'
import Title from '../title'
import { addRemoveFavorite } from '../../actions/favorites'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../actions/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/fr'

const Card = ({ recette }) => {
  const favorites = useSelector(state => state.favorites.listFavorites)
  const isShowingModal = useSelector(state => state.modal.isShowing)
  const isDeleteOK = useSelector(state => state.modal.isOK)

  const dispatch = useDispatch()

  const [isFavorite, setIsFavorite] = useState(false)

  const currentRecipe = {
    id: recette.id,
    name: recette.name,
    image: recette.image,
    parameters: { link_images: recette.parameters.link_images },
    duration: recette.duration,
    created_at: recette.created_at
  }

  useEffect(() => {
    const isPresent = favorites.map(e => e.id).indexOf(currentRecipe.id)
    setIsFavorite(isPresent !== -1)
  }, [favorites])

  useEffect(() => {
    console.log(currentRecipe.id == isDeleteOK.id)
    if (isDeleteOK.state && currentRecipe.id == isDeleteOK.id) {
      dispatch(addRemoveFavorite(currentRecipe))
    }
  }, [isDeleteOK, isShowingModal])

  const handleFavorite = () => {
    if (isFavorite) {
      console.log('enleve')
      dispatch(showModal({ state: true, id: currentRecipe.id }))
    } else {
      dispatch(addRemoveFavorite(currentRecipe))
    }
  }

  return (
    <CardContainer>
      <ImageHolder>
        <ImageIn>
          <ImageWrap>
            <ImageLink to={`/recipe/${recette.id}`}>
              <ImageSquare
                src='https://www.becipe.frenify.com/1/wp-content/themes/becipe/framework/img/thumb/square.jpg'
                alt='no image'
              />
              <ImageStyled
                image={`${recette.parameters.link_images}${recette.image}`}
              />
            </ImageLink>
          </ImageWrap>
        </ImageIn>
      </ImageHolder>
      <DivCard>
        <TitleHolder>
          <Title as='h3' fontSize='20px' margin='0' name={recette.name}></Title>
        </TitleHolder>
        <ViewHolder>
          <Button
            display='flex'
            withIcon
            icone='bookmark'
            iconPad='0 10px 0 0'
            iconColor='inherit'
            border='none'
            backgroundColor='unset'
            padding='0'
            color='#c00a27'
            title={isFavorite ? 'Remove' : 'Save'}
            onclickfunction={() => handleFavorite(currentRecipe)}
          ></Button>
          <ViewLink to={`/recipe/${recette.id}`}>Voir&nbsp;&gt;</ViewLink>
        </ViewHolder>
        <MetaHolder>
          <MetaContainer>
            <MetaIcon icon={['fas', 'clock']}></MetaIcon>
            <CookTime>{recette.duration}&nbsp;MIN</CookTime>
          </MetaContainer>

          <MetaContainer>
            <MetaIcon icon={['fas', 'calendar-alt']}></MetaIcon>
            <TextDate>
              <Moment format='DD/MM/YYYY'>{recette.created_at}</Moment>
            </TextDate>
          </MetaContainer>
        </MetaHolder>
      </DivCard>
    </CardContainer>
  )
}

const DivCard = styled.div`
  height: 100%;
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

const MetaContainer = styled.div`
  /* margin-right: 20px; */
  display: flex;
  align-items: center;
`

const MetaHolder = styled.div`
  padding: 15px 20px;
  width: 100%;
  float: left;
  clear: both;
  display: flex;
  flex-direction: row;
  line-height: 20px;
  border-top: 1px solid #e5e5e5;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  height: 50px;
`

const ViewLink = styled(Link)`
  /* padding-right: 20px; */
  font-size: 17px;
  color: #c00a27;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  display: block;
  overflow: hidden;
  max-width: max-content;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ViewHolder = styled.div`
  padding: 23px 20px 0 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;
  height: 50px;
  justify-content: space-between;
`

const TitleHolder = styled.div`
  width: 100%;
  padding: 0 20px;
  float: left;
  clear: both;
  /* margin-bottom: 23px; */
  position: relative;
  z-index: 1;
  height: calc(100% - 100px);
`

const ImageStyled = styled.div`
  background-image: url(${props => props.image});
  animation: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  box-sizing: border-box;
`

const ImageSquare = styled.img`
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  min-width: 100%;
  opacity: 0;
  box-sizing: border-box;
`

const ImageLink = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
`

const ImageWrap = styled.div`
  width: 100%;
  float: left;
  clear: both;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-sizing: border-box;
`

const ImageIn = styled.div`
  border: 1px solid #e40707;
  width: 100%;
  float: left;
  border-radius: 4px;
  position: relative;
  box-sizing: border-box;
`

const ImageHolder = styled.div`
  padding: 0 20px;
  width: 100%;
  float: left;
  clear: both;
  z-index: 3;
  margin-bottom: 36px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
`

const CardContainer = styled.div`
  width: 100%;
  float: left;
  clear: both;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ::after {
    top: 30px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-radius: 5px;
    content: '';
    position: absolute;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 5%);
  }
`

Card.propTypes = {
  recette: PropTypes.any
}

export default Card

import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Title from '../title'

const Banner = () => {
  const recipe = useSelector(state => state.recipes.recipesList)[0]

  console.log(recipe)
  return (
    <BannerContainer>
      <ImageHolder>
        <ImageContainer
          image={`${recipe.parameters.link_images}${recipe.image}`}
        />
      </ImageHolder>
      <TextContainer>
        <TextTop>
          <CookTime>{recipe}</CookTime>
        </TextTop>
        <div>
          <Title as='h2' name={recipe.name}></Title>
        </div>
      </TextContainer>
    </BannerContainer>
  )
  // src={`${recette.parameters.link_images}${recette.image}`}
}

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
`

const TextTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 16px;
`

const TextContainer = styled.div`
  width: 42%;
  padding: 6%;
  float: left;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 1s ease;
  background-image: url(${props => props.image});
`

const ImageHolder = styled.div`
  width: 58%;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  overflow: hidden;
  border-left: 4px solid #f0ca6e;
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
`

export default Banner

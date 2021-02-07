import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../layouts/container'

const Loader = () => {
  return (
    <Container padding='30px' textAlign='center'>
      <FontAwesomeIcon
        size='3x'
        icon={['fas', 'spinner']}
        spin
      ></FontAwesomeIcon>
      <TextLoader margin='14px 0 0 0' fontSize='16px' fontWeight='600'>
        Chargement...
      </TextLoader>
    </Container>
  )
}

const TextLoader = styled.p`
  width: ${props => (props.sizeW ? props.sizeW : '')};
  color: ${props => (props.secondary ? 'hsla(0,0%,6.7%, .6 )' : 'initial')};
  color: ${props => (props.color ? props.color : '')};
  padding: ${props => (props.padding ? props.padding : '0')};
  margin: ${props => (props.margin ? props.margin : '0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '')};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : '')};
`

export default Loader

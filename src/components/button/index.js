import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Button = props => {
  return (
    <StyledButton
      onClick={props.onclickfunction}
      padding={props.padding}
      margin={props.margin}
      display={props.display}
      border={props.border}
      backgroundColor={props.backgroundColor}
      color={props.color}
    >
      {props.withIcon ? (
        <StyledIcon
          icon={['fas', props.icone]}
          fontSize={props.iconSize}
          padding={props.iconPad}
          color={props.iconColor}
        />
      ) : null}
      {props.withImg ? <StyledImg src={props.img} /> : null}
      {props.title}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: ${props =>
    props.theme.buttonBg ? props.theme.buttonBg : ''};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : ''};
  border: solid 1px
    ${props => (props.theme.buttonBorder ? props.theme.buttonBorder : '')};
  border: ${props => (props.border ? props.border : '')};
  color: ${props => (props.theme.buttonColor ? props.theme.buttonColor : '')};
  color: ${props => (props.color ? props.color : '')};

  border-radius: 18px;
  padding: ${props => (props.padding ? props.padding : '0 16px 0 16px')};
  margin: ${props => (props.margin ? props.margin : '')};
  display: ${props => (props.display ? props.display : '')};
  outline: none;
  font-weight: 400;
  font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
  font-size: 14px;
  letter-spacing: -0.1px;
  text-transform: uppercase;
  transition: all 0.3s;
  align-items: center;

  &:hover {
    background-color: ${props =>
      props.theme.buttonBgHover ? props.theme.buttonBgHover : ''};
    background-color: ${props =>
      props.backgroundColor ? props.backgroundColor : ''};
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  color: ${props => (props.color ? props.color : props.theme.color)};
  padding: ${props => (props.padding ? props.padding : '')};
`

const StyledImg = styled.img`
  height: 30px;
`

export default Button

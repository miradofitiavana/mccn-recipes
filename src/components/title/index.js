import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { maxWidth } from '../../layouts/breakpoints'

const Title = props => {
  return (
    <StyledTitle
      as={props.as}
      fontSize={props.fontSize}
      margin={props.margin}
      textTransform={props.textTransform}
      textAlign={props.textAlign}
    >
      {props.name}
    </StyledTitle>
  )
}

const StyledTitle = styled.h1`
  margin: ${props => (props.margin ? props.margin : '15px 0')};
  color: ${props => props.theme.titleColor};
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  text-transform: ${props => (props.textTransform ? props.textTransform : '')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  font-weight: 500;
  transition: all 0.3s;

  ${maxWidth('md')`
    font-size: 20px;
  `}
`

Title.propTypes = {
  as: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  textTransform: PropTypes.string,
  textAlign: PropTypes.string,
  name: PropTypes.string
}

export default Title

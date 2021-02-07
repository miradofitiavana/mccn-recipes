import styled from 'styled-components'
import { minWidth } from './breakpoints'

export const Container = styled.div`
  width: 100%;
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '30px')};
  padding-bottom: ${props =>
    props.paddingBottom ? props.paddingBottom : '30px'};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : '')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '')};
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  text-align: ${props => (props.textAlign ? props.textAlign : '')};

  ${minWidth('sm')`
    max-width: 565px;
  `};

  ${minWidth('md')`
    max-width: 750px;
  `};

  ${minWidth('lg')`
    max-width: 990px;
  `};

  ${minWidth('xl')`
    max-width: 1140px; 
  `};
`

export const Main = styled.div`
  transition: all 0.3s;
  /* min-height: 90vh; */
  background-color: ${props => props.theme.mainBg};
`

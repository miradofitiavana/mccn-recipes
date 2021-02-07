import styled from 'styled-components'
import { calcCol, minWidth } from './breakpoints'

const Col = styled.div`
  box-sizing: border-box;

  margin: ${props => (props.margin ? props.margin : '')};
  padding: ${props => (props.padding ? props.padding : '0 15px')};

  ${props =>
    props.xs
      ? minWidth('xs')(`flex: 0 0 ${calcCol(props.xs)}`)
      : 'flex: 0 0 100%'};

  ${props =>
    props.sm ? minWidth('sm')(`flex: 0 0 ${calcCol(props.sm)}`) : ''};

  ${props =>
    props.md ? minWidth('md')(`flex: 0 0 ${calcCol(props.md)}`) : ''};

  ${props =>
    props.lg ? minWidth('lg')(`flex: 0 0 ${calcCol(props.lg)}`) : ''};

  ${props =>
    props.xl ? minWidth('xl')(`flex: 0 0 ${calcCol(props.xl)}`) : ''};
`

export default Col

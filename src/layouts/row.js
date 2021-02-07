import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: ${props => (props.margin ? props.margin : '')};
  padding: ${props => (props.padding ? props.padding : '')};
`

export default Row

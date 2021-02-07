import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../layouts/container'
import PropTypes from 'prop-types'

const NoData = props => {
  return (
    <Container textAlign='center'>
      <StyledIconNoData icon={['fas', 'concierge-bell']} />
      <StyledNoData>
        {props.text ? props.text : 'Pas de recettes disponible pour le moment!'}
      </StyledNoData>
    </Container>
  )
}

const StyledIconNoData = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: ${props => props.theme.noData};
`

const StyledNoData = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.noData};
`

NoData.propTypes = {
  text: PropTypes.string
}

export default NoData

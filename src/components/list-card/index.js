import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card'
import { Container } from '../../layouts/container'
import Col from '../../layouts/col'
import Row from '../../layouts/row'

const ListCard = ({ recettes }) => {
  return (
    <Container>
      <Row>
        {recettes.map((recette, index) => (
          <Col sm={12} md={6} lg={4} key={index} padding='10px 15px'>
            <Card recette={recette} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

ListCard.propTypes = {
  recettes: PropTypes.array
}

export default ListCard

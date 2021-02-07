import React from 'react'
import styled from 'styled-components'
import Button from '../button'
import Title from '../title'
import PropTypes from 'prop-types'

const Modal = props => {
  return (
    <ModalContainer onClick={props.onClose} isShowing={props.isShowing}>
      <ModalContent
        isShowing={props.isShowing}
        onClick={e => e.stopPropagation()}
      >
        <ModalHF>
          <Title as='h4' name='Confirmation' />
        </ModalHF>
        <ModalBody>{props.children}</ModalBody>
        <ModalHF>
          <Button onclickfunction={props.onClose} title='Annuler'></Button>
          <Button onclickfunction={props.doAction} title='Supprimer'></Button>
        </ModalHF>
      </ModalContent>
    </ModalContainer>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  isShowing: PropTypes.any,
  children: PropTypes.any,
  doAction: PropTypes.func
}

const ModalHF = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  transform: ${props =>
    props.isShowing ? 'translateY(0)' : 'translateY(-200px)'};
`

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  /* opacity: 0; */
  transition: all 0.5s;
  /* pointer-events: none; */
  text-align: ${props => props.isShowing};
  opacity: ${props => (props.isShowing ? '1' : '0')};
  pointer-events: ${props => (props.isShowing ? 'visible' : 'none')};
  z-index: 999;
`

export default Modal

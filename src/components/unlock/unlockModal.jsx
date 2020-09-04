import React, { Component, forwardRef } from 'react'
import { DialogContent, Slide } from '@material-ui/core'

import Unlock from './unlock'

import { ModalContainer } from './style'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

class UnlockModal extends Component {
  render() {
    const { closeModal, modalOpen, currentTheme } = this.props

    const fullScreen = window.innerWidth < 450

    return (
      <ModalContainer
        open={modalOpen}
        onClose={closeModal}
        fullWidth={true}
        maxWidth={'sm'}
        TransitionComponent={Transition}
        fullScreen={fullScreen}
      >
        <DialogContent>
          <Unlock currentTheme={currentTheme} closeModal={closeModal} />
        </DialogContent>
      </ModalContainer>
    )
  }
}

export default UnlockModal

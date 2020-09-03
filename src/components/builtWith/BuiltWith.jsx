import React, { forwardRef } from 'react'
import Slide from '@material-ui/core/Slide'
import CloseIcon from '../icons/CloseIcon'
import { CloseButton, ModalContainer, Button, ButtonContainer, Logo } from './style'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const BuiltWith = ({ openBuilt, handleBuiltClose, currentTheme, store }) => {
  const { closeIcon } = currentTheme
  return (
    <ModalContainer
      fullWidth
      open={openBuilt}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleBuiltClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <CloseButton onClick={handleBuiltClose}>
        <CloseIcon color={closeIcon} />
      </CloseButton>
      <ButtonContainer>
        {store.map(({ website, name, logo }, index) => (
          <Button key={index + Date.now()} href={website} target='_blank'>
            {name} <Logo src={require('../../assets/' + logo)} alt={name} />
          </Button>
        ))}
      </ButtonContainer>
    </ModalContainer>
  )
}

export default BuiltWith

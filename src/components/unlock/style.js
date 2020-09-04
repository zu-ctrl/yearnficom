import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'

export const Button = styled.div`
  background: ${(p) => p.theme.defInstructions.button.bg};
  border-radius: 4px;
  padding: 5px 8px;
  min-width: 218px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 32px;
`
export const DeactivateButton = styled(Button)`
  justify-content: center;
`
export const CloseButton = styled.div`
  position: fixed;
  top: 35px;
  right: 20px;
  padding: 3px;
  cursor: pointer;
  @media (max-width: 800px) {
    top: 55px;
    right: 35px;
  }
`
export const ModalContainer = styled(Dialog)`
  .MuiPaper-root {
    background: ${(p) => p.theme.formBackground};
    box-shadow: ${(p) => p.theme.formShadow};
    border-radius: 6px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`
export const ButtonContainer = styled.div`
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.img`
  margin-left: 12px;
  height: 30px;
  width: auto;
`
export const Image = styled.img`
  height: 30px;
  width: auto;
`
export const ButtonText = styled.h4`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.defInstructions.acordion.buttonColor};
`
export const DeactivateText = styled(ButtonText)`
  color: ${(p) => p.theme.defTitle};
`

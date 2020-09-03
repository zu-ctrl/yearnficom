import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'

export const CloseButton = styled.div`
  position: fixed;
  top: 35px;
  right: 20px;
  padding: 3px;
  cursor: pointer;
  @media (max-width: 800px) {
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
export const Button = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.menu.color};
  padding: 16px;
  min-width: 65px;
  background: ${(p) => p.theme.menu.gradient};
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 30px;
`
export const Logo = styled.img`
  margin-left: 12px;
  height: 30px;
  width: auto;
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
`
export const MainWrapper = styled.div`
  display: flex;
  @media (max-width: 990px) {
    height: ${(p) => (p.isBeta ? 'calc(100vh - 40px)' : '100vh')};
    overflow-y: scroll;
    display: block;
  }
`
export const Shadow = styled.div`
  box-shadow: none;
  @media (max-width: 990px) {
    box-shadow: ${(p) => (p.shadowDisabled ? 'none' : p.theme.mainShadow)};
    position: absolute;
    width: 100%;
    height: 23px;
    background: #333;
    bottom: -40px;
  }
`

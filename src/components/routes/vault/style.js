import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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
  box-shadow: ${(p) => p.theme.mainShadow};
  position: relative;
  height: 23px;
  background: #333;
  width: 100%;
  bottom: -19px;
`

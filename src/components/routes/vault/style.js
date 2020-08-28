import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const MainWrapper = styled.div`
  display: flex;
`

export const Shadow = styled.div`
  box-shadow: ${(p) => p.theme.mainShadow};
  position: relative;
  height: 23px;
  background: #333;
  width: 100%;
  bottom: -9px;
`

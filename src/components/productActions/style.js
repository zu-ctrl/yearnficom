import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${(p) => p.theme.productBackground};
  height: ${(p) => (p.isBeta ? 'calc(100vh - 40px)' : '100vh')};
  width: 100%;
  position: relative;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
  }
`
export const Title = styled.h2`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.productTitle};
  filter: ${(p) => p.theme.textFilter};
  max-width: 682px;
  width: 100%;
  margin: 32px auto 0;
  @media (max-width: 1100px) {
    text-align: center;
  }
`
export const Shadow = styled.div`
  box-shadow: ${(p) => (p.shadowDisabled ? 'none' : p.theme.mainShadow)};
  position: absolute;
  width: 100%;
  height: 23px;
  bottom: -30px;
  @media (max-width: 990px) {
    box-shadow: none;
  }
`
export const ShadowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 70%;
  width: 100%;
  overflow: hidden;
  @media (max-width: 990px) {
    max-width: 100%;
  }
`

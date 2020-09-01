import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${(p) => p.theme.productBackground};
  height: ${(p) => (p.isBeta ? 'calc(100vh - 40px)' : '100vh')};
  width: 70%;
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

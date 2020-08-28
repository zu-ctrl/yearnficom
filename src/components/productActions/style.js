import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${(p) => p.theme.productBackground};
  height: calc(100vh - 40px);
  width: 70%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Title = styled.h2`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.blue};
  filter: ${(p) => p.theme.textFilter};
  max-width: 682px;
  width: 100%;
  margin: 32px auto 0;
  padding: 0 10px;
`

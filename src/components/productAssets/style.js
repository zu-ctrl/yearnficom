import styled from 'styled-components'

export const Container = styled.div`
  background: ${(p) => p.theme.vault.assetBackground};
  padding: 14px 16px 0;
  height: calc(100vh - 40px);
  position: relative;
  overflow-y: scroll;
  width: 30%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
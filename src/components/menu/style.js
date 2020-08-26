import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 245px;
  width: 100%;
  background: ${(p) => p.theme.blackMenuBackground};
`
export const ScrollContainer = styled.div`
  height: calc(100vh - 40px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

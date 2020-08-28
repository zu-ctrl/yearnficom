import styled from 'styled-components'

export const Container = styled.div`
  height: ${(p) => (p.isBeta ? 'calc(100vh - 40px)' : '100vh')};
  display: flex;
  overflow: hidden;
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 682px;
  width: 100%;
  margin: 30px auto 0;
  padding: 0 0 30px;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      width: 100%;
    }
  }
  @media (max-width: 990px) {
    max-width: 500px;
  }
`

import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 990px) {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 800px) {
    max-width: 400px;
  }
`
export const Input = styled.input`
  border: none;
  outline: none;
  padding: 9px 10px 9px 12px;
  font-family: 'PT Sans';
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  background: ${(p) => p.theme.vault.searchBackground};
  color: ${(p) => p.theme.vault.searchText};
  ::placeholder {
    color: ${(p) => p.theme.vault.searchText};
  }
`

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

import styled from 'styled-components'

export const Container = styled.div`
  background: ${(p) => p.theme.vault.assetBackground};
  padding: 14px 16px 0;
  height: ${(p) => (p.isBeta ? 'calc(100vh - 40px)' : '100vh')};
  overflow-y: scroll;
  width: 30%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 0 -20px;
  label + .MuiInput-formControl {
    margin-top: 0;
  }
  .MuiFormControl-root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    flex-direction: row;
  }
  .MuiInputLabel-formControl {
    font-family: 'PT Sans';
    font-size: 14px;
    line-height: 22px;
    color: ${(p) => p.theme.sort.color};
    position: inherit;
    margin-right: -7px;
  }
  .MuiInputBase-root {
    font-family: 'PT Sans';
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
    color: ${(p) => p.theme.sort.select};
    border: none;
  }
  .MuiSelect-icon {
    color: ${(p) => p.theme.sort.icon};
  }
  .MuiInput-underline:before {
    border: none;
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border: none;
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(p) => p.theme.sort.color};
  }
  .MuiInput-underline:after {
    border: none;
  }
  .MuiSelect-select:focus {
    background: none;
  }
  input {
    border: none;
  }
`

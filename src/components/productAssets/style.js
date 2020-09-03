import styled from 'styled-components'

export const Container = styled.div`
  background: ${(p) => p.theme.vault.assetBackground};
  padding: 14px 0 0;
  height: ${(p) => (p.isBeta ? 'calc(100vh - 40px)' : '100vh')};
  overflow-y: scroll;
  width: 100%;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 990px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px 0 0;
  }
`
export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 0 -20px;
  padding: 0 16px;
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
  @media (max-width: 990px) {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }
`
export const Shadow = styled.div`
  box-shadow: ${(p) => (p.shadowDisabled ? 'none' : p.theme.mainShadow)};
  position: absolute;
  width: 100%;
  height: 23px;
  background: #333;
  bottom: -30px;
  @media (max-width: 990px) {
    box-shadow: none;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 30%;
  width: 100%;
  overflow: hidden;
  @media (max-width: 990px) {
    max-width: 100%;
  }
`

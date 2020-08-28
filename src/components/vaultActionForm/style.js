import styled from 'styled-components'

export const Container = styled.div`
  max-width: 652px;
  width: 100%;
  margin: 32px auto 0;
`
export const FormContainer = styled.div`
  background: ${(p) => p.theme.formBackground};
  box-shadow: ${(p) => p.theme.formShadow};
  border-radius: 6px;
  padding: 24px 31px;
  display: flex;
  justify-content: space-between;
`
export const InputBox = styled.div`
  input {
    background: #1d2430;
    border: 1px solid #40a9ff;
    box-sizing: border-box;
    box-shadow: 0px 0px 14px rgba(64, 169, 255, 0.6);
    border-radius: 6px;
    padding: 9px;
    font-family: 'PT Sans';
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: ${(p) => p.theme.white};
    height: 40px;
    ::-webkit-input-placeholder {
      color: ${(p) => p.theme.white};
    }

    :-ms-input-placeholder {
      color: ${(p) => p.theme.white};
    }
    ::placeholder {
      color: ${(p) => p.theme.white};
    }
  }
  .MuiFilledInput-underline:hover:before {
    border-bottom: none;
  }
  .MuiFilledInput-underline:before {
    border-bottom: none;
  }
  .MuiFilledInput-underline:after {
    border-bottom: none;
  }
`

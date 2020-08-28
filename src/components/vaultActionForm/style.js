import styled from 'styled-components'

export const Container = styled.div`
  max-width: 682px;
  width: 100%;
  margin: 32px auto 0;
`
export const FormContainer = styled.div`
  background: ${(p) => p.theme.formBackground};
  box-shadow: ${(p) => p.theme.formShadow};
  border-radius: 6px;
  padding: 30px 26px;
  display: flex;
  justify-content: space-between;
`
export const InputBox = styled.div`
  input {
    background: ${(p) => p.theme.formBackground};
    border: ${(p) => p.theme.formBorder};
    box-sizing: border-box;
    box-shadow: ${(p) => p.theme.formInputShadow};
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
export const Balance = styled.p`
  font-family: 'PT Sans';
  font-size: 12px;
  line-height: 22px;
  color: ${(p) => p.theme.white};
  margin-top: 5px;
`
export const WrapContainer = styled.div`
  max-width: 290px;
  width: 100%;
`
export const Description = styled.p`
  font-family: 'PT Sans';
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: ${(p) => (p.deposit ? p.theme.blue : p.theme.white)};
  margin-top: 16px;
`
export const ActionButton = styled.div`
  background: ${(p) => (p.disabled ? p.theme.actionButton.disabledBg : p.theme.actionButton.bg)};
  box-shadow: ${(p) => (p.disabled ? p.theme.actionButton.disabledShadow : p.theme.actionButton.shadow)};
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: 6px 3px;
  justify-content: center;
  margin: 20px 5px 0;
  width: 100%;
  :last-of-type {
    margin-right: 0;
  }
  :first-of-type {
    margin-left: 0;
  }
`
export const ButtonText = styled.p`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-left: 8px;
  color: ${(p) => (p.disabled ? p.theme.whiteSmoke : p.theme.white)};
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
export const SliderContainer = styled.div`
  width: 97%;
  margin-top: 40px;
  .MuiSlider-rail {
    height: 8px;
    border-radius: 12px;
    background: ${(p) => p.theme.slider.rail};
  }
  .MuiSlider-track {
    height: 8px;
    border-radius: 12px;
    background: ${(p) => p.theme.slider.track};
  }
  .MuiSlider-thumb {
    color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 10px #40a9ff);
    background: #bae7ff;
    border: 2px solid #1890ff;
    box-sizing: border-box;
    top: 50%;
    margin-top: 2px;
    transform: translateY(-50%);
    margin-left: -6px;
  }
  .MuiSlider-root {
    /* color: transparent; */
    color: #818fa6;
  }
  .MuiSlider-markActive {
    background-color: #bae7ff;
    opacity: 1;
  }
  .MuiSlider-mark {
    visibility: hidden;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    :nth-child(25n + 4) {
      visibility: visible;
    }
  }
  .PrivateValueLabel-label-5 {
    font-family: 'PT Sans';
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${(p) => p.theme.white};
    text-shadow: 0px 0px 10px #40a9ff;
    margin-left: -5px;
    margin-bottom: -19px;
    ::after {
      content: '%';
    }
  }
`
export const Percent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'PT Sans';
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  color: ${(p) => p.theme.slider.blue};
  div:nth-child(2n) {
    margin-right: -2px;
  }
  div:nth-child(3n) {
    margin-right: -2px;
  }
  div:nth-child(4n) {
    margin-right: -10px;
  }
  div:last-of-type {
    margin-right: -6px;
  }
`

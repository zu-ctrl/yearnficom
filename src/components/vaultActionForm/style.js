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
    background: ${(p) => p.theme.inputBackground};
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
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${(p) => p.theme.white};
      opacity: 1;
    }
    ::placeholder {
      color: ${(p) => p.theme.white};
      opacity: 1;
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
  color: ${(p) => p.theme.actionBalanceColor};
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
  color: ${(p) => (p.deposit ? p.theme.blue : p.theme.actionBalanceColor)};
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
  color: ${(p) => (p.disabled ? p.theme.actionButton.disabledColor : p.theme.actionButton.color)};
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
    filter: ${(p) => p.theme.slider.filter};
    background: ${(p) => p.theme.slider.sliderBg};
    border: 2px solid #1890ff;
    box-sizing: border-box;
    top: 50%;
    margin-top: 2px;
    transform: translateY(-50%);
    margin-left: -6px;
  }
  .MuiSlider-root {
    /* color: transparent; */
    color: ${(p) => p.theme.slider.mark};
  }
  .MuiSlider-markActive {
    background-color: ${(p) => p.theme.slider.markActive};
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
    color: ${(p) => p.theme.slider.currentValue};
    text-shadow: ${(p) => p.theme.slider.shadow};
    margin-left: -5px;
    margin-bottom: -19px;
    ::after {
      content: '%';
    }
  }
`
export const PercentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
export const Percent = styled.div`
  font-family: 'PT Sans';
  font-size: 12px;
  line-height: 24px;
  font-weight: ${(p) => p.theme.slider.fontWeight};
  color: ${(p) => p.theme.slider.blue};
  cursor: pointer;
`

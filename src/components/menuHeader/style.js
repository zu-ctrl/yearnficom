import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${(p) => p.theme.menuHeader.gradient};
  padding: 12px 16px;
`
export const LoginBtn = styled.div`
  background: ${(p) => p.theme.menuHeader.buttonBackground};
  box-shadow: ${(p) => p.theme.menuHeader.shadow};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 151px;
  padding: 0 10px 0 2px;
  cursor: pointer;
`
export const LoginLightBtn = styled(LoginBtn)`
  padding: 4px 10px;
  max-width: 143px;
`
export const ButtonWrapper = styled.div`
  max-width: 163px;
  width: 100%;
  margin: 16px auto 0;
  border-radius: 4px;
`
export const ButtonText = styled.p`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.menuHeader.colorButton};
`
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`
export const TextTotal = styled.p`
  font-family: 'PT Sans';
  font-size: 14px;
  line-height: 22px;
  color: ${(p) => p.theme.menuHeader.colorTotal};
  text-align: center;
  margin-top: 16px;
`
export const TextBlueBalance = styled.p`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${(p) => p.theme.blue};
`
export const TextWhiteBalance = styled.p`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: ${(p) => p.theme.balance};
`

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
  margin: 0 auto;
  width: 100%;
  max-width: 183px;
  padding: 10px 15px;
  cursor: pointer;
`
export const ButtonText = styled.p`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.menuHeader.colorButton};
  margin-left: 12px;
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
  color: ${(p) => p.theme.white};
`

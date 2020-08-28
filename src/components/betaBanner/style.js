import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: ${(p) => p.theme.betaBackgroundGradient};
  box-shadow: ${(p) => p.theme.betaBoxShadow};
  padding: 9px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const BetaTitle = styled.h5`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: ${(p) => p.theme.white};
  margin-left: 9px;
`
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -1px;
  position: relative;
`

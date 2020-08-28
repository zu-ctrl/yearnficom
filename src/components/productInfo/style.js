import styled from 'styled-components'

export const Title = styled.h5`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: ${(p) => p.theme.white};
  margin-left: 6px;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
`
export const Description = styled.h5`
  font-family: 'PT Sans';
  font-size: 14px;
  line-height: 22px;
  color: ${(p) => p.theme.whiteSmoke};
`
export const Container = styled.div`
  max-width: 682px;
  width: 100%;
  margin: 0 auto;
  padding: 33px 10px 0;
`
export const FlexStart = styled.div`
  display: flex;
  justify-content: space-between;
`
export const InfoText = styled.p`
  font-family: 'PT Sans';
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.white};
  margin-top: 32px;
`
export const LinkInfo = styled.a`
  font-family: 'PT Sans';
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.infoLink};
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
`

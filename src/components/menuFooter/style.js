import styled from 'styled-components'

export const Container = styled.div`
  background: ${(p) => p.theme.footer.gradient};
  padding: 5px 30px;
`

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`
export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`
export const SocialLink = styled.a`
  text-decoration: none;
  padding: 3px;
  margin-top: 10px;
`
export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Item = styled.a`
  text-decoration: none;
  padding: 3px;
  margin: 3px 8px;
  color: ${(p) => p.theme.footer.color};
  font-family: 'PT Sans';
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`
export const Shadow = styled.div`
  box-shadow: -10px -48px 33px -11px #111a21;
  overflow: visible;
  position: relative;
`
export const Gradient = styled.div``

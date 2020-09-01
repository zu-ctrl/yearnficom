import styled from 'styled-components'

export const Title = styled.h4`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  margin-left: 13px;
  color: ${(p) => p.theme.mainColor};
  filter: ${(p) => p.theme.textFilter};
`
export const Wrapper = styled.div`
  padding: 20px 16px 7px;
`
export const MenuItem = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  background: ${(p) => (p.currentPage ? p.theme.menu.gradient : 'inherit')};
  box-shadow: ${(p) => p.theme.menu.shadow};
  padding: 10px 15px;
  cursor: pointer;
`
export const MenuLink = styled.a`
  border-radius: 4px;
  display: flex;
  align-items: center;
  background: ${(p) => (p.currentPage ? p.theme.menu.gradient : 'inherit')};
  box-shadow: ${(p) => p.theme.menu.shadow};
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
`
export const ButtonText = styled.p`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  color: ${(p) => p.theme.menu.color};
`
export const ButtonWrapper = styled.div`
  margin-top: 7px;
`
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`
export const ResourceItem = styled.a`
  font-family: 'PT Sans';
  font-size: 16px;
  line-height: 24px;
  border-radius: 4px;
  color: ${(p) => p.theme.menu.resourceColor};
  text-decoration: none;
  padding: 9px 13px;
  display: block;
  margin-bottom: 0;
  :hover {
    background: ${(p) => p.theme.menu.resourceBg};
  }
`
export const WrapperResource = styled.div`
  padding: 20px 16px 25px;
`

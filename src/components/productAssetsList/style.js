import styled from 'styled-components'

export const Asset = styled.div`
  border-radius: 4px;
  background: ${(p) => (p.select ? p.theme.menu.gradient : 'inherit')};
  box-shadow: ${(p) => p.theme.menu.shadow};
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
`
export const AssetWrapper = styled.div`
  margin-top: 8px;
`
export const Container = styled.div`
  margin-top: 16px;
  padding: 0 16px 30px;
  @media (max-width: 990px) {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
`
export const Title = styled.h5`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.white};
  margin-left: 6px;
`
export const Description = styled.h5`
  font-family: 'PT Sans';
  font-size: 14px;
  line-height: 22px;
  color: ${(p) => p.theme.whiteSmoke};
`
export const Apy = styled.h5`
  font-family: 'PT Sans';
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  color: ${(p) => p.theme.white};
  display: flex;
  flex-direction: column;
`
export const ApyDescription = styled.span`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.greenApy};
`
export const Total = styled.h5`
  font-family: 'PT Sans';
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  color: ${(p) => p.theme.white};
  display: flex;
  flex-direction: column;
`
export const Balance = styled.span`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.white};
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`
export const WrapContainer = styled.div`
  width: 100%;
  max-width: 30%;
`
export const LinearContainer = styled.div`
  display: flex;
  justify-content: center;
`

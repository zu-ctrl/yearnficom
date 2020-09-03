import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: ${(p) => p.theme.defInstructions.bg};
  padding-bottom: 20px;
`
export const Shadow = styled.div`
  box-shadow: ${(p) => (p.shadowDisabled ? 'none' : p.theme.mainShadow)};
  position: absolute;
  width: 100%;
  height: 23px;
  bottom: -45px;
`
export const Wrapper = styled.div`
  max-width: 694px;
  width: 100%;
  margin: 0 auto;
  padding: 0 25px;
  height: ${(p) => (p.isBeta ? 'calc(100vh - 40px)' : '100vh')};
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const AccordionContainer = styled.div`
  margin-top: 54px;
  .MuiAccordionSummary-root {
    box-shadow: ${(p) => p.theme.defInstructions.acordion.shadow};
    filter: ${(p) => p.theme.defInstructions.acordion.filter};
    background: ${(p) => p.theme.defInstructions.acordion.bg};
    border-radius: 6px;
    padding: 9px 30px 17px;
  }
  .MuiAccordion-rounded:last-child {
    border-radius: 6px;
  }
  .MuiAccordion-rounded:first-child {
    border-radius: 6px;
  }
  .MuiAccordionSummary-content {
    flex-direction: column;
  }
  .MuiCollapse-wrapperInner {
    background: ${(p) => p.theme.defInstructions.acordion.dropBg};
    box-shadow: ${(p) => p.theme.defInstructions.acordion.dropShadow};
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .MuiPaper-root {
    background: ${(p) => p.theme.defInstructions.acordion.dropBg};
  }
`
export const AccordionDescription = styled.p`
  font-family: 'PT Sans';
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: ${(p) => p.theme.defInstructions.acordion.buttonColor};
`
export const TextBold = styled.span`
  font-weight: bold;
`
export const Title = styled.h3`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: ${(p) => p.theme.defInstructions.color};
`
export const Content = styled.div`
  padding-bottom: 20px;
  margin-top: 80px;
`
export const FlexCenter = styled.div`
  display: flex;
  height: 70px;
  max-width: 379px;
  width: 100%;
  margin: 12px auto -69px;
  background: ${(p) => p.theme.defInstructions.glow};
`
export const SubTitle = styled.h3`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  color: ${(p) => p.theme.defInstructions.subTitle.color};
  filter: ${(p) => p.theme.defInstructions.subTitle.filter};
  margin-top: 33px;
  margin-bottom: -8px;
  :first-of-type {
    margin-top: 23px;
  }
`
export const Button = styled.a`
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${(p) => p.theme.defInstructions.button.bg};
  border: ${(p) => p.border};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 11px 20px;
  min-height: 66px;
  margin-top: 12px;
`
export const Text = styled.p`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: ${(p) => p.theme.defInstructions.button.mainColor};
  margin-left: 9px;
`
export const Description = styled.p`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.defInstructions.button.text};
`
export const LogoButton = styled.div`
  min-width: 205px;
  display: flex;
  align-items: center;
`
export const SpanDescription = styled(Description)`
  font-weight: normal;
`

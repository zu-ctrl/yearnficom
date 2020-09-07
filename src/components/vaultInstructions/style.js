import styled from 'styled-components'

export const Container = styled.div`
  background: ${(p) => p.theme.productBackground};
  width: 100%;
`
export const Shadow = styled.div`
  box-shadow: ${(p) => (p.shadowDisabled ? 'none' : p.theme.mainShadow)};
  position: absolute;
  width: 100%;
  height: ${(p) => (p.shadowDisabled ? '0' : '23px')};
  bottom: -45px;
  transition: all 0.5s ease;
  /* opacity: ${(p) => p.defOpacity}; */
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  height: ${(p) => (p.isBeta ? 'calc(100vh - 40px)' : '100vh')};
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: ${(p) => p.theme.white};
  margin-top: 38px;
`
export const TitleImportant = styled.h3`
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-right: 5px;
  color: ${(p) => p.theme.defTitle};
`
export const FlexCenter = styled.div`
  display: flex;
  min-height: 70px;
  height: 70px;
  max-width: 379px;
  width: 100%;
  margin: 12px auto -69px;
  background: ${(p) => p.theme.defInstructions.glow};
`
export const Text = styled.p`
  font-family: 'PT Sans';
  font-size: 16px;
  line-height: 24px;
  color: ${(p) => p.theme.white};
  margin-top: 23px;
  max-width: 600px;
  width: 100%;
`
export const Image = styled.div`
  max-width: 725px;
  width: 100%;
  margin: 16px auto 0;
  padding-bottom: 40px;
  svg {
    width: 100%;
    height: auto;
  }
`

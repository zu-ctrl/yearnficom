import styled from 'styled-components'

export const ChooserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(p) => p.theme.chooser.bg};
  border-radius: 30px;
  padding: 3px 4px;
  width: 126px;
`
export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background: ${(p) => (p.select ? p.theme.chooser.active : 'transparent')};
  box-shadow: ${(p) => (p.select ? p.theme.chooser.shadow : 'none')};
`
export const DarkButton = styled(Button)`
  padding: 0;
`
export const RipplesContainer = styled.div`
  border-radius: 30px;
  overflow: hidden;
`

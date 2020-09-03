import styled from 'styled-components'

export const Table = styled.table`
  max-width: 420px;
  width: 100%;
  @media (max-width: 1100px) {
    margin-top: 20px;
  }
`
export const Row = styled.tr`
  background: ${(p) => p.theme.apyRowBackground};
`
export const Cell = styled.td`
  padding: 4px 6px;
  font-family: 'PT Sans';
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${(p) => p.theme.white};
  text-align: left;
`
export const TitleCell = styled.th`
  font-family: 'PT Sans';
  font-size: 14px;
  line-height: 160%;
  color: ${(p) => p.theme.white};
  text-align: left;
  padding: 4px 6px;
`

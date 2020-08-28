import React from 'react'
import BetaLinearIcon from '../icons/BetaLinearIcon'
import { BannerWrapper, BetaTitle, FlexCenter } from './style'

import BetaIcon from '../icons/BetaIcon'

const BetaBanner = ({ isBeta, setIsBeta, currentTheme }) => {
  const { blue, linearIcon } = currentTheme
  const handleCloseBetaBanner = () => {
    setIsBeta(false)
    localStorage.setItem('yearnfiBeta', 'false')
  }
  if (!isBeta) return null
  return (
    <>
      <BannerWrapper>
        <BetaIcon color={blue} />
        <BetaTitle>This project is in beta. Use at your own risk.</BetaTitle>
      </BannerWrapper>
      <span onClick={handleCloseBetaBanner} style={{ color: 'white', cursor: 'pointer' }}>
        ⤫
      </span>
      <FlexCenter>
        <BetaLinearIcon color={linearIcon} />
      </FlexCenter>
    </>
  )
}

export default BetaBanner

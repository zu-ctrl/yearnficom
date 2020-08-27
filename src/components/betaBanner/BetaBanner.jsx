import React from 'react'
import { BannerWrapper, BetaTitle } from './style'

import BetaIcon from '../icons/BetaIcon'

const BetaBanner = ({ isBeta, setIsBeta, currentTheme }) => {
  const { blue } = currentTheme
  const handleCloseBetaBanner = () => {
    setIsBeta(false)
    localStorage.setItem('yearnfiBeta', 'false')
  }

  if (!isBeta) return null
  return (
    <BannerWrapper>
      <BetaIcon color={blue} />
      <BetaTitle>This project is in beta. Use at your own risk.</BetaTitle>
      <span onClick={handleCloseBetaBanner} style={{ color: 'white', cursor: 'pointer' }}>
        ⤫
      </span>
    </BannerWrapper>
  )
}

export default BetaBanner

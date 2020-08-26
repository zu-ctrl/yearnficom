import React from 'react'
import { BannerWrapper, BetaTitle } from './style'

import BetaIcon from '../icons/BetaIcon'

const BetaBanner = ({ isBeta, currentTheme }) => {
  const { blue } = currentTheme

  if (!isBeta) return null
  return (
    <BannerWrapper>
      <BetaIcon color={blue} />
      <BetaTitle>This project is in beta. Use at your own risk.</BetaTitle>
    </BannerWrapper>
  )
}

export default BetaBanner

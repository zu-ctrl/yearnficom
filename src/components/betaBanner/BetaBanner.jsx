import React from 'react'
import LinearBetaIcon from '../icons/LinearBetaIcon'
import { BannerWrapper, BetaTitle, FlexCenter } from './style'

import BetaIcon from '../icons/BetaIcon'

const BetaBanner = ({ isBeta, currentTheme }) => {
  const { blue, linearIcon } = currentTheme

  if (!isBeta) return null
  return (
    <>
      <BannerWrapper>
        <BetaIcon color={blue} />
        <BetaTitle>This project is in beta. Use at your own risk.</BetaTitle>
      </BannerWrapper>
      <FlexCenter>
        <LinearBetaIcon color={linearIcon} />
      </FlexCenter>
    </>
  )
}

export default BetaBanner

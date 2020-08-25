import React from 'react'
import { BannerWrapper } from './style'

const BetaBanner = ({ isBeta }) => {
  if (!isBeta) return null
  return <BannerWrapper>This project is in beta. Use at your own risk.</BannerWrapper>
}

export default BetaBanner

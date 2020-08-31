import React from 'react'
import BetaLinearIcon from '../icons/BetaLinearIcon'
import CloseIcon from '../icons/CloseIcon'
import { BannerWrapper, BetaTitle, FlexCenter, Close } from './style'

import BetaIcon from '../icons/BetaIcon'

const BetaBanner = ({ isBeta, setIsBeta, currentTheme, theme }) => {
  const { betaIcon, linearIcon, closeIcon } = currentTheme
  const handleCloseBetaBanner = () => {
    setIsBeta(false)
    localStorage.setItem('yearnfiBeta', 'false')
  }
  if (!isBeta) return null
  return (
    <>
      <BannerWrapper>
        <BetaIcon color={betaIcon} />
        <BetaTitle>This project is in beta. Use at your own risk.</BetaTitle>
        <Close onClick={handleCloseBetaBanner}>
          <CloseIcon color={closeIcon} />
        </Close>
      </BannerWrapper>
      {theme === 'dark' && (
        <FlexCenter>
          <BetaLinearIcon color={linearIcon} />
        </FlexCenter>
      )}
    </>
  )
}

export default BetaBanner

import React from 'react'
import Ripples from 'react-ripples'
import WalletIcon from '../icons/WalletIcon'
import YearnIcon from '../icons/YearnIcon'
import LinearIcon from '../icons/LinearIcon'

import { Wrapper, LoginBtn, ButtonText, FlexCenter, TextTotal, TextBlueBalance, TextWhiteBalance } from './style'

const MenuHeader = ({ currentTheme }) => {
  const { iconColor, iconGlowColor, linearIcon, menu } = currentTheme
  return (
    <>
      <Wrapper>
        <FlexCenter>
          <YearnIcon />
        </FlexCenter>
        <div style={{ marginTop: '16px' }}>
          <Ripples color={menu.ripples}>
            <LoginBtn>
              <WalletIcon color={iconColor} glowColor={iconGlowColor} />
              <ButtonText>0xXXX...XXXX</ButtonText>
            </LoginBtn>
          </Ripples>
        </div>
        <TextTotal>Your total deployed balance</TextTotal>
        <TextBlueBalance>$1,000,000,000.00 USD</TextBlueBalance>
        <TextWhiteBalance>10,000,000.0000 ETH</TextWhiteBalance>
      </Wrapper>
      <FlexCenter>
        <LinearIcon color={linearIcon} />
      </FlexCenter>
    </>
  )
}

export default MenuHeader

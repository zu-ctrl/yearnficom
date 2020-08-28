import React from 'react'
import Ripples from 'react-ripples'
import LoginIcon from '../icons/LoginIcon'
import YearnIcon from '../icons/YearnIcon'
import LinearIcon from '../icons/LinearIcon'

import {
  Wrapper,
  LoginBtn,
  ButtonText,
  FlexCenter,
  TextTotal,
  TextBlueBalance,
  TextWhiteBalance,
  ButtonWrapper,
} from './style'

const MenuHeader = ({ currentTheme, account, setModalOpen }) => {
  const { loginIconColor, linearIcon, menu } = currentTheme
  return (
    <>
      <Wrapper>
        <FlexCenter>
          <YearnIcon />
        </FlexCenter>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            <LoginBtn onClick={() => setModalOpen(true)}>
              <LoginIcon color={loginIconColor} />
              <ButtonText>
                {account && account.address
                  ? account.address.substring(0, 6) +
                    '...' +
                    account.address.substring(account.address.length - 4, account.address.length)
                  : 'Login'}
              </ButtonText>
            </LoginBtn>
          </Ripples>
        </ButtonWrapper>
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

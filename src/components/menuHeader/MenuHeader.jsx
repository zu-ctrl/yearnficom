import React from 'react'
import Ripples from 'react-ripples'
import Skeleton from '@material-ui/lab/Skeleton'
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

const MenuHeader = ({ currentTheme, account, setModalOpen, assets }) => {
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
        <TextBlueBalance>
          {assets && typeof assets[0].balance === 'number' ? `${assets[0].balance} ${assets[0].symbol}` : <Skeleton />}
        </TextBlueBalance>
        <TextWhiteBalance>
          {assets && typeof assets[1].balance === 'number' ? `${assets[1].balance} ${assets[1].symbol}` : <Skeleton />}
        </TextWhiteBalance>
      </Wrapper>
      <FlexCenter>
        <LinearIcon color={linearIcon} />
      </FlexCenter>
    </>
  )
}

export default MenuHeader

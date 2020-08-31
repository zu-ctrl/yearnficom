import React from 'react'
import Ripples from 'react-ripples'
import Skeleton from '@material-ui/lab/Skeleton'
import LoginIcon from '../icons/LoginIcon'
import LoginLightIcon from '../icons/LoginLightIcon'
import YearnIcon from '../icons/YearnIcon'
import YearnWaifuIcon from '../icons/YearnWaifuIcon'
import LinearIcon from '../icons/LinearIcon'
import ArrowDownIcon from '../icons/ArrowDownIcon'

import {
  Wrapper,
  LoginBtn,
  LoginLightBtn,
  ButtonText,
  FlexCenter,
  TextTotal,
  TextBlueBalance,
  TextWhiteBalance,
  ButtonWrapper,
} from './style'

const MenuHeader = ({ currentTheme, account, setModalOpen, assets, theme }) => {
  const { loginIconColor, linearIcon, menu, arrowDown, waifuLinearIcon } = currentTheme

  return (
    <>
      <Wrapper>
        <FlexCenter>{theme === 'waifu' ? <YearnWaifuIcon /> : <YearnIcon />}</FlexCenter>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            {theme === 'dark' ? (
              <LoginBtn onClick={() => setModalOpen(true)}>
                <LoginIcon color={loginIconColor} />
                <ButtonText>
                  {account && account.address
                    ? account.address.substring(0, 6) +
                      '...' +
                      account.address.substring(account.address.length - 4, account.address.length)
                    : 'Login'}
                </ButtonText>
                <ArrowDownIcon color={arrowDown} />
              </LoginBtn>
            ) : (
              <LoginLightBtn onClick={() => setModalOpen(true)}>
                <LoginLightIcon color={loginIconColor} />
                <ButtonText>
                  {account && account.address
                    ? account.address.substring(0, 6) +
                      '...' +
                      account.address.substring(account.address.length - 4, account.address.length)
                    : 'Login'}
                </ButtonText>
                <ArrowDownIcon color={arrowDown} />
              </LoginLightBtn>
            )}
          </Ripples>
        </ButtonWrapper>
        <TextTotal>Your total deployed balance</TextTotal>
        <TextBlueBalance>
          {assets && typeof assets[0].balance === 'number' ? (
            `${assets[0].balance} ${assets[0].symbol}`
          ) : (
            <Skeleton style={{ width: '50px' }} />
          )}
        </TextBlueBalance>
        <TextWhiteBalance>
          {assets && typeof assets[1].balance === 'number' ? (
            `${assets[1].balance} ${assets[1].symbol}`
          ) : (
            <Skeleton style={{ width: '50px' }} />
          )}
        </TextWhiteBalance>
      </Wrapper>
      <FlexCenter>
        <LinearIcon color={linearIcon} middle={waifuLinearIcon ? waifuLinearIcon : false} />
      </FlexCenter>
    </>
  )
}

export default MenuHeader

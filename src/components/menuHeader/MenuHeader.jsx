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
  LogoButton,
} from './style'

const MenuHeader = ({ currentTheme, account, setModalOpen, assets, theme, navigateTo }) => {
  const { loginIconColor, linearIcon, menu, arrowDown, waifuLinearIcon } = currentTheme
  const sortedAssetsByBalance = assets.sort((a, b) => parseFloat(b.balance) - parseFloat(a.balance))
  return (
    <>
      <Wrapper>
        <FlexCenter>
          {theme === 'waifu' ? (
            <LogoButton onClick={() => navigateTo('/')}>
              <YearnWaifuIcon />
            </LogoButton>
          ) : (
            <LogoButton onClick={() => navigateTo('/')}>
              <YearnIcon />
            </LogoButton>
          )}
        </FlexCenter>
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
          {sortedAssetsByBalance && typeof sortedAssetsByBalance[0].balance === 'number' ? (
            `${sortedAssetsByBalance[0].balance} ${sortedAssetsByBalance[0].symbol}`
          ) : (
            <Skeleton style={{ width: '50px' }} />
          )}
        </TextBlueBalance>
        <TextWhiteBalance>
          {sortedAssetsByBalance && typeof sortedAssetsByBalance[1].balance === 'number' ? (
            `${sortedAssetsByBalance[1].balance} ${sortedAssetsByBalance[1].symbol}`
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

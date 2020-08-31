import React from 'react'
import Ripples from 'react-ripples'
import VaultIcon from '../icons/VaultIcon'
import ZapIcon from '../icons/ZapIcon'
import WalletIcon from '../icons/WalletIcon'
import CoverIcon from '../icons/CoverIcon'
import DashboardIcon from '../icons/DashboardIcon'
import MenuWrapperIcon from '../icons/MenuWrapperIcon'

import { Title, Wrapper, ButtonText, MenuItem, ButtonWrapper, FlexCenter, ResourceItem, WrapperResource } from './style'

const MenuNav = ({ navigateTo, currentPage, currentTheme }) => {
  const { iconColor, iconGlowColor, menu, linearIcon, linearMiddleIcon } = currentTheme
  return (
    <>
      <Wrapper>
        <Title>PRODUCTS</Title>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            <MenuItem currentPage={currentPage === 'vault'} onClick={() => navigateTo('/vault')}>
              <VaultIcon color={iconColor} glowColor={iconGlowColor} />
              <ButtonText>Vault</ButtonText>
            </MenuItem>
          </Ripples>
        </ButtonWrapper>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            <MenuItem currentPage={currentPage === 'zap'} onClick={() => navigateTo('/zap')}>
              <ZapIcon color={iconColor} glowColor={iconGlowColor} />
              <ButtonText>Zap</ButtonText>
            </MenuItem>
          </Ripples>
        </ButtonWrapper>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            <MenuItem currentPage={currentPage === 'earn'} onClick={() => navigateTo('/earn')}>
              <WalletIcon color={iconColor} glowColor={iconGlowColor} />
              <ButtonText>Earn</ButtonText>
            </MenuItem>
          </Ripples>
        </ButtonWrapper>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            <MenuItem currentPage={currentPage === 'dao'} onClick={() => navigateTo('/dao')}>
              <WalletIcon color={iconColor} glowColor={iconGlowColor} />
              <ButtonText>Dao</ButtonText>
            </MenuItem>
          </Ripples>
        </ButtonWrapper>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            <MenuItem currentPage={currentPage === 'cover'} onClick={() => navigateTo('/cover')}>
              <CoverIcon color={iconColor} glowColor={iconGlowColor} />
              <ButtonText>Cover</ButtonText>
            </MenuItem>
          </Ripples>
        </ButtonWrapper>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            <MenuItem currentPage={currentPage === 'vote'} onClick={() => navigateTo('/vote')}>
              <CoverIcon color={iconColor} glowColor={iconGlowColor} />
              <ButtonText>Vote</ButtonText>
            </MenuItem>
          </Ripples>
        </ButtonWrapper>
        <ButtonWrapper>
          <Ripples color={menu.ripples}>
            <MenuItem currentPage={currentPage === '/'} onClick={() => navigateTo('/')}>
              <DashboardIcon color={iconColor} glowColor={iconGlowColor} />
              <ButtonText>Dashboard by Zapper</ButtonText>
            </MenuItem>
          </Ripples>
        </ButtonWrapper>
      </Wrapper>
      <FlexCenter>
        <MenuWrapperIcon color={linearIcon} middleColor={linearMiddleIcon} />
      </FlexCenter>
      <WrapperResource>
        <Title>RESOURCES</Title>
        <ResourceItem href='#'>FAQ</ResourceItem>
        <ResourceItem href='#'>Governance</ResourceItem>
        <ResourceItem href='#'>yCosystem</ResourceItem>
        <ResourceItem href='#'>Learn Yearn</ResourceItem>
        <ResourceItem href='#'>View Strategies</ResourceItem>
        <ResourceItem href='#'>Wallet Stats</ResourceItem>
        <ResourceItem href='#'>Yearn Stats</ResourceItem>
        <ResourceItem href='#'>Governance Stats</ResourceItem>
        <ResourceItem href='#'>Governance Stats</ResourceItem>
        <ResourceItem href='#'>Governance Stats</ResourceItem>
      </WrapperResource>
    </>
  )
}

export default MenuNav

import React, { useState } from 'react'
import MainLinearIcon from '../icons/MainLinearIcon'
import VaultIcon from '../icons/VaultIcon'
import DarkVaultMainChart from '../icons/DarkVaultMainChart'
import LightVaultMainChart from '../icons/LightVaultMainChart'
import WaifuVaultMainChart from '../icons/WaifuVaultMainChart'
import { Container, Shadow, Wrapper, TitleContainer, FlexCenter, Text, TitleImportant, Image } from './style'

const VaultInstructions = ({ currentTheme, isBeta, theme }) => {
  const { defTitle, linearMiddleIcon, iconGlowColor } = currentTheme
  const [shadowDisabled, setShadowDisabled] = useState(false)
  const [defOpacity, setDefOpacity] = useState(1)
  const [currentScroll, setСurrentScroll] = useState(0)

  const onScroll = (e) => {
    // const scrollIdentifier = e.target.clientHeight - 50
    // if (e.target.scrollHeight - e.target.scrollTop - 200 <= e.target.clientHeight) {
    //   if (e.target.scrollTop >= currentScroll) {
    //     const opacity = defOpacity <= 0 ? 0 : defOpacity - 0.05
    //     setDefOpacity(Math.floor(opacity * 100) / 100)
    //   } else {
    //     const opacity = defOpacity >= 1 ? 1 : defOpacity + 0.05
    //     setDefOpacity(Math.floor(opacity * 100) / 100)
    //   }
    // }
    // setСurrentScroll(e.target.scrollTop)
    setShadowDisabled(e.target.scrollHeight - e.target.scrollTop - 50 <= e.target.clientHeight)
  }

  return (
    <Container onScroll={onScroll}>
      <Wrapper isBeta={isBeta}>
        <TitleContainer>
          How does <VaultIcon color={defTitle} glowColor={iconGlowColor} /> <TitleImportant>Vault</TitleImportant>
          work?
        </TitleContainer>
        <FlexCenter>
          <MainLinearIcon color={defTitle} middle={linearMiddleIcon} />
        </FlexCenter>
        <Text>
          Vaults automate a number of intensive processes and provide the highest risk-adjusted yield available. Below
          is a diagram of how a couple might work in practice. Go ahead and choose the asset you want to deposit in the
          list to your left to get started!
        </Text>
        <Image>
          {theme === 'dark' ? (
            <DarkVaultMainChart />
          ) : theme === 'light' ? (
            <LightVaultMainChart />
          ) : (
            <WaifuVaultMainChart />
          )}
        </Image>
      </Wrapper>
      <Shadow shadowDisabled={shadowDisabled} defOpacity={defOpacity} />
    </Container>
  )
}

export default VaultInstructions

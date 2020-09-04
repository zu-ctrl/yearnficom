import React, { useState } from 'react'
import MainLinearIcon from '../icons/MainLinearIcon'
import VaultIcon from '../icons/VaultIcon'
import { Container, Shadow, Wrapper, TitleContainer, FlexCenter, Text, TitleImportant, Image } from './style'

const VaultInstructions = ({ currentTheme, isBeta, theme }) => {
  const { defTitle, linearMiddleIcon, iconGlowColor } = currentTheme
  const [shadowDisabled, setShadowDisabled] = useState(false)

  const onScroll = (e) => {
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
        <Image
          src={require(`../../assets/${
            theme === 'dark' ? 'dark' : theme === 'light' ? 'light' : 'waifu'
          }_vault_main-chart.png`)}
          alt='vault chart'
        />
      </Wrapper>
      <Shadow shadowDisabled={shadowDisabled} />
    </Container>
  )
}

export default VaultInstructions

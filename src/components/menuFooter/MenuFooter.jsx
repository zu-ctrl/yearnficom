import React from 'react'
import LinearIcon from '../icons/LinearIcon'
import GitHubIcon from '../icons/GitHubIcon'
import TelegramIcon from '../icons/TelegramIcon'
import DiscordIcon from '../icons/DiscordIcon'
import TwitterIcon from '../icons/TwitterIcon'
import MediumIcon from '../icons/MediumIcon'

import { Container, FlexCenter, SocialWrapper, SocialLink, Menu, Item, Shadow } from './style'

const MenuFooter = ({ currentTheme, shadowDisabled }) => {
  const { linearIcon, footer } = currentTheme
  return (
    <Shadow shadowDisabled={shadowDisabled}>
      <FlexCenter>
        <LinearIcon color={linearIcon} />
      </FlexCenter>
      <Container>
        <SocialWrapper>
          <SocialLink href='https://github.com/iearn-finance/iearn-finance'>
            <GitHubIcon color={footer.socialColor} />
          </SocialLink>
          <SocialLink href='https://t.me/yearnfinance'>
            <TelegramIcon color={footer.socialColor} />
          </SocialLink>
          <SocialLink href='https://discord.gg/CjehUmW'>
            <DiscordIcon color={footer.socialColor} />
          </SocialLink>
          <SocialLink href='https://twitter.com/iearnfinance'>
            <TwitterIcon color={footer.socialColor} />
          </SocialLink>
          <SocialLink href='https://medium.com/iearn'>
            <MediumIcon color={footer.socialColor} />
          </SocialLink>
        </SocialWrapper>
        <Menu>
          <Item href='/'>Home</Item>
          <Item href='https://docs.yearn.finance/'>Resources</Item>
          <Item href='https://github.com/iearn-finance'>Code</Item>
          <Item href='/'>Builtwith</Item>
        </Menu>
      </Container>
    </Shadow>
  )
}

export default MenuFooter

import React from 'react'
import LinearIcon from '../icons/LinearIcon'
import GitHubIcon from '../icons/GitHubIcon'
import TelegramIcon from '../icons/TelegramIcon'
import DiscordIcon from '../icons/DiscordIcon'
import TwitterIcon from '../icons/TwitterIcon'
import MediumIcon from '../icons/MediumIcon'

import { Container, FlexCenter, SocialWrapper, SocialLink, Menu, Item, Shadow, Gradient } from './style'

const MenuFooter = ({ currentTheme }) => {
  const { linearIcon, footer } = currentTheme
  return (
    <Shadow>
      <Gradient />
      <FlexCenter>
        <LinearIcon color={linearIcon} />
      </FlexCenter>
      <Container>
        <SocialWrapper>
          <SocialLink href='#'>
            <GitHubIcon color={footer.socialColor} />
          </SocialLink>
          <SocialLink href='#'>
            <TelegramIcon color={footer.socialColor} />
          </SocialLink>
          <SocialLink href='#'>
            <DiscordIcon color={footer.socialColor} />
          </SocialLink>
          <SocialLink href='#'>
            <TwitterIcon color={footer.socialColor} />
          </SocialLink>
          <SocialLink href='#'>
            <MediumIcon color={footer.socialColor} />
          </SocialLink>
        </SocialWrapper>
        <Menu>
          <Item href='/'>Home</Item>
          <Item href='/'>Resources</Item>
          <Item href='/'>Code</Item>
          <Item href='/'>Builtwith</Item>
        </Menu>
      </Container>
    </Shadow>
  )
}

export default MenuFooter

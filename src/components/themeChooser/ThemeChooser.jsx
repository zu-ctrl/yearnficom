import React from 'react'
import Ripples from 'react-ripples'
import LightButtonIcon from '../icons/LightButtonIcon'
import WaifuIcon from '../icons/WaifuIcon'
import DarkButtonIcon from '../icons/DarkButtonIcon'

import { ChooserContainer, Button, DarkButton, RipplesContainer } from './style'

const ThemeChooser = ({ theme, setTheme, currentTheme }) => {
  const { lightButtonIcon, waifuIcon, darkIcon, menu } = currentTheme
  const handleChangeTheme = (newTheme) => {
    localStorage.setItem('yearnfiTheme', newTheme)
    setTheme(newTheme)
  }
  return (
    <RipplesContainer>
      <Ripples color={menu.ripples}>
        <ChooserContainer>
          <Button select={theme === 'light'} onClick={() => handleChangeTheme('light')}>
            <LightButtonIcon color={lightButtonIcon} />
          </Button>
          <Button select={theme === 'waifu'} onClick={() => handleChangeTheme('waifu')}>
            <WaifuIcon colorBg={waifuIcon.bg} color={waifuIcon.color} />
          </Button>
          <DarkButton select={theme === 'dark'} onClick={() => handleChangeTheme('dark')}>
            <DarkButtonIcon color={darkIcon.color} colorBg={darkIcon.bg} />
          </DarkButton>
        </ChooserContainer>
      </Ripples>
    </RipplesContainer>
  )
}

export default ThemeChooser

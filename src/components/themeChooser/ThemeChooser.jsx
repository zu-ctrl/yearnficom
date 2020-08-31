import React from 'react'

const ThemeChooser = ({ theme, setTheme }) => {
  const handleChangeTheme = (newTheme) => {
    localStorage.setItem('yearnfiTheme', newTheme)
    setTheme(newTheme)
  }
  return (
    <>
      <button onClick={() => handleChangeTheme('light')}>light</button>
      <button onClick={() => handleChangeTheme('waifu')}>waifu</button>
      <button onClick={() => handleChangeTheme('dark')}>dark</button>
    </>
  )
}

export default ThemeChooser

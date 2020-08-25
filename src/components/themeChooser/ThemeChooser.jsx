import React from 'react'

const ThemeChooser = ({ theme, setTheme }) => {
  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('yearnfiTheme', newTheme)
    setTheme(newTheme)
  }
  return <button onClick={handleChangeTheme}>change theme to {theme === 'light' ? 'dark' : 'light'}</button>
}

export default ThemeChooser

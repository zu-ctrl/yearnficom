import React from 'react'
import { withRouter } from 'react-router-dom'
import MenuHeader from '../menuHeader/MenuHeader'
import MenuNav from '../menuNav/MenuNav'
import MenuFooter from '../menuFooter/MenuFooter'

const Menu = ({ history, currentTheme }) => {
  const navigateTo = (route) => history.push(route)
  const currentPage = history.location.pathname.slice(1)
  return (
    <>
      <MenuHeader currentTheme={currentTheme} />
      <MenuNav currentTheme={currentTheme} navigateTo={navigateTo} currentPage={currentPage} />
      <MenuFooter />
    </>
  )
}

export default withRouter(Menu)

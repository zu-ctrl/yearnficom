import React from 'react'
import { withRouter } from 'react-router-dom'
import MenuHeader from '../menuHeader/MenuHeader'
import MenuNav from '../menuNav/MenuNav'
import MenuFooter from '../menuFooter/MenuFooter'
import { Wrapper, ScrollContainer } from './style'

const Menu = ({ history, currentTheme, account, setModalOpen, assets, isBeta }) => {
  const navigateTo = (route) => history.push(route)
  const currentPage = history.location.pathname.slice(1)

  return (
    <>
      <Wrapper isBeta={isBeta}>
        <ScrollContainer>
          <MenuHeader currentTheme={currentTheme} account={account} setModalOpen={setModalOpen} assets={assets} />
          <MenuNav currentTheme={currentTheme} navigateTo={navigateTo} currentPage={currentPage} />
        </ScrollContainer>
        <MenuFooter currentTheme={currentTheme} />
      </Wrapper>
    </>
  )
}

export default withRouter(Menu)

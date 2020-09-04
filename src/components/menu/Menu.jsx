import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import MenuHeader from '../menuHeader/MenuHeader'
import MenuNav from '../menuNav/MenuNav'
import MenuFooter from '../menuFooter/MenuFooter'
import { Wrapper, ScrollContainer } from './style'

const Menu = ({ history, currentTheme, account, setModalOpen, assets, isBeta, theme, handleBuiltOpen }) => {
  const navigateTo = (route) => history.push(route)
  const currentPage = history.location.pathname.slice(1)

  const [shadowDisabled, setShadowDisabled] = useState(false)

  const onScroll = (e) => {
    setShadowDisabled(e.target.scrollHeight - e.target.scrollTop - 50 <= e.target.clientHeight)
  }

  return (
    <>
      <Wrapper isBeta={isBeta}>
        <ScrollContainer onScroll={onScroll}>
          <MenuHeader
            theme={theme}
            currentTheme={currentTheme}
            account={account}
            setModalOpen={setModalOpen}
            assets={assets}
            navigateTo={navigateTo}
          />
          <MenuNav currentTheme={currentTheme} navigateTo={navigateTo} currentPage={currentPage} />
        </ScrollContainer>
        <MenuFooter handleBuiltOpen={handleBuiltOpen} shadowDisabled={shadowDisabled} currentTheme={currentTheme} />
      </Wrapper>
    </>
  )
}

export default withRouter(Menu)

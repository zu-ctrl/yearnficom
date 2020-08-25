import React from 'react'
import VaultIcon from '../icons/VaultIcon'
import ZapIcon from '../icons/ZapIcon'
import WalletIcon from '../icons/WalletIcon'
import DashboardIcon from '../icons/DashboardIcon'

const MenuNav = ({ navigateTo, currentPage, currentTheme }) => {
  const { iconColor, iconGlowColor } = currentTheme
  return (
    <>
      <div>MenuNav</div>
      <div>Current page: *{currentPage}*</div>
      <button onClick={() => navigateTo('/vault')}>
        <VaultIcon color={iconColor} glowColor={iconGlowColor} />
        Vault
      </button>
      <button onClick={() => navigateTo('/earn')}>
        <WalletIcon color={iconColor} glowColor={iconGlowColor} />
        Earn
      </button>
      <button onClick={() => navigateTo('/zap')}>
        <ZapIcon color={iconColor} glowColor={iconGlowColor} />
        Zap
      </button>
      <button onClick={() => navigateTo('/')}>
        <DashboardIcon color={iconColor} glowColor={iconGlowColor} />
        Dashboard
      </button>
    </>
  )
}

export default MenuNav

import React from 'react'
import WalletIcon from '../icons/WalletIcon'

const MenuHeader = ({ currentTheme }) => {
  const { iconColor, iconGlowColor } = currentTheme
  return (
    <>
      <div>MenuHeader</div>
      <div>
        Wallet: <WalletIcon color={iconColor} glowColor={iconGlowColor} />
      </div>
    </>
  )
}

export default MenuHeader

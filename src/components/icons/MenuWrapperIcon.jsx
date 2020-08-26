import React from 'react'

const MenuWrapperIcon = ({ color, middleColor }) => {
  return (
    <svg width='210' height='1' viewBox='0 0 168 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line
        x1='0.5'
        y1='0.5'
        x2='168'
        y2='0.5'
        stroke='url(#paint0_linear)'
        strokeOpacity='0.5'
        strokeLinecap='round'
      />
      <defs>
        <linearGradient id='paint0_linear' x1='168' y1='1' x2='0' y2='1' gradientUnits='userSpaceOnUse'>
          <stop stopColor={color} stopOpacity='0' />
          <stop offset='0.515625' stopColor={middleColor} />
          <stop offset='1' stopColor={color} stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default MenuWrapperIcon

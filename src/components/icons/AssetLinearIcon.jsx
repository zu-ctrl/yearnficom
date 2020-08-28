import React from 'react'

const AssetLinearIcon = ({ color, middle }) => {
  return (
    <svg width='315' height='1' viewBox='0 0 315 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line x1='0.5' y1='0.5' x2='314.5' y2='0.5' stroke='url(#paint2_linear)' strokeLinecap='round' />
      <defs>
        <linearGradient id='paint2_linear' x1='315' y1='1' x2='0' y2='1' gradientUnits='userSpaceOnUse'>
          <stop stopColor={color} stopOpacity='0' />
          <stop offset='0.515625' stopColor={middle} />
          <stop offset='1' stopColor={color} stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default AssetLinearIcon

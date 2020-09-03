import React from 'react'

const MainLinearIcon = ({ color, middle }) => {
  return (
    <svg width='381' height='2' viewBox='0 0 381 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M380 1L1 1.00004' stroke='url(#paint4_linear)' strokeWidth='2' strokeLinecap='round' />
      <defs>
        <linearGradient id='paint4_linear' x1='1' y1='1.00004' x2='380' y2='1.00002' gradientUnits='userSpaceOnUse'>
          <stop stopColor={color} stopOpacity='0' />
          <stop offset='0.515625' stopColor={middle} />
          <stop offset='1' stopColor={color} stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default MainLinearIcon

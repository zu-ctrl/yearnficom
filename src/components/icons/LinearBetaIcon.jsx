import React from 'react'

const LinearIcon = ({ color }) => {
  return (
    <svg width='360' height='1' viewBox='0 0 360 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line y1='0.5' x2='360' y2='0.5' stroke='url(#paint0_linear)' />
      <defs>
        <linearGradient id='paint0_linear' x1='360' y1='1' x2='0' y2='1' gradientUnits='userSpaceOnUse'>
          <stop stopColor={color} stopOpacity='0' />
          <stop offset='0.515625' stopColor={color} />
          <stop offset='1' stopColor={color} stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default LinearIcon

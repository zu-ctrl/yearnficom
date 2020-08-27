import React from 'react'

const LoginIcon = ({ color }) => {
  return (
    <svg width='32' height='30' viewBox='0 0 32 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d)'>
        <circle cx='16' cy='15' r='6' fill={color} />
      </g>
      <defs>
        <filter
          id='filter0_d'
          x='0'
          y='-1'
          width='32'
          height='32'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
          <feOffset />
          <feGaussianBlur stdDeviation='5' />
          <feColorMatrix type='matrix' values='0 0 0 0 0.45098 0 0 0 0 0.819608 0 0 0 0 0.239216 0 0 0 1 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}

export default LoginIcon

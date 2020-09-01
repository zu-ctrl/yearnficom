import React from 'react'

const LightButtonIcon = ({ color }) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='6' cy='6' r='6' fill={color} />
    </svg>
  )
}

export default LightButtonIcon
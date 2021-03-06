import React from 'react'

const CoverIcon = ({ color, glowColor }) => {
  return (
    <svg
      style={{
        filter: `drop-shadow(0px 0px 10px ${glowColor})`,
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.318 3.98203L12.3539 1.26797C12.2578 1.23516 12.1289 1.21875 12 1.21875C11.8711 1.21875 11.7422 1.23516 11.6461 1.26797L3.68203 3.98203C3.4875 4.04766 3.32812 4.27266 3.32812 4.47891V15.7852C3.32812 15.9914 3.46172 16.2633 3.62344 16.3922L11.7023 22.6875C11.7844 22.7508 11.8898 22.7836 11.9977 22.7836C12.1055 22.7836 12.2133 22.7508 12.293 22.6875L20.3719 16.3922C20.5336 16.2656 20.6672 15.9937 20.6672 15.7852V4.47891C20.6719 4.27266 20.5125 4.05 20.318 3.98203ZM18.9844 15.3352L12 20.7773L5.01562 15.3352V5.31328L12 2.93203L18.9844 5.31328V15.3352Z"
        fill={color}
      />
      <rect x="11" y="6" width="2" height="10" fill={color} />
    </svg>
  )
}

export default CoverIcon

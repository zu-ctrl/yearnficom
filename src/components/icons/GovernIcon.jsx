import React from 'react'

const GovernIcon = ({ color, glowColor }) => {
  return (
    <svg
      style={{
        filter: `drop-shadow(0px 0px 10px ${glowColor})`,
      }}
      width='25'
      height='24'
      viewBox='0 0 33 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.3284 12.6472L16.0424 17.3612L24.5277 8.87593L19.8137 4.16188L11.3284 12.6472ZM9.44277 11.7044C8.92207 12.2251 8.92207 13.0693 9.44277 13.59L15.0996 19.2468C15.6203 19.7675 16.4645 19.7675 16.9852 19.2468L26.4133 9.81874C26.934 9.29804 26.934 8.45382 26.4133 7.93312L20.7565 2.27627C20.2358 1.75557 19.3916 1.75557 18.8709 2.27627L9.44277 11.7044Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5 24.6668H6.5V27.3335H26.5V24.6668ZM4.5 22.6668V28.0002C4.5 28.7365 5.09695 29.3335 5.83333 29.3335H27.1667C27.903 29.3335 28.5 28.7365 28.5 28.0002V22.6668H4.5Z'
        fill={color}
      />
      <path d='M4.5 22.5999L9.83333 17.3335L11.1828 18.7455L5.91421 24.0141L4.5 22.5999Z' fill={color} />
      <path d='M27.1019 24.0163L21.8333 18.7477L23.1667 17.3335L28.5161 22.6021L27.1019 24.0163Z' fill={color} />
      <path d='M23.1667 19.3335L20.5 19.3335L23.1667 17.3335V19.3335Z' fill={color} />
      <path d='M12.5 19.3335L9.83333 19.3335V17.3335L12.5 19.3335Z' fill={color} />
    </svg>
  )
}

export default GovernIcon

import React from 'react'

const WaifuIcon = ({ colorBg, color }) => {
  return (
    <svg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='17' cy='17' r='10' fill={colorBg} />
      <circle cx='17' cy='17' r='10' fill='url(#paint3_linear)' />
      <path
        d='M16.8343 11.0413L14.9616 11C14.976 11.2339 14.9472 11.5642 14.9328 11.8257C14.904 12.0596 14.8752 12.3073 14.8463 12.5688C14.6591 12.5688 14.4718 12.5688 14.2701 12.5688C13.3914 12.5688 12.1236 12.4587 11.6194 12.3761L11.6627 13.9725C12.3397 14 13.4634 14.055 14.2125 14.055C14.3709 14.055 14.515 14.055 14.6735 14.055C14.6158 14.6193 14.5726 15.1972 14.5438 15.789C12.527 16.6972 11 18.5413 11 20.3165C11 21.7064 11.8932 22.3119 12.9448 22.3119C13.7083 22.3119 14.4718 22.0917 15.1777 21.7615C15.2353 21.9541 15.3073 22.1468 15.3649 22.3257L17.0216 21.844C16.9064 21.5138 16.7911 21.1697 16.6903 20.8257C17.7851 19.9587 18.9376 18.5138 19.7155 16.6422C20.7095 17.0138 21.2137 17.7431 21.2137 18.5688C21.2137 19.9174 20.09 21.2661 17.3097 21.555L18.2605 23C21.8043 22.4908 23 20.6055 23 18.6514C23 17.055 21.8908 15.8028 20.2197 15.2798C20.3061 15.0183 20.4214 14.7294 20.479 14.578L18.7215 14.1789C18.7071 14.3853 18.6495 14.7294 18.5918 15.0046C18.5054 15.0046 18.419 15.0046 18.3325 15.0046C17.6267 15.0046 16.8776 15.1009 16.1861 15.2523C16.2005 14.8394 16.2437 14.4128 16.2869 14C18.0588 13.9312 19.9892 13.7661 21.401 13.5183L21.3866 11.922C19.8019 12.2798 18.2461 12.4587 16.4886 12.5275C16.5318 12.2523 16.5894 12.0046 16.6327 11.7706C16.6903 11.5642 16.7479 11.3165 16.8343 11.0413ZM12.6999 19.9587C12.6999 19.1743 13.4202 18.1284 14.5006 17.4266C14.5294 18.3761 14.6447 19.3257 14.8031 20.1789C14.2845 20.4679 13.7659 20.633 13.3625 20.633C12.9016 20.633 12.6999 20.3991 12.6999 19.9587ZM16.1285 16.7523V16.711C16.6903 16.5459 17.3529 16.422 18.1164 16.4083C17.6267 17.5229 16.9784 18.3624 16.3013 19.0367C16.1861 18.3486 16.1285 17.5917 16.1285 16.7523Z'
        fill={color}
      />
      <defs>
        <linearGradient id='paint3_linear' x1='3.10301' y1='-7.19117' x2='17' y2='27' gradientUnits='userSpaceOnUse'>
          <stop stopColor={color} />
          <stop offset='1' stopColor={colorBg} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WaifuIcon

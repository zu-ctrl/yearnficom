import React from 'react'

const CloseIcon = ({ color }) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.21388 8L15.3662 0.666406C15.4694 0.544531 15.3826 0.359375 15.2233 0.359375H13.3529C13.2428 0.359375 13.1373 0.408594 13.0647 0.492969L7.99045 6.54219L2.91623 0.492969C2.84592 0.408594 2.74045 0.359375 2.62795 0.359375H0.757634C0.598259 0.359375 0.51154 0.544531 0.614665 0.666406L6.76701 8L0.614665 15.3336C0.591564 15.3608 0.576744 15.394 0.571964 15.4293C0.567183 15.4647 0.572644 15.5006 0.587697 15.533C0.60275 15.5653 0.626763 15.5926 0.656886 15.6117C0.687008 15.6308 0.721975 15.6408 0.757634 15.6406H2.62795C2.7381 15.6406 2.84357 15.5914 2.91623 15.507L7.99045 9.45781L13.0647 15.507C13.135 15.5914 13.2404 15.6406 13.3529 15.6406H15.2233C15.3826 15.6406 15.4694 15.4555 15.3662 15.3336L9.21388 8Z'
        fill={color}
      />
    </svg>
  )
}

export default CloseIcon

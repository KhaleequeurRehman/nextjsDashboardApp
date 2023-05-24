import React from 'react'

const IconButton = ({text,icon,variant='primary'}) => {
  return (
    <React.Fragment>
        <button className={`w-full ${ variant?.toString() === 'primary' ? 'bg-[#4caf502b] text-[#4CAF50]' : variant?.toString() === 'secondary' ? 'bg-[#4b55631c] text-black' : ''} rounded-lg p-3 text-xs  sm:text-sm md:text-base lg:text-lg  font-normal flex justify-start items-center gap-2`}>
            {icon && icon} {text && text}
        </button>
    </React.Fragment>
  )
}

export default IconButton
import Image from 'next/image'
import React from 'react'

const InfoListItem = ({imgSrc,name,icon}) => {
  return (
    <React.Fragment>
        <div className="my-5 flex justify-between items-center">
            <div className="flex gap-5 items-center">
                <div className="w-6 h-6">
                <Image src={`/assets/images/${imgSrc && imgSrc}`} alt={name && name} width={22} height={22} className="w-full h-full" />
                </div>
                <p className="font-normal text-xs sm:text-sm md:text-base  text-[#36454F]">{name && name}</p>
            </div>
            {icon && icon}
        </div>
    </React.Fragment>
  )
}

export default InfoListItem
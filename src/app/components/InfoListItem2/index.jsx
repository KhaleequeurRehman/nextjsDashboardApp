import Image from 'next/image'
import React from 'react'

const InfoListItem2 = ({imgSrc,name,description,icon}) => {
  return (
    <React.Fragment>
        <div className="my-5 p-3 flex justify-between items-center bg-white border border-[#6b728024] rounded-xl">
            <div className="flex gap-5 items-center">
                <div className="w-6 h-6">
                  <Image src={`/assets/images/${imgSrc && imgSrc}`} alt={name && name} width={22} height={22} className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-normal text-sm sm:text-base  text-[#4B5563]">
                    {name && name}
                  </h3>
                  <p className="font-normal text-xs sm:text-sm md:text-base  text-[#76848D]">
                    {description && description}
                  </p>
                </div>
            </div>
            {icon && icon}
        </div>
    </React.Fragment>
  )
}

export default InfoListItem2
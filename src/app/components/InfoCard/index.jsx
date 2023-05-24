import Image from 'next/image'
import React from 'react'

const InfoCard = ({heading,imgSrc,descpription}) => {
  return (
    <React.Fragment>
        <div className="bg-white rounded-xl shadow-xl">
            <div className="px-4 py-5">
                <h2 className="font-medium text-sm sm:text-base md:text-lg text-[#36454F] border-b border-b-[#4B5563] pb-5">
                    {heading && heading}
                </h2>
                <div className="mt-5 w-14 h-14 sm:w-[72px] sm:h-[72px] mx-auto">
                    <Image 
                    src={`/assets/images/${imgSrc && imgSrc}`} 
                    alt={heading && heading} 
                    width={100} 
                    height={100} 
                    className="w-full h-full" 
                    />
                </div>
                <p className="text-center my-2 text-xs sm:text-sm font-normal text-[#76848D]">
                    {descpription && descpription}
                </p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default InfoCard
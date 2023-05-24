import Image from 'next/image';
import React from 'react'
import { MdOutlineSearch } from "react-icons/md";
import { TbSquareRoundedChevronDownFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className='sm:flex-row flex justify-around sm:justify-between items-center my-3 border-b border-b-[#B6B6B6] pb-5'>
      <div className='flex gap-4 items-center sm:w-auto'>
        <div className="w-10 h-10 block sm:hidden">
          <Image src="/assets/images/coffeeIcon.svg" alt="qrCodeImg" width={100} height={100} className="w-full h-full" />
        </div>
        <div>
          <h1 className='text-lg sm:text-2xl lg:text-[2rem]  font-bold text-[#36454F]'>Welcome, Dr. Stephen</h1>
          <p className='sm:mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#76848D]'>Have a nice day at great work</p>
        </div>
      </div>
      <div className='block sm:hidden'>
        <TbSquareRoundedChevronDownFilled className="text-2xl text-[#FF5555]" />
      </div>
      <div className="mt-4 hidden sm:block sm:mt-0 w-full sm:w-64 relative">
        <span className='absolute inset-y-0 left-1 flex items-center pl-2'>
          <MdOutlineSearch  className='h-5 w-5 fill-[#F55349]'/>
        </span>
        <input class="placeholder:text-[#36454F] placeholder:font-normal block bg-white w-full border-0 outline-0 rounded-[100px] py-2 pl-9 pr-3 shadow-lg text-sm" placeholder="Search" type="text" name="search"/>
      </div>
    </nav>
  )
}

export default Navbar
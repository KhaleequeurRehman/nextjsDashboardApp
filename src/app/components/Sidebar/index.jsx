'use client';

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Navbar from '../Navbar.js';

const Sidebar = ({ children }) => {
 
  const pathname = usePathname();

  const sidebarListItems = [
    {
      link:'/',
      name:'Dashboard',
      iconSrc:'dashboardIcon.svg'
    },
    {
      link:'/categories',
      name:'Categories',
      iconSrc:'categoriesIcon.svg'
    },
    {
      link:'/qrCodeMenu',
      name:'QR Code Menu',
      iconSrc:'qrCodeMenuIcon.svg'
    },
    {
      link:'/contentAndDesign',
      name:'Content & Design',
      iconSrc:'contentAndSettingIcon.svg'
    },
    {
      link:'/storeSetting',
      name:'Store Setting',
      iconSrc:'storeSettingIcon.svg'
    },
    {
      link:'/help',
      name:'Help',
      iconSrc:'helpIcon.svg'
    },
  ]
  
  return (
    <div className='flex'>
      <div className={`fixed w-20 md:w-64 h-screen p-4 bg-white border-r-[1px] border-[#f0f3f6] hidden sm:flex sm:flex-col`}>
        <Link href="/">
          <div className="my-3 flex gap-3">
            <Image src="/assets/images/logo.png" alt="logo" width={42} height={28} />
            <Image className='hidden md:block' src="/assets/images/logoName.png" alt="logo" width={143} height={28} />
          </div>
        </Link>
        <span className='border-b-[1px] border-[#4b55632b] w-full p-2'></span>
        <ul className="mt-5">
         {
           Array.isArray(sidebarListItems) && sidebarListItems.map((item,index) => (
            item?.link === pathname? 
            <li key={index}>
              <Link href={item?.link}>
                <div className='w-full bg-[#F55349] text-white font-semibold cursor-pointer my-4 p-4 rounded-xl flex gap-4'>
                  <Image src={`/assets/images/${item?.iconSrc}`} alt={item?.name} width={17} height={17} />
                  <span className='hidden md:block'>{item?.name}</span>
                </div>
              </Link>
            </li>
            :
              <li key={index}>
              <Link href={item?.link}>
                <div className='w-full text-[#4B5563] font-semibold cursor-pointer my-3 p-4 rounded-xl flex gap-4'>
                  <Image src={`/assets/images/${item?.iconSrc}`} alt={item?.name} width={17} height={17} />
                  <span className='hidden md:block'>{item?.name}</span>
                </div>
              </Link>
            </li>
           ))
         }
        </ul>
      </div>
      <main className={`sm:ml-20 md:ml-64 w-full min-h-screen bg-[#F7FAFD] p-4`}>
          {children}
      </main>
    </div>
  )
}

export default Sidebar
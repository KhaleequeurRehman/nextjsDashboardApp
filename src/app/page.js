import React from "react";
import Navbar from "./components/Navbar.js";
import { IoMdCopy } from "react-icons/io";
import { DiAndroid, DiApple } from "react-icons/di";
import { AiFillCheckCircle,AiFillRightCircle,AiOutlineDownCircle } from "react-icons/ai";
import Image from "next/image.js";
import InfoListItem from "./components/InfoListItem/index.jsx";
import InfoCard from "./components/InfoCard/index.jsx";
import Progressbar from "./components/Progressbar/index.jsx";
import IconButton from "./components/IconButton/index.jsx";
import InfoListItem2 from "./components/InfoListItem2/index.jsx";

export default function Home() {

  const infoListItems = [
    {
      icon: <AiFillCheckCircle className="text-2xl text-[#4CAF50]" />,
      name:'Add products to start selling',
      imgSrc:'cubeIcon.svg'
    },
    {
      icon: <AiFillCheckCircle className="text-2xl text-[#4CAF50]" />,
      name:'Setup categories',
      imgSrc:'categoryIcon.svg'
    },
    {
      icon: <AiFillRightCircle className="text-2xl text-[#F55349]" />,
      name:'Customize your store',
      imgSrc:'storeSettingIcon.svg'
    },
    {
      icon: <AiFillRightCircle className="text-2xl text-[#F55349]" />,
      name:'PlaceHolder',
      imgSrc:'shoppingCartIcon.svg'
    },
    {
      icon: <AiFillRightCircle className="text-2xl text-[#F55349]" />,
      name:'Lorem Ipsum',
      imgSrc:'truckIcon.svg'
    },
  ]

  const infoListItems2 = [
    {
      icon: <AiOutlineDownCircle className="text-2xl text-[#4B5563]" />,
      name:'Your app QR Code',
      description:'See your QR Code',
      imgSrc:'scanIco.svg'
    },
    {
      icon: <AiOutlineDownCircle className="text-2xl text-[#4B5563]" />,
      name:'Product Views',
      description:'500K Views Total Learn more',
      imgSrc:'cubeIco.svg'
    },
    {
      icon: <AiOutlineDownCircle className="text-2xl text-[#4B5563]" />,
      name:'Most Viewed Products',
      description:'See Most Viewed Products',
      imgSrc:'eyeIco.svg'
    },
    {
      icon: <AiOutlineDownCircle className="text-2xl text-[#4B5563]" />,
      name:'Conversion Rate',
      description:'0.00 % Total Learn More',
      imgSrc:'cornerArrowIco.svg'
    },
  ]

  const infoCardData = [
    {
      heading: 'New Orders',
      descpription:'Please add product to received orders',
      imgSrc:'boxImg.png'
    },
    {
      heading: 'Most Viewed Products',
      descpription:'Please add product to received orders',
      imgSrc:'boxImg.png'
    },
  ]

  const iconBtnData = [
    {
      btnText:'Generate Android app',
      icon:<DiAndroid className="font-bold text-2xl" />,
      paraText:'Download android app',
      variant:'primary'
    },
    {
      btnText:'Generate IOS app',
      icon:<DiApple className="font-bold text-2xl" />,
      paraText:'Download IOS app',
      variant:'secondary'
    },
  ]

  return (
    <React.Fragment>
      <Navbar />
      <section>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-8 bg-white rounded-xl shadow-xl">
            <div className="px-4 py-5">
              <h2 className="font-semibold text-sm md:text-base lg:text-lg text-[#4B5563]">Your app URL</h2>
              <div className="my-3 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-9 md:col-span-7">
                  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-[#DDDDDD] focus:outline-0 block w-full rounded-lg text-sm md:text-base lg:text-lg font-normal text-[#76848D]" defaultValue="https://www.figma.com/file/nHdNEBaTZI" />
                </div>
                <div className="col-span-3 md:col-span-4">
                  <button className="rounded-lg w-full py-2 px-2 bg-[#F55349] text-white text-sm md:text-base lg:text-lg font-semibold flex justify-center items-center gap-3">
                    <span className="hidden md:block">Copy Link</span> 
                    <IoMdCopy className="font-bold text-base md:text-xl" />
                  </button>
                </div>
              </div>
              <div className="my-6 grid grid-cols-12 gap-4 items-center">
                {
                  Array.isArray(iconBtnData) && iconBtnData.map((item,index)=> (
                    <div className="col-span-12 sm:col-span-6">
                      <IconButton text={item?.btnText}
                      icon={item?.icon}
                      variant={item?.variant}
                      />
                      <p className="hidden sm:block mt-3 text-xs md:text-base lg:text-lg font-normal text-[#76848D]">{item?.paraText}</p>
                    </div>
                  ))
                }
              </div> 
            </div>
          </div>
          <div className="hidden sm:block col-span-12 lg:col-span-4 bg-white rounded-xl shadow-xl">
            <div className="px-4 py-5">
              <h2 className="font-semibold text-sm md:text-base lg:text-lg text-[#36454F] border-b border-b-[#6b72803d] pb-5">Your App QR Code</h2>
              <div className="mt-5 w-24 h-2w-24 md:w-40 md:h-40 mx-auto">
                <Image src="/assets/images/qrCodeImg.png" alt="qrCodeImg" width={100} height={100} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 hidden sm:block">
        <h3 className="my-6 text-base md:text-xl lg:text-2xl text-[#36454F] font-bold">Store Statistics</h3>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-4 bg-white rounded-xl shadow-xl">
            <div className="px-3 py-5 border-b border-b-[#6b72803d]">
              <h3 className="font-normal text-xs text-[#76848D]">Store Setup</h3>
              <h2 className="my-2 font-semibold text-sm md:text-base text-[#36454F]">25% Completed</h2>
              <Progressbar />
            </div>
            <div className="px-3 py-5">
              <h2 className="font-semibold text-sm md:text-base lg:text-lg text-[#36454F]">Complete your store</h2>
              <h3 className="my-2 font-normal text-sm text-[#76848D]">Sellers with complete, quality stores are 4.5 times more likely to get sales.</h3>
              {
                Array.isArray(infoListItems) && infoListItems.map((item,index) => (
                  <InfoListItem key={index} imgSrc={item?.imgSrc} name={item?.name} icon={item?.icon} />
                ))
              }
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              {
                 Array.isArray(infoCardData) && infoCardData.map((item,index)=> (
                  <InfoCard 
                  heading={item?.heading} 
                  descpription={item?.descpription} 
                  imgSrc={item?.imgSrc} 
                  key={index} 
                  />
                ))
              }
              {
                ['chart1Img.svg','chart2Img.svg'].map((item,index) => (
                  <div key={index}>
                    <Image src={`/assets/images/${item}`} alt="qrCodeImg" width={100} height={100} className="w-full h-full" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 block sm:hidden">
        {
          Array.isArray(infoListItems2) && infoListItems2.map((item,index) => (
            <InfoListItem2 key={index} imgSrc={item?.imgSrc} name={item?.name} description={item?.description}  icon={item?.icon} />
          ))
        }
      </section>

    </React.Fragment>
    
  )
}






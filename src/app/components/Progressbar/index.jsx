import React from 'react'

const Progressbar = () => {
  return (
    <React.Fragment>
        <div className="my-3 w-full h-3 rounded-[200px] bg-[#F6E3E3] grid grid-cols-12 gap-3">
          <div className="col-span-4 h-full relative rounded-[200px] bg-[#FF5555] after:absolute after:content-[''] after:bottom-[2px] after:right-[2px] after:w-2 after:h-2 after:rounded-[50%] after:bg-[#ffffff]">
          </div>
          {
            [1,2,3].map((item,index)=> (
              <div className="col-span-2 h-full relative rounded-[200px] after:absolute after:content-[''] after:bottom-[2px] after:right-[2px] after:w-2 after:h-2 after:rounded-[50%] after:bg-[#76848D]" key={index}></div>
            ))
          }
        </div>
    </React.Fragment>
  )
}

export default Progressbar
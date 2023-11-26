import React from 'react'

export const SwiperCard = ({props}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 lg:h-[150px] h-40 overflow-auto">
        <div className='flex lg:flex-row flex-col gap-2 items-center w-full'>
          <p className='text-black'>{props?.headerName}</p>
          <p className='text-[#B0B1B3] text-xs'>{props?.position}</p>
        </div>
        <h6 className='mt-2 lg:text-xs'>{props?.description}</h6>
      </div>
  )
}

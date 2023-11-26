import React from 'react'

export const SwiperCard = ({props}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 min-w-fit w-full max-h-40 overflow-auto">
        <div className='flex gap-2 items-center w-full'>
          <p className='text-black'>{props?.headerName}</p>
          <p className='text-[#B0B1B3] text-xs'>{props?.position}</p>
        </div>
        <h6 className='mt-4'>{props?.discription}</h6>
      </div>
  )
}

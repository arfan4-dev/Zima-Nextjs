import React from 'react'
import Image from "next/image";

// import Img from ''
const GroupEleven = () => {
  return (
    <div className='overflow-hidden '>
        <div className="relative w-screen">
        <Image src="/images/DIAMONDS.png" alt="picture" width={1500} height={400} />

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">DIAMONDS</div>
        </div>

    </div>
  )
}

export default GroupEleven
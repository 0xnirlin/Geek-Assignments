import React from 'react'
import { AiFillStar } from 'react-icons/ai';


const Indabba = ({icon,heading,text}) => {
  return (
    <div className='flex flex-col gap w-[30%]  '>
        <div id='icon' className='text-violet-500'>
            {icon}

        </div>
        <div id='heading' className='flex text-base font-bold  '>{heading}</div>
        <div id='text' className='flex font-light text-base  '>{text}</div>
    </div>
  )
}

export default Indabba
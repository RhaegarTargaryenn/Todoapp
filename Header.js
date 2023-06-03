import React from 'react'
import {FaWallet} from 'react-icons/fa';

function Header (){
  return (
    <div className='w-[1000px] border-2 border-[#242731] h-[50px] flex flex-row bg-black overflow-y-auto'>
    
    
    <div className='ml-4'>
    <div className='text-[#FFFFFF] font-[inter] font-[600px] indent-[18px] mt-2'>Section</div>
    <div className='w-[60px] h-[2px] rounded-[10px] bg-[#3772FF] mt-1 ml-3'></div>
    </div>
    
     <span className='w-[140px] h-[34px] bg-[#A6A6A6] ml-[640px] mt-1 rounded-[10px] '></span>
    <div className='flex flex-row relative'>
    <div className='h-6 w-6 pt-1 relative left-[-130px] rounded-[5px] mt-2 bg-[#A6A6A6] text-blue-300'><FaWallet/></div>
      <div className='text-white absolute right-[55px] mt-3 text-[13px] left-[-100px]'>0.2$XYZ</div>
      <div className=' text-[12px] bg-[#A3E3FF] w-[40px] rounded-[6px] bottom-[70px] ml-[135px] h-5 text-[#3772FF] absolute top-[5px] left-[-180px] mt-1 text-center'>Tier 1</div>
      </div>
    
    
    </div>
  )
}

export default Header;

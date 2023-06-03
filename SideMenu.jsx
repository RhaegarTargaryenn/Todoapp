import React from 'react'
import image from '../Assest/image .jpg'
import { FaShareAltSquare,FaArrowLeft , FaGripLines, FaHome , FaBars, FaUsb} from 'react-icons/fa';




function SideMenu() {
  return (
    <div className='w-[300px] h-[579px] bg-black bg-fixed'>

   <div className='flex flex-row ml-5'>
   <div className='bg-blue-500 text-white rounded-[100%] w-6 flex justify-center h-6 font-semibold mt-6'>N</div>
   <div className='text-white  pt-5 ml-2 font-[poppins] text-[30px]'>Name</div>
   <div className='bg-black text-white h-4 w-6 mt-6 relative left-[120px]'><FaGripLines/></div>
   <div className='bg-black text-white h-4 w-6 mt-8 ml-[80px]'><FaArrowLeft/></div>
  
   </div>       
        
     <div className='flex flex-row ml-6 mt-5'>
     <div className='bg-black text-white'><FaHome/></div>
    <div className='text-[#808191] ml-4'>Home</div>
     </div> 

     <div className='flex flex-row ml-5 mt-5'>
     <div className='ml-1 mt-2 bg-white'><FaBars className="transform rotate-90"/></div>
    <div className='text-[#808191] ml-4'>Section 1</div>
     </div>

     <div className='flex flex-row ml-5 mt-5'>
     <div className='ml-1 mt-2 bg-white'><FaUsb/></div>
    <div className='text-[#808191] ml-4'>Section 2</div>
     </div>

     <div className='flex flex-row ml-5 mt-5'>
     <div className='ml-1 mt-2 bg-white'><FaShareAltSquare/></div>
     <div className='text-[#808191] ml-4'>Section 8</div>
     </div>

     <div className='flex flex-row ml-4 mt-5 bg-[#353945] w-[170px] h-[34px] rounded-[10px]'>
     <div className='ml-2 mt-2'><FaShareAltSquare/></div>
    <div className='text-[#808191] ml-3 mt-1'>Section 8</div>
     </div>

      

      <div className='flex bg-[#353945] w-[100px] rounded-[10px] absolute bottom-[70px] ml-5 h-10 '>
       <div className= ' flex flex-row bg-blue-500 text-white rounded-[100%] w-5 justify-center h-5 font-semibold mt-3 ml-2 '>N</div>
        <div className=' text-white mt-3 ml-2 font-[inter] font-[600px]'>$0.90 </div>
      </div>

      <div className='flex bg-[#A3E3FF] w-[100px] rounded-[10px] absolute bottom-[70px] ml-[135px] h-10'>
      <div className=' text-[#3772FF] mt-3 ml-4 font-[inter] font-[600px]'>Buy $XYZ </div>
      </div>
       

     <div className='absolute bottom-4 w-[100px] ml-5'>
      <img src={image}  className='rounded-[10px]' alt='' />
     </div>
  



    </div>
  )
}

export default SideMenu;

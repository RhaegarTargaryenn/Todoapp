import React from 'react';
import { FaPlus } from 'react-icons/fa';




 function Display (){
  return (
    
    <div  className='w-[968px]  h-[531px] absolute left-[295px] bottom-[1px] bg-black flex flex-row'>

<div className='bg-[#242731] h-[600px] w-[5px] relative left-[-4px] overscroll-contain'></div>
         
         <div className='bg-[#242731] mt-2 w-[220px] ml-3 pl-6 rounded-[10px] h-[45px]'>
           <p className='font-[inter] text-white pt-3'>List : Things to Buy</p>
         </div>


           
         <div className='bg-[#242731] mt-2 w-[220px] ml-3 pl-6 rounded-[10px] h-[45px]'>
           <p className='font-[inter] text-white pt-3'>List : Empty List</p>
         </div>


         <div className='bg-[#242731] mt-2 w-[210px] ml-3 pl-6 rounded-[10px] h-[45px] flex'>
           <p className='font-[inter] text-[#6C6C6C] pt-3 cursor-default'>Add Todo-List</p>
           <div className='relative left-6 top-3 text-white'> <FaPlus /> </div>
    
         </div>

         <div className='bg-[#242731] h-[600px] w-[3px] relative left-1 overscroll-contain'></div>

        <form className='relative left-[-450px] top-[70px] bg-[#242731] w-[224px] h-[120px] rounded-[15px]' >
       <input className=' bg-[#242731] text-white mt-3 ml-3 w-[130px]'
        type="text"
        placeholder="Add a Todo..."
      />
      <input className= ' absolute top-[59px] left-[1px] bg-[#242731] pt-2 font-[poppins] text-[15px] text-white w-[130px] ml-3 h-[20px]'
        type="text"
        placeholder="Add todo description"
      />
      <button className='relative left-6 top-2 text-white ' type="submit"><FaPlus/></button>
    </form>

      


    </div>
  )
}

export default Display;

import { ClipboardCheckIcon, ClipboardPenLineIcon, LayoutDashboard, SlashSquareIcon, X } from 'lucide-react'
import React from 'react'
import { MdOutlineQuiz } from "react-icons/md";
function SideBr() {

  return (
    
    <div className={`text-textBlue bg-white gap-8  h-screen flex flex-col p-6 `}>
        <div className='flex flex-row justify-between w-full  lg:hidden md:hidden'>
            <p>Menu</p>
           
        </div>

        <div className='dashboard  flex items-center flex-row gap-2 md:flex-col lg:flex-col  '>
           <LayoutDashboard />
           <p>Dashboard</p>

        </div>

        <div className='dashboard -ml-2 md:ml-0 lg:ml-0  items-center rounded-md border border-blue-700 bg-blue-100 pl-1 pt-3 pb-3 text-blue-700 flex flex-row gap-2 md:flex-col lg:flex-col  '>
           <ClipboardPenLineIcon />
           <p>Assessment</p>

        </div>

        <div className='dashboard  flex flex-row items-center  gap-2 md:flex-col lg:flex-col  '>
        
        <MdOutlineQuiz size={24} />
           <p>My Library</p>

        </div>
  <div className='bg-gray-300 ' style={{height:'1px'}}></div>
<div className='flex-row lg:flex-col md:flex-col lg:flex-col-reverse gap-4 md:flex-col-reverse justify-between w-full flex'>
        <div className='dashboard items-center  flex flex-row gap-2 md:flex-col lg:flex-col  '>
        
        <SlashSquareIcon />
           <p>Round Stats</p>
           </div>
           <div className=' text-center rounded-full pl-1 pr-1 border border-red-700 bg-red-100 text-red-700'>
            <label>Admin</label>
           </div>

       
        </div>
        

    </div>
    
  
  )
}

export default SideBr
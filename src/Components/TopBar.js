import { X } from 'lucide-react'
import React from 'react'

function TopBar() {
    
  return (
    <div className='bg-white text-textBlue pt-2  w-full border-b border-gray-300'>
        <div className='flex flex-wrap   gap-2 md:gap-4 lg:gap-4 items-center '>
          <div className='border-r-2 w-full ml-12 md:ml-0 lg:ml-0 md:w-fit lg:w-fit border-gray-300 p-4 '>
            <h2>Assessment</h2>
          </div>
          {/* <div className='bg-red-300 ' style={{width:'px',height:'100%'}}></div> */}
     
        <div className='pt-4 pb-4 ml-4 md:ml-0  lg:ml-0 border-b-2 border-blue-700 '>
            <h2 className='text-blue-700'>My Assessments</h2>
        </div>
           <div className='md:hidden lg:hidden pt-4 pb-4 ml-20 md:ml-0  lg:ml-0  '>
            <h2 className='text-gray-700'>Unstop Assessments</h2>
        </div>
        </div>
        <div>

        </div>
     </div>
  )
}

export default TopBar
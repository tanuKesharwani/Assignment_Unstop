import { BriefcaseIcon, CalendarDays, Link, MoreVerticalIcon } from 'lucide-react'
import React from 'react'

function AssesmentCard() {
  return (
    <div className='border text-textBlue border-gray-300 p-4 rounded-xl'>
       <div className='flex flex-row justify-between items-center'>
         <div className='bg-blue-100 p-2 w-fit rounded-md'><BriefcaseIcon className='text-textBlue'/></div>
            <div><MoreVerticalIcon  className='text-textBlue'/></div>
       </div>
       <h2 className='text-textBlue text-xl font-medium mt-2'>Math Assesemnt</h2>
        <div className='flex flex-row gap-2 pb-4 border-dotted border-b-2 border-gray-300'>
            <div className='pr-2 font-medium text-textBlue border-r w-fit border-gray-200'><p>Job</p></div>
            <div className='flex flex-row gap-2'>
                <CalendarDays />
                <p>20 Apr 2023</p>
            </div>
         </div>

         <div className='flex flex-row justify-between items-center p-2'>
            <div className='flex flex-row gap-3'>
                <div>
                <p className='font-medium'>00</p>
                <p className='font-medium'>Duration</p>
                </div>
                <div>
                <p className='font-medium'>00</p>
                <p className='font-medium'>Questions</p>
                </div>
                
            </div>
            <div className='flex flex-row gap-2 mr-10 '>
                <div className='flex flex-row items-center border border-textBlue gap-2 p-1 rounded-full '>
                    <Link />
                    Share
                </div>
                <div className='relative'>
                <div className='absolute top-0 bg-blue-700 p-1 rounded-full text-white'>LP</div>
                <div className='absolute top-0 left-3  bg-cyan-600 p-1 rounded-full text-white'>LP</div>
                <div className='absolute top-0 left-6  bg-pink-700 p-1 rounded-full text-white'>LP</div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default AssesmentCard
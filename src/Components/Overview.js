import { Globe, InfinityIcon, StretchHorizontal, Users } from 'lucide-react'
import React from 'react'

function Overview() {
  return (
    <div className='' >
     <h2 className='text-xl'>Assessmentes Overview</h2>
     <div className='mt-4 grid grid-flow-row-dense lg:grid-flow-col-dense md:grid-flow-col-dense  border border-gray-300 rounded-md'>
        <div className='flex flex-col gap-3 border border-gray-300 p-2 md:p-4 lg:p-5 '>
            <h1>Total Assessment</h1>
            <div className='flex flex-row gap-4 items-center'>
                    <div className='p-1 md:p-2 lg:p-2 text-blue-700 rounded-md bg-blue-100'><StretchHorizontal /></div>
                    <p className='text-sm md:text-xl lg:text-2xl font-medium'>34</p>
            </div>
        </div>
        <div className='col-span-2 flex flex-col gap-3 border border-gray-300 p-2  md:p-4 lg:p-5'>
        <h1>Candidates</h1>
        <div className='flex flex-row gap-2 items-center '>
                   <div className='flex flex-row items-center md:gap-4 gap-2 lg:gap-4 pr-2 md:pr-6  lg:pr-8 border-r border-gray-300'>                    
                    <div className=' p-1 md:p-2 lg:p-2 text-blue-700 rounded-md bg-blue-100'><Users /></div>
                    <div>
                    <p className=' text-sm md:text-xl lg:text-2xl font-medium flex flex-row items-center gap-3'>11,145 <small className='text-green-500 text-sm'>+89</small></p>
                    <p className='text-sm'>Total Candidates</p>
                    </div>
                    </div>
             {/* _________________________ */}
                    <div className='flex flex-row items-center gap-2 pl-4'>                    
                    <div>
                    <p className=' md:text-xl text-sm lg:text-2xl font-medium flex flex-row items-center gap-3'>1,14 <small className='text-green-500 text-sm'>+89</small></p>
                    <p className='text-sm'>Who Attempted</p>
                    </div>
                    </div>

            </div>

        </div>

        <div className='col-span-2 flex flex-col gap-3 border border-gray-300 p-2 md:p-4 lg:p-5 grow'>
        <h1>Candidates Source</h1>
        <div className='flex flex-row gap-2 items-center'>
                   <div className='flex flex-row items-center md:gap-3 gap-2 lg:gap-4 pr-2 md:pr-6 lg:pr-8 border-r border-gray-300'>                    
                    <div className='p-1 lg:p-2 md:p-2 text-red-500 rounded-md bg-red-100'><Globe /></div>
                    <div>
                    <p className='text-md md:text-xl lg:text-2xl font-medium flex flex-row items-center gap-3'>11,000 <small className='text-green-500 text-sm'>+89</small></p>
                    <p className='text-sm'>Email</p>
                    </div>
                    </div>
             {/* _________________________ */}
                    <div className='flex flex-row items-center gap-2 pl-2 lg:pl-4  lg:pr-8 '>                    
                    <div className='border-r border-gray-300 pr-6'>
                    <p className=' text-sm md:text-xl lg:text-2xl font-medium flex flex-row items-center gap-3 '>145 <small className='text-green-500 text-sm'>+89</small></p>
                    <p className='text-sm'>Social Share</p>
                    </div>
                    <div className='pl-2 lg:pl-4 '>
                    <p className='text-sm md:text-xl lg:text-2xl font-medium flex flex-row items-center gap-3'>145 <small className='text-green-500 text-sm'>+89</small></p>
                    <p className='text-sm'>Unique Links</p>
                    </div>
                    </div>

            </div>

        </div>
        <div className=' flex flex-col gap-3 border border-gray-300  p-2 md:p-4 lg:p-5'>
            <h1>Total Purpose</h1>
            <div className='flex flex-row gap-4 items-center'>
                    <div className='p-1 lg:p-2 md:p-2 text-blue-700 rounded-md bg-blue-100'><InfinityIcon /></div>
                    <p className=' md:text-xl text-sm lg:text-2xl font-medium'>11</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Overview
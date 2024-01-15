import React, { useState } from 'react'
import Overview from './Overview'
import NewAssesment from './NewAssesment'
import AssesmentCard from './AssesmentCard'
import { BarChart2Icon, Filter, Search } from 'lucide-react'
import SkillForm from './SkillForm'

function MainSection() {
const[isClicked,setIsClicked] = useState(false);
const[value,setValue] = useState(0);
const handleClick=(v)=>{
    setIsClicked(!isClicked);
    setValue(v);
}


  return (
    <div className='p-6 lg:pb-64 bg-white h-fit text-textBlue'>
       <div className={`lg:block md:block ${value===2?'slideDown':''}${value===1?'slideUp hidden':''}`}>
        <Overview />
        </div>
        <div className='mt-2 lg:mt-10  w-full flex flex-row justify-between items-center'>
        <h2 className='text-xl'>My Assesemnts</h2>
        <div className='lg:hidden md:hidden flex flex-row gap-4 '>
                <div>
                    <Search />
                </div>
                <div ><Filter /></div>
                <div onClick={()=>handleClick(!isClicked?1:2)}><BarChart2Icon /></div>
        </div>
        </div>
        <div className=' mt-4 grid gird-cols-1 md:grid-cols-2 gap-10 lg:gap-20 lg:grid-cols-3 '>
        <NewAssesment />
        <AssesmentCard />
        <AssesmentCard />
        </div>
        
     
    </div>
  )
}

export default MainSection
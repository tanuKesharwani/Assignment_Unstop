import { AlignLeftIcon, X } from 'lucide-react';
import './App.css';
import MainSection from './Components/MainSection';
import SideBr from './Components/SideBr';
import TopBar from './Components/TopBar';
import { useState } from 'react';
import SkillForm from './Components/SkillForm';

function App() {
  const[isClicked,setIsClicked] = useState(false);
  const[value,setValue]=  useState(0);
  //setting isclick to open the opeon or close the side bar in mobile view
  const handleClick =(value)=>{
       setIsClicked(!isClicked);
       setValue(value);
  }
 
  return (
    <div className="flex flex-row gap-5 relative w-full">
       {!isClicked&&<div className={`fixed lg:static z-2  w-5/6 md:w-fit lg:w-fit ${value===1?'sidebar-open':''}`}>
     <div className='lg:hidden md:hidden  absolute top-6 right-4 transition ease-in-out 2s'><X onClick={()=>handleClick(0)}/></div>
       
        <SideBr isClicked={isClicked}/>
      </div>}
      <div className={`flex flex-col w-full z-1 `}>
      {isClicked&&<div className={`lg:hidden  absolute top-4 left-2 p-2 bg-blue-100 text-blue-700 rounded-full `}><AlignLeftIcon onClick={()=>handleClick(1)}/></div>}

        <div>
          <TopBar />
        </div>
        <div className=''>
          <MainSection />
        </div>
      </div>
      <div className={`absolute top-0 w-full `}>
     <SkillForm  />
     </div>
    </div>
  );
}

export default App;

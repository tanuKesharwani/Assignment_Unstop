    import { Plus } from 'lucide-react'
import React from 'react'
    import { useData } from '../DataContext'
    function NewAssesment() {
         const { sharedData, setSharedData} = useData();
   //sending data to skill form setion to open the form using userContext
     const handleClick =()=>{
        setSharedData(true);
     }
      return (
        <div className='' onClick={handleClick} >
           <div className='bg-opacity-50 h-full p-6 gap-4 text-center bg-blue-100 text-textBlue flex rounded-xl flex-col items-center justify-center'>
                <div className='rounded-full p-2 bg-white '><Plus color='blue' size={28}/></div>
                <h2 className='text-xl font-medium'>New Assessment</h2>
                <p className='text-sm'>From here you can add questions of multiple types like,MCQs, subjective(text or paragraph)!</p>
           </div>

        </div>
      )
    }
    
    export default NewAssesment
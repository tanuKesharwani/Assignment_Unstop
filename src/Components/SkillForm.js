import { X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useData } from '../DataContext';

function SkillForm() {
    //this is for the seldction option 
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
//form here we can give hte value ot the skill in the form 
  const [value, setValue] = useState(['ReactJS', 'NodeJS', 'Web Development']);
  const [isVisible, setIsVisible] = useState(false);
  const { sharedData, setSharedData } = useData();

  //for handling the animation to open or close the form 
  const toggleBox = () => {
    setSharedData(!sharedData);
  };
//This funciton will ensure after complition of animation the form should close
  const onAnimationEnd = () => {
    if (!sharedData) {
      setIsVisible(false);
    }
  };
//check for the current status of the animation and the form opeon or close call 
  useEffect(() => {
    if (sharedData) {
      setIsVisible(true);
    }
  }, [sharedData]);

  return (
    <>
      {isVisible && (
        <div
          className={`text-textBlue w-full flex justify-center items-center h-screen relative bg-black bg-opacity-50 box ${
            sharedData ? 'slideUp' : 'godown'
          }`}
          onAnimationEnd={onAnimationEnd}
        >
          <div className='bg-white w-fit rounded-lg'>
            <div className='flex border-b border-gray-300 flex-row justify-between'>
              <h2 className='p-4'>Create new assessment</h2>
              <X className='pr-4 pt-4' size={40} onClick={toggleBox} />
            </div>
            <form className='p-4'>
              <label htmlFor='Name'>Name of assessment</label>
              <input
                type='text'
                placeholder='Type Here'
                className='mt-2 outline-none border border-gray-300 w-full rounded-lg p-2'
              />

              <p htmlFor='purpose' className='mt-4'>
                Purpose of test is
              </p>
              <Select options={options} className='outline-none mt-2' />

              <p htmlFor='purpose' className='mt-4'>
                Description
              </p>
              <Select options={options} className='outline-none mt-2' />
              <p htmlFor='purpose' className='mt-4'>
                Description
              </p>
              <div className=' mt-2 flex flex-col border border-gray-300'>
                <div className='p-4 flex flex-wrap gap-4'>
                  {value.map((d, index) => (
                    <div key={index}>
                      <div className='w-fit p-2 text-blue-700 rounded-full bg-blue-100  flex flex-row gap-3'>
                        {d} <X color='blue' />
                      </div>
                    </div>
                  ))}
                </div>
                <div className=' border-t border-gray-300'>
                  <input type='text' placeholder='Type here' className='w-full outline-none p-2' />
                </div>
              </div>
              <p htmlFor='asss' className='mt-4'>
                Duration of assessment
              </p>
              <input
                type='text'
                placeholder='HH:MM:SS'
                className='mt-2 outline-none border border-gray-300 w-full rounded-lg p-2'
              />
              <button style={{ backgroundColor: '#0073E6' }} className='text-center   p-2 text-white w-full mt-4 rounded-lg'>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SkillForm;

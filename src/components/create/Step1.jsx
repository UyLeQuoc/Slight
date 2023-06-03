import React from 'react'
import { useState } from 'react';

function Step1() {
  const [inputMethod, setInputMethod] = useState("file");

  return (
    <div className='flex flex-row justify-center'>
        <div className='step-1-container w-[80vw] flex flex-col justify-evenly'>
            <div className='step-title '>STEP 1</div>
            <div className='step-tips'>
                <span className='font-bold'>
                Tips: 
                </span>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='step-input-container flex flex-col justify-center'>
                <div className='input text-center text-9xl'>INPUT HERE</div>
            </div>
            <div className='step-button-container flex flex-row justify-center'>
                <div className='switch-input-button'>Switch Input</div>
                <div className='next-step-button'>Next Step</div>
            </div>
        </div>
    </div>
  )
}

export default Step1
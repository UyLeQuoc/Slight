import React from 'react'
import { useState } from 'react';
import Step1 from './create/Step1';
import Step2 from './create/Step2';
function CreateSection() {
  const [step, setStep] = useState(1);

  
  return (
    <div className='create-step-container'>
        <Step2></Step2>
    </div>
  )
}

export default CreateSection
import React from 'react'
import { Button, ConfigProvider, Input } from 'antd'

function Step2({isFetchLoading, submitHandler, prevStep, numberOfSlides, setNumberOfSlides, wordsPerSlide, setWordsPerSlide, submitBtnName}) {
  return (
    <div className='flex flex-row justify-center'>
        <div className='step-2-container w-[80vw] flex flex-col justify-evenly'>
            <div className='step-title '>STEP 2</div>
            <div className='step-tips'>
            Adjust length of the slides. You can leave it as our recommendations and click Submit.            </div>
            <div className='step-input-container flex flex-col'>
              <div className='step-input-title'>Number Of Slides</div>
              <Input 
                type="number"
                min={5}
                max={30}
                value={numberOfSlides}
                onChange={(e) => setNumberOfSlides(e.target.value)}
                placeholder='Number of Slides(1-10)'
              />
            </div>
            <div className='step-input-container flex flex-col'>
              <div className='step-input-title'>Words Per Slide</div>
              <Input 
                type="number"
                min={50}
                placeholder='Words Per Slide'
                value={wordsPerSlide}
                onChange={(e) => setWordsPerSlide(e.target.value)}
              />
            </div>
            {isFetchLoading && 
            <div className="loading-animation-contianer my-[1rem]">
              <div className="follow-the-leader">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className='loading-text-container text-center'>Generating...</div>
            </div>
            }
            <div className='step-button-container flex flex-row justify-center items-center'>
              <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: '#e52991',
                    },
                  }}
                >
                <Button size='large' className='next-step-button cursor-pointer mr-5' onClick={prevStep}>Previous Step</Button>
                <Button size='large' className='cursor-pointer bg-[#e52991]' type='primary' onClick={submitHandler}>{submitBtnName}</Button>
              </ConfigProvider>
            </div>
        </div>
    </div>
  )
}

export default Step2
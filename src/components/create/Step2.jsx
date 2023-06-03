import React from 'react'
import TextQuestion from './Step2Question/TextQuestion'
import ImgQuestion from './Step2Question/ImgQuestion'

function Step2() {
  const questionnaire = [
    {
      questionId : 0,
      type: 'text',
      question: 'Text Question',
      options: [
        {
          optionId : 0,
          content: 'First Option',
        },
        {
          optionId : 1,
          content: 'Second Option',
        },{
          optionId : 2,
          content: 'Third Option',
        },{
          optionId : 3,
          content: 'Fourth Option',
        },
      ],
    },
    {
      questionId : 1,
      type: 'img',
      question: 'Img Question',
      options: [
        {
          optionId : 0,
          imgUrl: '/create-option-img-placeholder.svg',
          content: 'First Option',
        },
        {
          optionId : 1,
          imgUrl: '/create-option-img-placeholder.svg',
          content: 'Second Option',
        },{
          optionId : 2,
          imgUrl: '/create-option-img-placeholder.svg',
          content: 'Third Option',
        },{
          optionId : 3,
          imgUrl: '/create-option-img-placeholder.svg',
          content: 'Fourth Option',
        },
      ],
    },
  ]


  return (
    <div className='flex flex-row justify-center'>
        <div className='step-2-container w-[80vw] flex flex-col justify-evenly'>
            <div className='step-title '>STEP 2</div>
            <div className='step-tips'>
                <span className='font-bold'>
                Tips: 
                </span>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='step-input-container flex flex-col'>
                {questionnaire.map( (question) => 
                  (question.type == 'text' ? <TextQuestion key={question.questionId} questionInfo={question}></TextQuestion>
                                          : <ImgQuestion key={question.questionId} questionInfo={question}></ImgQuestion>
                  )
                )}
            </div>
            <div className='step-button-container flex flex-row justify-center'>
                <div className='next-step-button'>Next Step</div>
            </div>
        </div>
    </div>
  )
}

export default Step2
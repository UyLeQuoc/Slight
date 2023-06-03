import React from 'react'
import { useState } from 'react';

function ImgQuestion({questionInfo}) {
    const [selected, setSelected] = useState(0);
    
    return (
      <div className='create-step2-img-question-container flex flex-col' key={questionInfo.id}>
          <div className='title'>{(questionInfo.questionId + 1) + '. ' + questionInfo.question}</div>
          <div className='options-list flex flex-row justify-between my-[1rem]'>
              {
                  questionInfo.options.map((option) => 
                      <div className={selected == option.optionId ? 'option w-[24%] selected' : 'option w-[24%]'} key={option.optionId} 
                          onClick={(e) => {setSelected(option.optionId)}}>
                          <img className='' src={option.imgUrl} alt={option.content}></img>
                      </div>)
              }
          </div>
      </div>
    )
  }

export default ImgQuestion
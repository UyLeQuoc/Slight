import React from 'react'
import { useState } from 'react';

function TextQuestion({questionInfo}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className='create-step2-text-question-container flex flex-col' key={questionInfo.id}>
        <div className='title'>{(questionInfo.questionId + 1) + '. ' + questionInfo.question}</div>
        <div className='options-list flex flex-row justify-between my-[1rem]'>
            {
                questionInfo.options.map((option) => 
                    <div className={selected == option.optionId ? 'option w-[24%] selected' : 'option w-[24%]'} key={option.optionId} 
                        onClick={(e) => {setSelected(option.optionId)}}>{option.content}
                    </div>)
            }
        </div>
    </div>
  )
}

export default TextQuestion
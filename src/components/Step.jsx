import React from 'react'

function Step({title, description, titleOnLeftSide, imgSrc}) {
  return (
    <div className={titleOnLeftSide ? 'step-container flex flex-row justify-evenly'
                                    : 'step-container flex flex-row-reverse justify-evenly step-right'}>
        <div className='step-text flex flex-col'>
            <div className='step-title'>{title}</div>
            <div className='step-description'>{description}</div>
        </div>
        <div className='step-img'>
            <img src={imgSrc}></img>
        </div>
    </div>
  )
}

export default Step
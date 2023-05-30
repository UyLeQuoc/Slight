import React from 'react'

function Step({title, description, titleOnLeftSide, imgSrc}) {
  return (
    <div className={ titleOnLeftSide ? 'step-container flex flex-row justify-between relative'
                                    : 'step-container flex flex-row-reverse justify-evenly step-right relative'}>
        <div className='step-text flex flex-col'>
            <div className='step-title z-10'>{title}</div>
            <div className='step-description z-10'>{description}</div>
            <span 
            className={`z-[0] bottom-[-70px] text-[220px] 
            absolute font-extrabold text-transparent 
            bg-clip-text bg-gradient-to-b from-[#C4F2FA] to-80%
            
            `+ `${titleOnLeftSide ? 'left-0': 'right-0' }`}>{title.slice(0,6)}
            </span>
        </div>
        <div className='step-img'>
            <img src={imgSrc}></img>
        </div>
        
    </div>
  )
}

export default Step
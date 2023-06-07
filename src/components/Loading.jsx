import React from 'react'

function Loading() {
  return (
    <div className='loading-wrapper flex flex-row justify-center'>
        <div className='loading-container flex flex-col justify-center w-[1400px] h-[90vh]'>
            <div className="bounce-loading">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Loading
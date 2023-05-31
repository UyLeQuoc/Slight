import Reveal from '@/layout/Reveal'
import React from 'react'

function MissionSection() {
  return (
    <Reveal>
    <div className='mission-container flex flex-col items-center'>
      <img src="/mission.svg" className='w-[90%]'/>
      <div className='mission-statement text-[1.5rem] mx-[20vw] font-thin'>
      This project is brought to life because of its need for speakers in general and students in specific, which make their lives easier by saving them hundreds of hours making, and modifying their presentation. 
      </div>
    </div>
    </Reveal>
  )
}

export default MissionSection
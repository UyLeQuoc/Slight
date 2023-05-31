import Reveal from '@/layout/Reveal'
import React from 'react'

function PromotionSection() {
  return (
    <Reveal>
    <div className='promotion-container'>
        <div className='title'>PROMOTIONS</div>
        <div className='plans flex flex-row justify-center'>
            <div className='plan-container flex flex-col'>
                <div className='price'>
                    FREE
                </div>
                <div className='plan-title'>
                    Basic
                </div>
                <div className='description'>
                    Good enough to get started
                </div>
                <div className='getStartedBtn'>
                    Get Started
                </div>
                <ul className='perks-container'>
                    <li>
                        3 Presentaions / month
                    </li>
                    <li>
                        2500 Characters Input / Presentaions
                    </li>
                </ul>
            </div>
            <div className='plan-container flex flex-col'>
            <div className='price'>
                    199.000VND / month
                </div>
                <div className='plan-title'>
                    Premium
                </div>
                <div className='description'>
                    Perfect plan for students and educators
                </div>
                <div className='getStartedBtn'>
                    Get Started
                </div>
                <ul className='perks-container'>
                    <li>
                        10 Presentaions / month
                    </li>
                    <li>
                        6000 Characters Input / Presentaions
                    </li>
                    <li>
                        Document Upload
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </Reveal>
  )
}

export default PromotionSection
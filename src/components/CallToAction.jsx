import Reveal from '@/layout/Reveal'
import Link from 'next/link'
import React from 'react'

function CallToActionSection() {
  return (
<div className='cta-container flex items-center'>
      <div className='w-[1400px] m-auto flex flex-row justify-between items-center'>
        <div className='cta-text basis-1/2 flex flex-col justify-end'>
          <Reveal>
            <div className='cta-title'>EZ CREATING PRESENTATION SLIDES WITH <span>SLIGHT</span></div>
            <div className='cta-description'>
            Presentation will be no longer troublesome, time consuming  anymore. With Slight, AI will help you create a suitable and captivate captivating slide from scratch with your document file or modify your existing one.
            </div>
            {/* <Link href="/#howto" className='cta-moredetails cursor-pointer'>
            More details
            </Link> */}
            <Link href="/create" className='cta-createSlidesBtn flex flex-row justify-center content-center cursor-pointer'>
              CREATE NOW<img src='/cta-arrow.svg' className=''></img>
            </Link>
            <Link href="/#howto" className='cta-howToUseBtn flex flex-row justify-center content-center cursor-pointer'>
            HOW TO USE <img src='/cta-search.svg' className=''></img>
            </Link>
          </Reveal>
        </div>
        <img className='cta-img' src='/cta-macos.svg' alt='website on mac'></img>
      </div>
      <div id='howto' className='self-end mb-[1rem]'></div>
    </div>
  )
}

export default CallToActionSection
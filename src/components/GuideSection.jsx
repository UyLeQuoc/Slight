import React from 'react'
import Step from '@/components/Step'
import Reveal from '@/layout/Reveal'

const content = [
  { 'id': 1,
    'title': 'STEP 1: Start by telling us your topic.',
    'description': 'Describe the topic of your presentation. You can either type it directly into the text box, paste it in from any source, or upload your document under formats ',
    'titleOnLeftSide': true,
    'imgSrc': '/step1.svg',
  },
    {'id': 2,
    'title': 'STEP 2: Customise the look and feel',
    'description': 'Fill out a short form to help our AI figure out your preferred style and create the slides that match it.',
    'titleOnLeftSide': false,
    'imgSrc': '/step2.svg',
  },
    {'id': 3,
    'title': 'STEP 3: Generate your slides',
    'description': 'Give us a minute or two, and let the magic do its work.',
    'titleOnLeftSide': true,
    'imgSrc': '/step3.svg',
  },
    {'id': 4,
    'title': 'STEP 4: Add some finishing touches to the presentation',
    'description': 'Adjust the slides\' content and appearance to make it even better. Editing abilities will be different according to your account plan.',
    'titleOnLeftSide': false,
    'imgSrc': '/step4.svg',
  },
]

function GuideSection() {
  return (
    <div className='guide-container flex justify-center'>
      <div className='flex flex-col justify-center content-center w-[1400px]'>
        <div className='guide-title flex flex-col justify-center content-center'>
          <span className='guide-title-line1'>Save time</span> 
          <span className='guide-title-line2'>within <span>FEW CLICKS</span></span>
        </div>
        <div className='guide-stepList'>
            {
              content.map((o, index) => (
              <Reveal key={o.id}>
                <Step title={o.title} description={o.description} titleOnLeftSide={o.titleOnLeftSide} imgSrc={o.imgSrc} children={index == 0 ? '.DOC, .DOCX, .PDF' : ''}></Step>
              </Reveal>
            ))}
        </div>
      </div>
      <div id='upgrade' className='self-end mb-[1rem]'></div>
    </div>


  )
}

export default GuideSection
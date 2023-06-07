import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import { Button } from 'antd'
import React from 'react'
import Link from 'next/link'

function unauthorized() {
  const data = {
    type: '403',
    imgUrl: '/access-denied.svg',
    title: 'Access Denied',
    subtitle: 'Only Premium users can access the editor.',
    buttons: [
      {name: 'Purchase Premium',
      href: '/payment'}
    ]

  }

  return (
    <>
      <Navbar></Navbar>
      <div className="message-wrapper flex flex-row justify-center">
        <div className='message-container flex flex-col items-center'>
            <img className='w-[40vw]' src={data.imgUrl} alt={data.title} />
            <div className='title'>
              {data.title}
            </div>
            <div className='subtitle'>
              {data.subtitle}
            </div>
            <div className='btn-container flex flex-row justify-center'>
              {data.buttons.map((btn) => (
                <Button className='btn' size='large' key={btn.name}>
                <Link href={btn.href}>{btn.name}</Link>
                </Button>
              ))}
              
            </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default unauthorized
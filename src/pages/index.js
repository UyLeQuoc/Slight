import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'
import LandingSection from '@/components/LandingSection'
import { FloatButton } from 'antd'

function Home() {

  return (
    <>
      <Navbar />
      <LandingSection />
      <Footer />
      <FloatButton.BackTop type='primary'/>
    </>
  )
}

export default Home
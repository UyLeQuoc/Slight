import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import LandingPage from '@/containers/LandingPage'
import React from 'react'

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  )
}

export default Home
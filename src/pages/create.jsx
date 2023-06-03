import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import PromotionSection from '@/components/PromotionSection'
import CreateSection from '@/components/CreateSection'
import React from 'react'

function create() {
  return (
    <>
      <Navbar />
      <CreateSection />
      <PromotionSection />
      <Footer />
    </>
  )
}

export default create
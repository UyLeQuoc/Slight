import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import PromotionSection from '@/components/PromotionSection'
import PaymentSection from '@/components/PaymentSection'
import React from 'react'

function Payment() {
  return (
    <>
      <Navbar></Navbar>
      <PromotionSection></PromotionSection>
      <PaymentSection></PaymentSection>
      <Footer></Footer>
    </>

  )
}

export default Payment
import React from 'react'
import CallToActionSection from '@/components/CallToAction'
import GuideSection from '@/components/GuideSection'
import PromotionSection from '@/components/PromotionSection'
import MissionSection from '@/components/MissionSection'
import Reveal from '@/layout/Reveal'
function LandingPage() {
  return (
    <>
      <CallToActionSection />
      <GuideSection />
      <PromotionSection />
      <MissionSection />
    </>
  )
}

export default LandingPage
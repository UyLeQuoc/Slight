import { withPremium } from '@/hooks/route'
import React from 'react'

function test() {
  return (
    <div>
      Tràng tests
    </div>
  )
}

export default withPremium(test)
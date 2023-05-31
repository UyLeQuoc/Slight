import React from 'react'

function PaymentInfo() {
  return (
    <div className='payment-method'>
        <div className='payment-method-qr-code'>

        </div>
        <div className='payment-method-info'>
            <div className='payment-method-info-title'>
                <div className='payment-method-info-title-amount'>
                    <span></span>
                </div>
                <div className='payment-method-info-title-code'>
                    <span></span>
                </div>
                <div className='payment-method-info-title-syntax'>
                    <span></span>
                </div>
            </div>
            <div className='payment-method-info-description'>

            </div>
            <div className='payment-method-info-complete-btn'>

            </div>
        </div>
    </div>
  )
}

export default PaymentInfo
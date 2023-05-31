import React from 'react'

function PaymentSection() {
 const paymentList = [
    {
        id: 1,
        logoUrl: '/vnpay.svg',
    },
    {
        id: 2,
        logoUrl: '/momo.svg',
    },
    {
        id: 3,
        logoUrl: '/zalopay.svg',
    },
    {
        id: 4,
        logoUrl: '/mastercard-visa.svg',
    },
 ]


  return (
    <div className='payment-container flex items-center'>
        <div className='flex flex-row'>
            <div className='paymant-title'>PAYMENT GATEWAY</div>
            <div className='payment-content'>
                <div className='payment-img'>
                    <img className='payment-graphic' src='/payment-graphic.svg' alt='payment graphic' />
                </div>
                <div className='payment-methods'>
                    <div className='payment-methods-list'>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentSection
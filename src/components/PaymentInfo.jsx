import { CardElement } from '@stripe/react-stripe-js'
import { Button } from 'antd'
import React from 'react'

function PaymentInfo({paymentInfo: {id, logoUrl, qrcodeUrl, active, uidString}, paymentHandler, isPaymentHandler}) {
  
    return (
    <div className='payment-method-container flex flex-row w-[100%] h-[100%] selected-payment-content py-[2rem]' key={'_' + id}>
        {active && (<>
            <div className='payment-method-qr-code w-[40%] pl-[1rem]'>
                <img src={qrcodeUrl} alt='payment qr code' />
            </div>
            <div className='payment-method-info flex flex-col p-[0.5rem] pr-[1rem] w-[60%] h-[100%] justify-center'>
                <div className='payment-method-info-title'>
                    <div className='payment-method-info-title-amount'>
                        <span>Số tiền: </span><span className='text-red-600'>199.000VND</span>
                    </div>
                    <div className='payment-method-info-title-syntax'>
                        <span>Cú pháp: </span><span className='font-light text-red-600'>{uidString} - PREMIUM - SLIGHT</span>
                    </div>
                </div>
                <div className='payment-method-info-description'>
                Hãy chờ một vài phút để hệ thống cập nhật thông tin của bạn, trong trường hợp chưa được cập nhật trên web vui lòng liên hệ qua số hotline 090.7776.929 929 (Từ 08h00 đến 22h00 hằng ngày)
                </div>
                <div className='payment-method-info-complete-btn-container flex flex-row justify-center'>
                    <div className='payment-method-info-complete-btn'>COMPLETE</div>
                </div>
            </div>
            </>
        )}
        {!active && (
            <div className='unavailable-title-container w-full flex flex-col justify-center p-10'>
                <div>
                    <span className=''>Credit or debit card</span>
                    <CardElement className='bg-white p-4 my-2'/>
                    <Button onClick={paymentHandler} type='primary' className='bg-blue-500' loading={isPaymentHandler}>Submit Payment</Button>
                </div>
            </div>
        )}
    </div>
  )
}

export default PaymentInfo
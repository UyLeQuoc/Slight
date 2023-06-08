import React from 'react'
import { useState } from 'react';
import useAuth from '@/hooks/auth';
import PaymentInfo from './PaymentInfo';


function PaymentSection({paymentHandler, isPaymentHandler}) {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);

    const handlePaymentMethodChange = (id) => {
        setSelectedPaymentMethod(id);
    }

    const ref = React.useRef(null);

    React.useEffect(() => {
      setTimeout( () => {
      ref.current?.scrollIntoView();
      }, 100);
    },[]);
    const {user} = useAuth();
    console.log(user);
    const uidString = user?.uid.toString().slice(0, 6);

    
    var paymentList = [
        {
            id: 1,
            logoUrl: '/vnpay.svg',
            qrcodeUrl: '/vnpay-qrcode.svg',
            active: true,

            uidString: uidString,
        },
        {
            id: 2,
            logoUrl: '/momo.svg',
            qrcodeUrl: '/momo-qrcode.svg',
            active: true,

            uidString: uidString,

        },
        {
            id: 3,
            logoUrl: '/zalopay.svg',
            qrcodeUrl: '/zalopay-qrcode.svg',
            active: true,

            uidString: uidString,

        },
        {
            id: 4,
            logoUrl: '/mastercard-visa.svg',
            qrcodeUrl: '/mastercard-visa-qrcode.svg',
            active: false,
        },
    ]




  return (
    <div className='payment-container w-[100vw] flex items-center justify-center'>
        <div className='flex flex-col'>
            <div className='paymant-title'>PAYMENT GATEWAY</div>
            <div className='payment-content flex flex-row justify-center'>
                <div className='payment-img w-[38vw] px-[2rem] flex flex-row justify-center'>
                    <img className='payment-graphic' src='/payment-graphic.svg' alt='payment graphic' />
                </div>
                <div className='payment-methods w-[45vw] flex flex-col'>
                    <div className='payment-methods-list w-[100%] flex flex-row justify-between'>
                        {paymentList.map((payment) => 
                            (<div className={payment.id == selectedPaymentMethod ? 'payment-method-logo-container selected-payment-icon':'payment-method-logo-container'} 
                                    key={payment.id}>
                                <img className='payment-method-logo' id={payment.id}  onClick={e => handlePaymentMethodChange(e.target.id)}  src={payment.logoUrl} alt='payment method logo' />
                            </div>)
                        )}
                    </div>
                    <PaymentInfo paymentInfo={paymentList.at(selectedPaymentMethod-1)} paymentHandler={paymentHandler} isPaymentHandler={isPaymentHandler}></PaymentInfo>
                </div>
            </div>
        </div>
       <div ref={ref}></div>
    </div>
  )
}

export default PaymentSection
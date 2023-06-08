import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import PromotionSection from '@/components/PromotionSection'
import PaymentSection from '@/components/PaymentSection'
import React, { useEffect } from 'react'
import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button, notification } from 'antd'
import useAuth from '@/hooks/auth'

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const {user, getUserRole} = useAuth();
  const [currentUser, setCurrentUser] = React.useState(user);
  const [isPaymentHandler, setIsPaymentHandler] = React.useState(false);
  const { updateUserToPremium } = useAuth();


  
  const paymentHandler = async (e) => {
    e.preventDefault();
    if(!stripe || !elements) {
      return;
    }
    setIsPaymentHandler(true);

    const reponse = await fetch('/.netlify/functions/create-payment-intent', 
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({amount: 199000})
    }).then((res) => {
      return res.json();
    });

    const {
      paymentIntent: {client_secret}
    } = reponse;

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user?.displayName
        }
      }  
    });

    if(result.error) {
      notification.error({
        message: 'Đã có lỗi xảy ra',
        description: result.error.message
      })

    }else{
      if(result.paymentIntent.status === 'succeeded') {
        notification.success({
          message: 'Thanh toán thành công',
          description: 'Payment success'
        })
        updateUserToPremium();
        setCurrentUser({
          ...currentUser,
          isPremium: true
        });
      }
    }
    setIsPaymentHandler(false);
  }

  useEffect(() => {
    getUserRole();
  },[])

  return (
    <>
      <Navbar />
      <PromotionSection />
      <PaymentSection paymentHandler={paymentHandler} isPaymentHandler={isPaymentHandler} user={currentUser}/>
      <Footer/>
    </>

  )
}

export default Payment
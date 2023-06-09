import PaymentSection from '@/components/PaymentSection'
import PromotionSection from '@/components/PromotionSection'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import useAuth from '@/hooks/auth'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { notification } from 'antd'
import React, { useEffect } from 'react'

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
        setCurrentUser({
          ...currentUser,
          isPremium: true
        });
        updateUserToPremium();
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
      <PaymentSection paymentHandler={paymentHandler} isPaymentHandler={isPaymentHandler} user={currentUser}/>
      <Footer/>
      <Footer />
    </>

  )
}

export default Payment
import { AuthProvider } from '@/hooks/auth'
import AppLayout from '@/layout/AppLayout'
import AuthStateChanged from '@/layout/AuthStateChanged'
import '@/scss/style.scss'
import { stripePromise } from '@/stripe/stripe'
import { Elements } from '@stripe/react-stripe-js'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppLayout>
        <AuthStateChanged>
          <Elements stripe={stripePromise}>
            <Component {...pageProps} />  
          </Elements>
        </AuthStateChanged>
      </AppLayout>
    </AuthProvider>
  )
}

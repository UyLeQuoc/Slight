import { AuthProvider } from '@/hooks/auth'
import AppLayout from '@/layout/AppLayout'
import AuthStateChanged from '@/layout/AuthStateChanged'
import '@/scss/style.scss'
import { stripePromise } from '@/stripe/stripe'
import { Elements } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  // get parater from _app.js, check if it is /admin or not
  // if it is /admin, then render admin layout
  // if not, render app layout
  const router = useRouter();
  const path = router.pathname;
  const isAdminRoute = path.startsWith("/admin");

  return (
    isAdminRoute
      ? 
        <Component {...pageProps} />
      :
      (
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
  )
}

import { AuthProvider } from '@/hooks/auth'
import AppLayout from '@/layout/AppLayout'
import AuthStateChanged from '@/layout/AuthStateChanged'
import '@/scss/style.scss'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppLayout>
        <AuthStateChanged>
          <Component {...pageProps} />  
        </AuthStateChanged>
      </AppLayout>
    </AuthProvider>
  )
}

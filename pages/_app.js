import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SplashScreen from '../components/SplashScreen'

export default function MyApp({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

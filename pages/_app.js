import '../styles/globals.scss'
import Layout from '../components/Layout'
import '../styles/navbar.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
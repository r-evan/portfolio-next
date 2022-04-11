import NavBar from './TopBar'
import Head from 'next/head'

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <link rel="icon" href="/images/nom-ico.ico" />
      </Head>
      <NavBar />

      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="next-page">{children}</div>

    </>
  )
}
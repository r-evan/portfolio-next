import NavBar from './TopBar'
import Head from 'next/head'

export default function Layout({ children }) {

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/images/nom-ico.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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
      <div className="page">{children}</div>

    </ div>
  )
}
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from 'components/header'

type LayoutProps = {
  children: React.ReactNode
  preview?: boolean
}

export default function Layout({ preview, children }: LayoutProps) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

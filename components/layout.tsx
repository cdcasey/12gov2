import { useState, useRef } from 'react'

import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import MenuButton from './menubutton'
import Menu from './menu'
import { useOnClickOutside } from 'lib/hooks'

type LayoutProps = {
  children: React.ReactNode
  preview?: boolean
}

export default function Layout({ preview, children }: LayoutProps) {
  const [open, setOpen] = useState(false)
  // TODO: Figure out the ref thing. As it is, it's not needed
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <div ref={node}>
      <Meta />
      <MenuButton open={open} setOpen={setOpen} className="m-4 relative" />
      <Menu open={open} />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

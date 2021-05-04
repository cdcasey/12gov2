import Link from 'next/link'
import { SITE_TITLE, SITE_DESCRIPTION } from 'lib/constants'

export default function Header() {
  return (
    <header className="mb-20 text-center text-otgopurple-dark relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:text-otgoorange-light duration-200 transition-colors bg-white shadow-otgo">
        <div className="lg:text-title text-6xl font-bold font-serif tracking-tight md:tracking-tighter leading-tight">
          <Link href="/">
            <a className="hover:none">{SITE_TITLE}</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="hover:none">{SITE_DESCRIPTION}</a>
          </Link>
        </div>
      </div>
      <img src="/images/12GO_YTHeader.png" />
    </header>
  )
}

import Link from 'next/link'
import { SITE_TITLE, SITE_DESCRIPTION } from 'lib/constants'

export default function Header() {
  return (
    <header className="mb-20 text-center text-otgopurple-dark hover:text-otgoorange-light duration-200 transition-colors">
      <div className="lg:text-title text-6xl font-bold font-serif tracking-tight md:tracking-tighter leading-tight mt-8 ">
        <Link href="/">
          <a className="hover:none">{SITE_TITLE}</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className="hover:none">{SITE_DESCRIPTION}</a>
        </Link>
      </div>
      <img src="/images/12GO_YTHeader.png" />
    </header>
  )
}

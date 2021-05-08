import Link from 'next/link'
import { SITE_TITLE, SITE_DESCRIPTION } from 'lib/constants'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="mb-20 text-center text-otgopurple-dark relative h-cover md:h-covermd lg:h-coverlg ">
      <Image src="/images/12GO_YTHeader.png" layout="fill" objectFit="cover" />
      {/* <header className="mb-20 text-center text-otgopurple-dark relative object-cover h-cover md:h-covermd lg:h-coverlg overflow-hidden"> */}
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

      {/* <Image src="/images/12GO_YTHeader.png" width={1200} height={675} layout="responsive" /> */}

      {/* <Image src="/images/12GO_YTHeader.png" width={2560} height={1440} layout="responsive" /> */}
    </header>
  )
}

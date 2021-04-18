import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 cursor-pointer text-otgopurple-dark hover:text-otgoorange-light duration-200 transition-colors">
      <Link href="/" className="   ">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            One to Grow On
          </h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            Understanding how food production impacts us and our world Next.js
          </h4>
        </div>
      </Link>
    </section>
  )
}

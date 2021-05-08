import Link from 'next/link'

export default function Menu({ open }) {
  const ulClass = 'flex flex-col justify-center font-bold'
  const subUlClass = `ml-2`
  const liClass = 'mr-6 mb-4'
  const aClass = 'menu-item text-otgopurple-dark hover:text-otgoorange-dark'
  const translate = open ? 'translate-x-0' : '-translate-x-full'
  return (
    <nav
      className={`h-screen transition-transform duration-300 ease-in-out absolute top-0 left-0 bg-otgowhite p-4 text-left transform ${translate} z-10`}
    >
      <ul className="flex flex-col justify-center font-bold">
        <li className={liClass}>
          <Link href="/">
            <a className={aClass}>Episodes</a>
          </Link>
          <ul className="ml-2">
            <li>
              <Link href="/">
                <a className={aClass}>Series and Minisodes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={aClass}>Transcripts</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className={liClass}>
          <Link href="/about">
            <a className={aClass}>About</a>
          </Link>
          <ul className="ml-2">
            <li>
              <Link href="/">
                <a className={aClass}>Press Kit</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={aClass}>Collaborations</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={aClass}>Contact</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className={liClass}>
          <Link href="/">
            <a className={aClass}>Support</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

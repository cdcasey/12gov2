import Link from 'next/link'

export default function Menu({ open }) {
  const liClass = 'mr-6 mb-4 font-bold'
  const aClass = 'menu-item text-otgopurple-dark hover:text-otgoorange-dark'
  const translate = open ? 'translate-x-0' : '-translate-x-full'
  return (
    <nav
      className={`h-screen transition-transform duration-300 ease-in-out absolute top-0 left-0 bg-otgowhite p-4 text-left transform ${translate} z-10`}
    >
      <ul className="flex flex-col justify-center">
        <li className={liClass}>
          <Link href="/">
            <a className={aClass}>Episodes</a>
          </Link>
        </li>
        <li className={liClass}>
          <Link href="/">
            <a className={aClass}>About</a>
          </Link>
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

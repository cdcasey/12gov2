export default function MenuButton({ open, setOpen, className }) {
  const buttonClass = `inline-block cursor-pointer ${className}`
  return (
    <div className={buttonClass}>
      <svg
        onClick={() => setOpen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-current text-otgopurple-dark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  )
}

import { useEffect } from 'react'

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // if (!ref.current || ref.current.contains(event.target)) {
      if (event.target.localName === 'a' && event.target.classList.contains('menu-item')) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

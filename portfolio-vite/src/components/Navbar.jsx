import { useEffect, useState } from 'react'
import s from './Navbar.module.css'

const links = ['about','skills','experience','projects','contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const fn = () => {
      let cur = ''
      document.querySelectorAll('section[id]').forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 140) cur = sec.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={s.nav}>
      <div className={s.logo}>AM<span className={s.dot}>.</span></div>
      <ul className={s.links}>
        {links.map(l => (
          <li key={l}><a href={`#${l}`} className={`${s.link} ${active === l ? s.active : ''}`}>{l}</a></li>
        ))}
      </ul>
    </nav>
  )
}

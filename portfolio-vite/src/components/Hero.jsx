import { useEffect, useState } from 'react'
import { data } from '../data'
import s from './Hero.module.css'

export default function Hero() {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const words = data.typewriterWords
    const word = words[wi]
    let t
    if (!del) {
      if (ci < word.length) { t = setTimeout(() => { setText(word.slice(0, ci + 1)); setCi(c => c + 1) }, 90) }
      else { t = setTimeout(() => setDel(true), 1600) }
    } else {
      if (ci > 0) { t = setTimeout(() => { setText(word.slice(0, ci - 1)); setCi(c => c - 1) }, 50) }
      else { setDel(false); setWi(w => (w + 1) % words.length) }
    }
    return () => clearTimeout(t)
  }, [ci, del, wi])

  return (
    <section id="hero" className={s.hero}>
      <div className={s.eyebrow}>
        <div className={s.eyebrowLine} />
        <span className={s.eyebrowText}>Open to opportunities · Pune, India</span>
      </div>
      <h1 className={s.name}>Avinash</h1>
      <h1 className={s.nameOutline}>Magar.</h1>
      <p className={s.tagline}>
        <strong>Mobile &amp; Full Stack Developer</strong> who builds<br />
        <span className={s.tw}>{text}</span><br />
        that feel fast, look great, and actually ship.
      </p>
      <div className={s.cta}>
        <a href="#projects" className="btn-primary">↓ See my work</a>
        <a href={`mailto:${data.email}`} className="btn-ghost">✉ Get in touch</a>
      </div>
      <div className={s.scroll}>
        <span className={s.scrollText}>Scroll</span>
        <div className={s.scrollBar} />
      </div>
    </section>
  )
}

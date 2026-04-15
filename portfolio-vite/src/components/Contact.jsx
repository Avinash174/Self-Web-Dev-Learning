import { data } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './Contact.module.css'

const items = [
  { icon:'✉', label:'Email', val:'avinashmagar15@gmail.com', href:`mailto:${data.email}` },
  { icon:'💼', label:'LinkedIn', val:'avinash-magar-1ba853168', href:data.linkedin },
  { icon:'🐙', label:'GitHub', val:'View my repositories', href:data.github },
  { icon:'📞', label:'Phone', val:'+91 70587 00755', href:`tel:${data.phone}` },
]

export default function Contact() {
  const lRef = useReveal('reveal-left', 0)
  const rRef = useReveal('reveal-right', 150)
  return (
    <section id="contact" className={`section-wrapper bordered ${s.contact}`}>
      <div ref={lRef} className="reveal-left">
        <div className="sec-num">05</div>
        <h2 className={s.headline}>Let's build something <em className={s.em}>great</em> together.</h2>
        <p className={s.sub}>Open to full-time roles, freelance, and interesting collaborations. My inbox is always open — I respond fast.</p>
      </div>
      <div ref={rRef} className={`reveal-right ${s.links}`}>
        {items.map((item, i) => (
          <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={s.row}>
            <span className={s.icon}>{item.icon}</span>
            <div className={s.rowText}>
              <span className={s.label}>{item.label}</span>
              <span className={s.val}>{item.val}</span>
            </div>
            <span className={s.arrow}>→</span>
          </a>
        ))}
      </div>
    </section>
  )
}

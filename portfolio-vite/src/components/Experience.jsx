import { useState } from 'react'
import { data } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './Experience.module.css'

export default function Experience() {
  const [active, setActive] = useState(0)
  const hRef = useReveal('reveal', 0)
  const lRef = useReveal('reveal', 150)
  const exp = data.experience[active]
  return (
    <section id="experience" className="section-wrapper bordered">
      <div ref={hRef} className="reveal">
        <div className="sec-header">
          <div className="sec-num">03</div>
          <div className="sec-label">Work History</div>
          <h2 className="sec-title">Experience</h2>
          <div className="sec-rule" />
        </div>
      </div>
      <div ref={lRef} className={`reveal ${s.layout}`}>
        <div className={s.nav}>
          {data.experience.map((e, i) => (
            <button key={i} className={`${s.tab} ${active === i ? s.tabActive : ''}`} onClick={() => setActive(i)}>
              <div className={s.tabCompany}>{e.company}</div>
              <div className={s.tabRole}>{e.role}</div>
            </button>
          ))}
        </div>
        <div className={s.panel} key={active}>
          <div className={s.panelRole}>{exp.role}</div>
          <div className={s.meta}>
            <span className={`${s.badge} ${s.badgeG}`}>{exp.period}</span>
            <span className={`${s.badge} ${s.badgeA}`}>📍 {exp.location}</span>
          </div>
          <ul className={s.points}>
            {exp.points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

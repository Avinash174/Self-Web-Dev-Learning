import { data } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './Skills.module.css'

export default function Skills() {
  const hRef = useReveal('reveal', 0)
  const gRef = useReveal('reveal', 150)
  return (
    <section id="skills" className="section-wrapper alt-bg">
      <div ref={hRef} className="reveal">
        <div className="sec-header">
          <div className="sec-num">02</div>
          <div className="sec-label">Expertise</div>
          <h2 className="sec-title">Skills &amp;<br />Technologies</h2>
          <div className="sec-rule" />
        </div>
      </div>
      <div ref={gRef} className={`reveal ${s.grid}`}>
        {data.skills.map((cat, i) => (
          <div key={i} className={s.box}>
            <div className={s.boxHdr}>
              <div className={s.icon}>{cat.icon}</div>
              <div className={s.boxTitle}>{cat.title}</div>
            </div>
            <div className={s.pills}>
              {cat.pills.map((p, j) => <span key={j} className={s.pill}>{p}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

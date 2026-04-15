import { useEffect, useRef, useState } from 'react'
import { data } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './About.module.css'

function CountUp({ target, suffix }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)
  useEffect(() => {
    if (typeof target !== 'number') return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        let n = 0; const inc = target / 40
        const iv = setInterval(() => { n += inc; if (n >= target) { n = target; clearInterval(iv) } setVal(Math.floor(n)) }, 40)
      }
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{typeof target === 'number' ? val + suffix : target + suffix}</span>
}

export default function About() {
  const leftRef = useReveal('reveal-left', 0)
  const rightRef = useReveal('reveal-right', 150)
  return (
    <section id="about" className={`section-wrapper ${s.about}`}>
      <div ref={leftRef} className="reveal-left">
        <div className="sec-header">
          <div className="sec-num">01</div>
          <div className="sec-label">About Me</div>
          <h2 className="sec-title">Building things<br />that matter</h2>
          <div className="sec-rule" />
        </div>
        <div className={s.body}>{data.about.map((p, i) => <p key={i}>{p}</p>)}</div>
        <div className={s.stats}>
          {data.stats.map((st, i) => (
            <div key={i} className={s.statItem}>
              <span className={s.statNum}><CountUp target={st.num} suffix={st.suffix} /></span>
              <span className={s.statLabel}>{st.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div ref={rightRef} className="reveal-right">
        <div className={s.eduStack}>
          {data.education.map((e, i) => (
            <div key={i} className={s.eduItem} style={{ borderLeftColor: e.color === 'amber' ? 'var(--amber)' : 'var(--green)' }}>
              <div className={s.eduDeg}>{e.degree}</div>
              <div className={s.eduSchool}>{e.school}</div>
              <div className={s.eduMeta}>{e.period}</div>
              {e.grade && <span className={s.eduGrade}>{e.grade}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

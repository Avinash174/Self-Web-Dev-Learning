import { data } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './Projects.module.css'

export default function Projects() {
  const hRef = useReveal('reveal', 0)
  const gRef = useReveal('reveal', 150)
  return (
    <section id="projects" className="section-wrapper alt-bg">
      <div ref={hRef} className="reveal">
        <div className="sec-header">
          <div className="sec-num">04</div>
          <div className="sec-label">Selected Work</div>
          <h2 className="sec-title">Projects</h2>
          <div className="sec-rule" />
        </div>
      </div>
      <div ref={gRef} className={`reveal ${s.grid}`}>
        {data.projects.map((proj, i) => (
          <div key={i} className={`${s.card} ${proj.playStore ? s.cardLive : ''}`}>
            <div className={s.cardTop}>
              <div className={s.num}>{proj.num}</div>
              {proj.playStore && (
                <span className={s.liveBadge}>
                  <span className={s.liveDot} />
                  Live on Play Store
                </span>
              )}
            </div>
            <div className={s.name}>{proj.name}</div>
            <p className={s.desc}>{proj.desc}</p>
            <div className={s.tech}>{proj.tech.map((t, j) => <span key={j} className={s.chip}>{t}</span>)}</div>
            {proj.playStore ? (
              <a href={proj.link} target="_blank" rel="noreferrer" className={s.playBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83 1-.99 1.5-.5l15 8.5-15 8.5c-.5.49-1.5.33-1.5-.5z"/>
                </svg>
                View on Google Play
              </a>
            ) : (
              <a href={proj.link} className={s.link}>View Project →</a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

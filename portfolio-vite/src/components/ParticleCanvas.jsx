import { useEffect, useRef } from 'react'

const COLS = ['rgba(74,222,128,','rgba(134,239,172,','rgba(251,191,36,','rgba(252,211,77,']

class Particle {
  constructor(W, H) { this.W = W; this.H = H; this.reset() }
  reset() {
    this.x = Math.random() * this.W; this.y = Math.random() * this.H
    this.s = Math.random() * 1.4 + 0.3
    this.vx = (Math.random() - 0.5) * 0.35; this.vy = (Math.random() - 0.5) * 0.35
    this.c = COLS[Math.floor(Math.random() * COLS.length)]
    this.a = Math.random() * 0.5 + 0.1; this.life = 0; this.ml = Math.random() * 200 + 100
  }
  update() {
    this.x += this.vx; this.y += this.vy; this.life++
    if (this.life > this.ml || this.x < 0 || this.x > this.W || this.y < 0 || this.y > this.H) this.reset()
  }
  draw(ctx) {
    const f = this.life < 30 ? this.life / 30 : this.life > this.ml - 30 ? (this.ml - this.life) / 30 : 1
    ctx.beginPath(); ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2)
    ctx.fillStyle = this.c + this.a * f + ')'; ctx.fill()
  }
}

export default function ParticleCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current; const ctx = canvas.getContext('2d')
    let W, H, particles = [], raf
    const resize = () => {
      W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight
      particles = Array.from({ length: 130 }, () => new Particle(W, H))
    }
    resize(); window.addEventListener('resize', resize)
    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(74,222,128,${0.04 * (1 - d / 90)})`; ctx.stroke()
          }
        }
        particles[i].update(); particles[i].draw(ctx)
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} style={{ position:'fixed', inset:0, zIndex:0, opacity:0.55, pointerEvents:'none' }} />
}

import s from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.logo}>AM<span className={s.dot}>.</span></div>
      <span>Avinash Sanjay Magar — Pune, India</span>
      <span>© {new Date().getFullYear()}. All rights reserved.</span>
    </footer>
  )
}

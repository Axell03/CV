'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#about',          label: 'Sobre mí' },
  { href: '#specialties',    label: 'Especialidades' },
  { href: '#projects',       label: 'Proyectos' },
  { href: '#experience',     label: 'Experiencia' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact',        label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[60px] py-[22px] border-b border-white/[0.04] transition-all duration-300"
      style={{
        backdropFilter: 'blur(14px)',
        background: scrolled ? 'rgba(7,7,12,0.95)' : 'rgba(7,7,12,0.65)',
      }}
    >
      <a href="#" style={{ fontFamily: 'var(--font-mono)', color: '#7b6ef6', fontSize: 13, letterSpacing: '2px' }}>
        AB.dev
      </a>
      <div className="hidden md:flex gap-7">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(244,240,232,0.5)', transition: 'color 0.25s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f4f0e8')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,240,232,0.5)')}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

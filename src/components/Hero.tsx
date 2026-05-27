'use client'
import { motion } from 'framer-motion'
import { data } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-[60px] overflow-hidden" style={{ paddingTop: 80 }}>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" style={{ maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)' }} />

      {/* Orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 550, height: 550, background: 'rgba(123,110,246,0.09)', top: -140, right: -120, filter: 'blur(90px)' }}
        animate={{ x: [-0, -50], y: [0, 50] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 420, height: 420, background: 'rgba(29,184,122,0.07)', bottom: -120, left: -80, filter: 'blur(90px)' }}
        animate={{ x: [0, 40], y: [0, -40] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px]">
        <motion.p {...fadeUp(0.1)} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase', color: '#7b6ef6', marginBottom: 26 }}>
          Full Stack · Cloud Journey · {data.location} · Disponible para remoto
        </motion.p>

        <motion.h1 {...fadeUp(0.3)} className="display-title" style={{ fontSize: 'clamp(64px, 9vw, 118px)', color: '#f4f0e8', marginBottom: 14 }}>
          {data.name.split(' ')[0]}{' '}
          <em style={{ color: '#7b6ef6', fontStyle: 'italic' }}>{data.name.split(' ')[1]}</em>
        </motion.h1>

        <motion.p {...fadeUp(0.5)} className="display-title" style={{ fontSize: 'clamp(20px, 3vw, 40px)', color: 'rgba(217,212,255,0.72)', marginBottom: 28, whiteSpace: 'pre-line' }}>
          {data.tagline}
        </motion.p>

        <motion.p {...fadeUp(0.65)} style={{ maxWidth: 620, color: 'rgba(244,240,232,0.5)', lineHeight: 1.85, fontSize: 16, marginBottom: 40 }}>
          {data.description}
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex gap-4 flex-wrap">
          <a href="#projects" style={{ background: '#7b6ef6', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '1px', padding: '15px 28px', borderRadius: 8, transition: 'opacity 0.2s, transform 0.2s', display: 'inline-block' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.82'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
            Ver proyectos →
          </a>
          <a href="#contact" style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(244,240,232,0.5)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '1px', padding: '15px 28px', borderRadius: 8, transition: 'border-color 0.2s, color 0.2s, transform 0.2s', display: 'inline-block' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)'; (e.currentTarget as HTMLElement).style.color = '#f4f0e8'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.color = 'rgba(244,240,232,0.5)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
            Escribirme
          </a>
        </motion.div>

        {/* Mini stats */}
        <motion.div {...fadeUp(1.0)} className="flex gap-4 flex-wrap mt-11">
          {data.stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, borderColor: 'rgba(123,110,246,0.3)' }}
              style={{ padding: '18px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, minWidth: 150, backdropFilter: 'blur(10px)' }}
            >
              <strong style={{ display: 'block', color: '#7b6ef6', fontSize: 22, marginBottom: 6, fontFamily: 'var(--font-display)' }}>{s.value}</strong>
              <span style={{ color: 'rgba(244,240,232,0.5)', fontSize: 12, lineHeight: 1.5, fontFamily: 'var(--font-mono)' }}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div {...fadeUp(1.2)} className="absolute bottom-10 left-[60px] flex items-center gap-3" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '3px', color: 'rgba(244,240,232,0.12)', textTransform: 'uppercase' }}>
        <div className="relative overflow-hidden" style={{ width: 40, height: 1, background: 'rgba(244,240,232,0.1)' }}>
          <motion.div
            style={{ position: 'absolute', inset: 0, background: '#7b6ef6' }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        scroll
      </motion.div>
    </section>
  )
}

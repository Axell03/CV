'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { data } from '@/lib/data'

function OpticdVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#050510,#0d0d22,#080818)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%,rgba(100,80,255,.18) 0%,transparent 55%),radial-gradient(circle at 70% 60%,rgba(0,200,130,.12) 0%,transparent 55%)' }} />
      <div className="display-title" style={{ fontSize: 36, color: '#fff', letterSpacing: -1, position: 'relative', zIndex: 1 }}>
        Optic<em style={{ color: '#7b6ef6', fontStyle: 'italic' }}>-d</em>
      </div>
    </div>
  )
}

function HdcoVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#060610,#0a0a1e,#060614)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 65% 30%,rgba(29,184,122,.15) 0%,transparent 55%),radial-gradient(circle at 30% 70%,rgba(100,80,255,.1) 0%,transparent 55%)' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="display-title" style={{ fontSize: 36, color: '#1db87a', letterSpacing: 2 }}>HDCO</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 3, color: 'rgba(29,184,122,0.55)', textTransform: 'uppercase', marginTop: 4 }}>Group · Sistemas Internos</div>
      </div>
    </div>
  )
}

function MovirVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#0f0800,#1a1000,#0f0800)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 40% 40%,rgba(249,115,22,.14) 0%,transparent 55%),radial-gradient(circle at 70% 65%,rgba(251,191,36,.08) 0%,transparent 55%)' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="display-title" style={{ fontSize: 38, color: '#fff', letterSpacing: -1 }}>
          MOVI<em style={{ color: '#f97316', fontStyle: 'normal' }}>-R</em>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 3, color: 'rgba(249,115,22,0.5)', textTransform: 'uppercase', marginTop: 4 }}>Tech & Solutions</div>
      </div>
    </div>
  )
}

function MoviclubVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#00080f,#00101a,#00080f)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 35% 45%,rgba(14,165,233,.15) 0%,transparent 55%),radial-gradient(circle at 70% 60%,rgba(56,189,248,.08) 0%,transparent 55%)' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="display-title" style={{ fontSize: 36, color: '#fff', letterSpacing: -1 }}>
          Movi<em style={{ color: '#0ea5e9', fontStyle: 'normal' }}>Club</em>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 3, color: 'rgba(14,165,233,0.5)', textTransform: 'uppercase', marginTop: 4 }}>Transport Platform</div>
      </div>
    </div>
  )
}

function SoonVisual({ icon }: { icon: string }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#141420', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 'calc(100% - 32px)', height: 'calc(100% - 32px)', border: '2px dashed rgba(255,255,255,0.06)', borderRadius: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <span style={{ fontSize: 26 }}>{icon}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2, color: 'rgba(244,240,232,0.12)', textTransform: 'uppercase' }}>Próximamente</span>
      </div>
    </div>
  )
}

const visuals: Record<string, React.ReactNode> = {
  'Optic-d':       <OpticdVisual />,
  'HDCO Group':    <HdcoVisual />,
  'Movi-R':        <MovirVisual />,
  'Movi-Club':     <MoviclubVisual />,
  'Proyecto Cloud': <SoonVisual icon="△" />,
}

export default function Projects() {
  return (
    <section id="projects" className="px-[60px] py-[120px] max-w-[1160px] mx-auto border-t border-white/[0.07]">
      <FadeIn>
        <div className="label">Proyectos</div>
        <h2 className="display-title mb-14" style={{ fontSize: 'clamp(36px,4.5vw,58px)', color: '#f4f0e8' }}>
          Lo que he construido
        </h2>
      </FadeIn>

      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))' }}>
        {data.projects.map((p, i) => {
          const Card = (
            <motion.div
              whileHover={{ y: -6, borderColor: 'rgba(123,110,246,0.32)' }}
              style={{ background: '#101018', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, overflow: 'hidden', height: '100%', position: 'relative' }}
            >
              {/* Arrow */}
              {p.url && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 2, y: -2 }}
                  style={{ position: 'absolute', top: 18, right: 18, zIndex: 10, width: 32, height: 32, borderRadius: '50%', background: 'rgba(123,110,246,0.14)', border: '1px solid rgba(123,110,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7b6ef6', fontSize: 14 }}
                >
                  ↗
                </motion.div>
              )}

              {/* Visual */}
              <div style={{ height: 215, position: 'relative', overflow: 'hidden' }}>
                {visuals[p.name]}
              </div>

              {/* Body */}
              <div style={{ padding: 26 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10, display: 'inline-flex', alignItems: 'center', gap: 6, color: p.status === 'live' ? '#1db87a' : 'rgba(244,240,232,0.45)' }}>
                  {p.status === 'live' && (
                    <motion.span
                      style={{ display: 'block', width: 6, height: 6, borderRadius: '50%', background: '#1db87a' }}
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  {p.statusLabel}
                </div>
                <div className="display-title" style={{ fontSize: 26, marginBottom: 10, color: '#f4f0e8', letterSpacing: -0.5 }}>{p.name}</div>
                <p style={{ fontSize: 14, color: 'rgba(244,240,232,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '4px 9px', borderRadius: 5, background: 'rgba(123,110,246,0.07)', color: 'rgba(123,110,246,0.8)', border: '1px solid rgba(123,110,246,0.13)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )

          return (
            <FadeIn key={i} delay={i * 0.07}>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', height: '100%' }}>
                  {Card}
                </a>
              ) : (
                <div style={{ height: '100%' }}>{Card}</div>
              )}
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
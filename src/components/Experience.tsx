'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { data } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="px-[60px] py-[120px] max-w-[1160px] mx-auto border-t border-white/[0.07]">
      <FadeIn>
        <div className="label">Trayectoria</div>
        <h2 className="display-title mb-14" style={{ fontSize: 'clamp(36px,4.5vw,58px)', color: '#f4f0e8' }}>
          Experiencia
        </h2>
      </FadeIn>

      <div>
        {data.experience.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className="grid gap-10 py-10"
              style={{
                gridTemplateColumns: '180px 1fr',
                borderBottom: i < data.experience.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              {/* Date */}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(244,240,232,0.45)', paddingTop: 4 }}>
                {exp.period}
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.3, color: '#f4f0e8' }}>{exp.company}</span>
                  {exp.current && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 4, background: 'rgba(123,110,246,0.08)', border: '1px solid rgba(123,110,246,0.18)', color: '#7b6ef6' }}>
                      Actual
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 14, color: '#7b6ef6', marginBottom: 14 }}>{exp.role}</p>
                <p style={{ fontSize: 15, color: 'rgba(244,240,232,0.5)', lineHeight: 1.85, marginBottom: 16 }}>{exp.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(244,240,232,0.45)', border: '1px solid rgba(255,255,255,0.07)', padding: '3px 8px', borderRadius: 4 }}>{t}</span>
                  ))}
                </div>

                {exp.impact.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {exp.impact.map((item, j) => (
                      <motion.div key={j} whileHover={{ borderColor: 'rgba(123,110,246,0.2)' }}
                        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 20 }}>
                        <strong style={{ display: 'block', color: '#7b6ef6', fontSize: 20, marginBottom: 6, fontFamily: 'var(--font-display)' }}>{item.value}</strong>
                        <span style={{ color: 'rgba(244,240,232,0.45)', fontSize: 13, lineHeight: 1.6, fontFamily: 'var(--font-mono)' }}>{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

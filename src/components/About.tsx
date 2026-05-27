'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { data } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="px-[60px] py-[120px] max-w-[1160px] mx-auto border-t border-white/[0.07]">
      <FadeIn>
        <div className="label">Sobre mí</div>
        <h2 className="display-title mb-14" style={{ fontSize: 'clamp(36px,4.5vw,58px)', color: '#f4f0e8' }}>
          Código con criterio,<br />
          <span style={{ color: 'rgba(244,240,232,0.4)', fontStyle: 'italic' }}>siempre aprendiendo</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-5">
            {data.about.map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: 'rgba(244,240,232,0.5)', lineHeight: 1.9 }}
                dangerouslySetInnerHTML={{ __html: para.replace(/<strong>/g, '<strong style="color:#f4f0e8">') }} />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {data.aboutCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, borderColor: 'rgba(123,110,246,0.28)' }}
                style={{ background: '#101018', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 26, position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#7b6ef6,transparent)' }} />
                <div className="display-title" style={{ fontSize: 42, color: '#7b6ef6', lineHeight: 1, marginBottom: 8 }}>{card.value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(244,240,232,0.45)', letterSpacing: '0.5px' }}>{card.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

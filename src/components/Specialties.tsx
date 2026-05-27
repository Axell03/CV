'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { data } from '@/lib/data'

export default function Specialties() {
  return (
    <section id="specialties" className="px-[60px] py-[120px] max-w-[1160px] mx-auto border-t border-white/[0.07]">
      <FadeIn>
        <div className="label">Especialidades</div>
        <h2 className="display-title mb-14" style={{ fontSize: 'clamp(36px,4.5vw,58px)', color: '#f4f0e8' }}>
          En qué soy bueno
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.specialties.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -5, borderColor: 'rgba(123,110,246,0.24)' }}
              style={{ background: '#101018', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 36, height: '100%', transition: 'border-color 0.3s' }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(123,110,246,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 20 }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 14, letterSpacing: '-0.3px', color: '#f4f0e8' }}>{s.title}</h3>
              <p style={{ color: 'rgba(244,240,232,0.5)', lineHeight: 1.8, fontSize: 14 }}>{s.body}</p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

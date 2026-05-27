'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { data } from '@/lib/data'

export default function Certifications() {
  return (
    <section id="certifications" className="px-[60px] py-[120px] max-w-[1160px] mx-auto border-t border-white/[0.07]">
      <FadeIn>
        <div className="label">Certificaciones</div>
        <h2 className="display-title mb-14" style={{ fontSize: 'clamp(36px,4.5vw,58px)', color: '#f4f0e8' }}>
          Ruta de aprendizaje
        </h2>
      </FadeIn>

      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))' }}>
        {data.certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(123,110,246,0.28)' }}
              style={{ background: '#101018', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 13, padding: 24, display: 'flex', alignItems: 'flex-start', gap: 16 }}
            >
              <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: 9, background: 'rgba(123,110,246,0.08)', border: '1px solid rgba(123,110,246,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 9, color: '#7b6ef6', textAlign: 'center', lineHeight: 1.4, whiteSpace: 'pre' }}>
                {cert.code}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, lineHeight: 1.35, color: '#f4f0e8' }}>{cert.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(244,240,232,0.45)' }}>{cert.issuer}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 7, display: 'inline-flex', alignItems: 'center', gap: 5, color: cert.status === 'done' ? '#1db87a' : 'rgba(123,110,246,0.7)' }}>
                  <motion.span
                    style={{ width: 5, height: 5, borderRadius: '50%', background: cert.status === 'done' ? '#1db87a' : 'rgba(123,110,246,0.7)', display: 'block' }}
                    animate={cert.status === 'wip' ? { opacity: [1, 0.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {cert.statusLabel}
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

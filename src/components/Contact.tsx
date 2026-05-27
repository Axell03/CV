'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { data } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="px-[60px] py-[120px] max-w-[1160px] mx-auto border-t border-white/[0.07] text-center" style={{ paddingBottom: 90 }}>
      <FadeIn>
        <div className="label justify-center">Contacto</div>
        <h2 className="display-title mb-5" style={{ fontSize: 'clamp(36px,4.5vw,58px)', color: '#f4f0e8' }}>
          ¿Trabajamos juntos?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(244,240,232,0.5)', lineHeight: 1.85, maxWidth: 520, margin: '0 auto 44px' }}>
          Estoy abierto a proyectos, roles full-time (remoto o local) y oportunidades en cloud. Si tienes algo interesante, hablemos.
        </p>

        <motion.a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ opacity: 0.85, y: -3 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#7b6ef6', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '1px', padding: '16px 36px', borderRadius: 9, marginBottom: 40 }}
        >
          Ver mi GitHub →
        </motion.a>

        <div className="flex justify-center gap-3 flex-wrap">
          {[
            { label: 'GitHub',   href: data.github },
            { label: 'LinkedIn', href: `https://${data.linkedin}` },
            { label: 'Email',    href: `mailto:${data.email}` },
          ].map(s => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.18)', color: '#f4f0e8' }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '1px', color: 'rgba(244,240,232,0.45)', border: '1px solid rgba(255,255,255,0.07)', padding: '9px 16px', borderRadius: 7, transition: 'color 0.2s' }}
            >
              {s.label}
            </motion.a>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
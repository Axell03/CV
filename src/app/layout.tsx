import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Axell Baez — Full Stack Developer',
  description: 'Full Stack Developer especializado en aplicaciones empresariales, infraestructura web y Cloud Engineering. Basado en Santo Domingo, RD.',
  openGraph: {
    title: 'Axell Baez — Full Stack Developer',
    description: 'Full Stack Developer · Cloud Journey · Santo Domingo, RD',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="grain">{children}</body>
    </html>
  )
}

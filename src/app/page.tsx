import Cursor        from '@/components/Cursor'
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import About         from '@/components/About'
import Specialties   from '@/components/Specialties'
import Projects      from '@/components/Projects'
import Experience    from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

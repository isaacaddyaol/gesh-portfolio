import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCVButton from '@/components/FloatingCVButton'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingCVButton />
    </main>
  )
}
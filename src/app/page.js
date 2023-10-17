import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Index from '@/pages/Index'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import About from '@/pages/About'

export default function Home() {
  return (
    <>
    <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Index />
        <About />
        <Projects />
        <Contact />
      </main>
    <Footer />
    </>
  )
}

import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}

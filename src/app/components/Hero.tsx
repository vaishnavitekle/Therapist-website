export default function Hero() {
  return (
    <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="text-center bg-black bg-opacity-60 p-10 rounded">
        <h1 className="text-4xl font-bold mb-4">Dr. Serena Blake, PsyD</h1>
        <p className="mb-6">Compassionate Therapy for Individuals & Couples</p>
        <a href="#contact" className="bg-pink-600 px-6 py-3 rounded text-white hover:bg-pink-700">
          Book a Free Consult
        </a>
      </div>
    </section>
  )
}

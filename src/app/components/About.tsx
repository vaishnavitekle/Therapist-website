export default function About() {
  return (
    <section className="py-16 px-6 md:px-24 bg-gray-100" id="about">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img src="/serena.jpg" alt="Dr. Serena Blake" className="w-64 rounded-full shadow-lg" />
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Dr. Serena Blake</h2>
          <p className="text-lg">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) with 15+ years of experience. She offers individual and couples counseling to support emotional wellness, communication, and healing.
          </p>
        </div>
      </div>
    </section>
  )
}

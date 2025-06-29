const services = [
  {
    title: 'Anxiety & Stress Management',
    desc: 'Learn healthy coping strategies and mindfulness techniques.',
  },
  {
    title: 'Relationship Counseling',
    desc: 'Improve communication and rebuild trust in your relationship.',
  },
  {
    title: 'Trauma Recovery',
    desc: 'Heal from past trauma in a safe and supportive environment.',
  },
]

export default function Services() {
  return (
    <section className="py-16 px-6 md:px-24" id="services">
      <h2 className="text-3xl font-semibold mb-10 text-center">Services Offered</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

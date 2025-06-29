const faqs = [
  {
    q: 'Do you accept insurance?',
    a: 'No, but a superbill is provided for self-submission.',
  },
  {
    q: 'Are online sessions available?',
    a: 'Yes—all virtual sessions are conducted via Zoom.',
  },
  {
    q: 'What is your cancellation policy?',
    a: '24-hour notice is required to avoid a fee.',
  },
]

export default function FAQ() {
  return (
    <section className="py-16 px-6 md:px-24" id="faq">
      <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3 className="font-bold">{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import './globals.css'

export const metadata = {
  title: 'Dr. Serena Blake - Psychologist',
  description: 'Therapist website built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}

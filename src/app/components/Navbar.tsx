export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-pink-600">Dr. Serena Blake</h1>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>
      </div>
    </nav>
  )
}

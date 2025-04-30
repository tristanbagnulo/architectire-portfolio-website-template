import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-8 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Architecture Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-500 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 
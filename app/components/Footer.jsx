import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Architecture Portfolio</h3>
            <p className="text-gray-600">
              Showcasing beautiful architectural projects and designs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">Email: contact@example.com</p>
            <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Address: 123 Design Street, City</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Architecture Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 
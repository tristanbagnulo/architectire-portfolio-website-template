export const metadata = {
  title: 'Contact | Architecture Portfolio',
  description: 'Get in touch with us about your architectural project',
}

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Get in touch to discuss your next architectural project
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors inline-block"
              >
                Send Message
              </button>
              <p className="text-sm text-gray-500 mt-2">
                This is a demo form and doesn't actually send messages. In a real implementation, you would connect this to a form handling service.
              </p>
            </div>
          </form>
        </div>
        
        <div className="lg:w-1/2">
          <div className="bg-gray-50 p-8 rounded-lg h-full">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-700">contact@example.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-700">(123) 456-7890</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-gray-700">
                  123 Design Street<br />
                  Suite 456<br />
                  City, State 12345
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
              <p className="text-gray-700 mb-1">Monday - Friday: 9am - 5pm</p>
              <p className="text-gray-700">Weekends: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
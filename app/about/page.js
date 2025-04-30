import Image from 'next/image'

export const metadata = {
  title: 'About | Architecture Portfolio',
  description: 'Learn about our architecture portfolio and design philosophy',
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About</h1>
        <p className="text-gray-600">
          Learn about our design philosophy and approach to architecture
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Studio</h2>
          <p className="text-gray-700 mb-4">
            Welcome to our architecture portfolio. We are a design studio focused on creating
            beautiful, functional, and sustainable architectural solutions. With years of
            experience in residential, commercial, and public projects, we bring a unique
            perspective to every design challenge.
          </p>
          <p className="text-gray-700 mb-4">
            Our approach combines innovative design thinking with practical considerations,
            ensuring that each project not only looks stunning but also meets the functional
            needs of its users and respects the environment.
          </p>
          <p className="text-gray-700">
            We believe that great architecture should enhance the lives of those who
            experience it, whether they live in it, work in it, or simply pass by it.
          </p>
        </div>

        <div className="md:w-1/2 relative h-[400px]">
          <Image
            src="/about-placeholder.jpg"
            alt="Our Architecture Studio"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Client-Centered Design</h3>
            <p className="text-gray-700">
              We start each project by deeply understanding our clients' needs, preferences,
              and vision, ensuring the final result exceeds expectations.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Sustainable Solutions</h3>
            <p className="text-gray-700">
              Environmental responsibility is at the core of our practice, influencing
              material choices, energy efficiency, and long-term impact.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Innovative Thinking</h3>
            <p className="text-gray-700">
              We embrace new technologies and design methodologies to create
              forward-thinking spaces that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
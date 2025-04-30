import Image from "next/image";
import Link from "next/link";
import { client } from "../sanity/lib/client";
import ProjectCard from "./components/ProjectCard";

async function getFeaturedProjects() {
  return await client.fetch(
    `*[_type == "project" && featured == true] | order(publishedAt desc) [0...6] {
      _id,
      title,
      slug,
      mainImage,
      description,
      location,
      year,
      featured
    }`
  );
}

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Modern Architecture & Design
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Showcasing stunning architectural projects and innovative designs
              that transform spaces and inspire living.
            </p>
            <Link
              href="/projects"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors inline-block"
            >
              View All Projects
            </Link>
          </div>
          <div className="lg:w-1/2 relative h-[400px] w-full">
            <Image
              src="/hero-placeholder.jpg"
              alt="Architecture Portfolio Hero"
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-black transition-colors"
          >
            View all →
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No projects yet</h3>
            <p className="text-gray-600">
              Featured projects will appear here once they are added in the Sanity Studio.
            </p>
            <Link 
              href="/studio" 
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Go to Studio →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

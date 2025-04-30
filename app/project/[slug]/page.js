import Image from "next/image";
import { notFound } from "next/navigation";
import { client, urlFor } from "../../../sanity/lib/client";

async function getProject(slug) {
  return await client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      images,
      description,
      client,
      location,
      year,
      categories[]->{ title },
      publishedAt
    }`,
    { slug }
  );
}

export async function generateMetadata({ params }) {
  const project = await getProject(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  
  return {
    title: `${project.title} | Architecture Portfolio`,
    description: project.description || `${project.title} - Architectural project`,
  };
}

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
          {project.location && <span>{project.location}</span>}
          {project.year && <span>• {project.year}</span>}
          {project.client && <span>• Client: {project.client}</span>}
        </div>
      </div>

      {/* Main Image */}
      {project.mainImage && (
        <div className="relative w-full h-[500px] mb-8">
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      )}

      {/* Project Description */}
      {project.description && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About this project</h2>
          <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
        </div>
      )}

      {/* Project Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full h-[300px]">
                <Image
                  src={urlFor(image).url()}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {project.categories && project.categories.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span
                key={category.title}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {category.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 
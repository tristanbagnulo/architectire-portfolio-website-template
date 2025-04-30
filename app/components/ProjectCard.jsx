import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../sanity/lib/client'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/project/${project.slug.current}`}>
      <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64 w-full">
          {project.mainImage && (
            <Image
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {project.location}
            {project.year && ` | ${project.year}`}
          </p>
          {project.description && (
            <p className="text-sm line-clamp-2">{project.description}</p>
          )}
        </div>
      </div>
    </Link>
  )
} 
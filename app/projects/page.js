import { client } from "../../sanity/lib/client";
import ProjectCard from "../components/ProjectCard";

async function getAllProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      description,
      location,
      year,
      categories[]->{ title }
    }
  `);
}

export const metadata = {
  title: "All Projects | Architecture Portfolio",
  description: "Browse all architectural projects in our portfolio",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">All Projects</h1>
        <p className="text-gray-600">
          Browse our complete collection of architectural works
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium mb-2">No projects yet</h3>
          <p className="text-gray-600">
            Projects will appear here once they are added in the Sanity Studio.
          </p>
        </div>
      )}
    </div>
  );
} 
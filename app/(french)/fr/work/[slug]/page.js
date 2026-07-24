import { notFound } from "next/navigation";
import { getProject, getProjects, projects } from "../../../../content";
import { createProjectMetadata } from "../../../../metadata";
import { ProjectPage } from "../../../../site-pages";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject("fr", slug);

  return project ? createProjectMetadata({ locale: "fr", project }) : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const localizedProjects = getProjects("fr");
  const projectIndex = localizedProjects.findIndex((project) => project.id === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = localizedProjects[projectIndex];
  const nextProject = localizedProjects[(projectIndex + 1) % localizedProjects.length];

  return <ProjectPage locale="fr" project={project} nextProject={nextProject} />;
}

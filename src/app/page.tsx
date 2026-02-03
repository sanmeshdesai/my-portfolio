import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featured = projects.filter(project => project.featured)
  return (
    <div>
      <h1>Sanmesh Desai - Portfolio</h1>
      { featured.map((project) => (
        <div key={project.slug}>
          <Link href={`/projects/${project.slug}`} >
          {project.title}
          </Link>
        </div>
      )) }
    </div>

  );
}

import Image from "next/image";
import Link from "next/link";

type Project = {
    title: string,
    slug: string,
    description: string,
    screenshots?: string[],
    tech?: string[]
};


type Props = {
    project: Project; 
}

const ProjectCard = ({ project }: Props) => {
    return(

        <Link href={`/projects/${project.slug}`} className="block">
            <div className="rounded-xl border border-gray-200 overflow-hidden hover:bg-gray-900 hover:-translate-y-0.5 bg-gray-900/40 transition">
                { project.screenshots?.[0] && 
                    <Image src={`/projects/${project.slug}/${project.screenshots[0]}`} alt={project.title} width={400} height={220} className="w-full h-56 object-cover priority"/> 
                }

                <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 px-4">
                    { project.tech?.map( t => (
                        <span key={t} className="text-sm bg-gray-800 px-4 py-1 rounded-lg">{t}</span>
                    )) }
                </div>
                <span className="inline-block mt-4 text-blue-600 font-medium  px-4 p-4">View Project</span>

            </div>
        </Link>
    );
};

export default ProjectCard;
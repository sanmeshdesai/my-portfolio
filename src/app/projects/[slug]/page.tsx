import { projects } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        slug : string;
    }>;
};

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find(
       (p) => p.slug === slug
    );

    if (!project) return notFound();

    return (
        <div className="mt-8 max-w-5xl mx-auto px-6">
            <h1 className="text-3xl font-bold"> { project.title } </h1>
            <p className="text-gray-300 mt-2"> { project.description } </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl">
                { project.screenshots?.map((img) => (
                    <Image key={img} src={`/projects/${project.slug}/${img}`} alt={project.title} width={800} height={400} className="rounded-lg border border-gray-400"/>
                ))}
            </div>

            <h3 className="text-xl font-semibold mt-12">Features</h3>
            <ul className="list-disc list-inside mt-2 text-gray-400">
                {project.features?.map((feat) =>
                    <li key={feat}>{feat}</li>
                )}
            </ul>

            <h3 className="text-xl font-semibold mt-12">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mt-3">
                { project.tech.map(t => (
                    <span key={t} className="text-sm bg-gray-800 px-4 py-2 rounded">{t}</span>
                ))}
            </div>

            <div className="flex gap-6 mt-12">
            <a href={ project.github } target="_blank" className="text-blue-500 hover:underline"> Github </a>

            { project.live && (
                <a href={project.live} target="_blank" className="text-blue-500 hover:underline"> Live Demo </a>
            )}
            
            </div>

        </div>
    );
}
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
        <div>
            
            <h1> { project.title } </h1>
            <p> { project.description } </p>
            <p> { project.tech?.join(' . ') } </p>

            { project.screenshots?.map((img) => (
                <Image key={img} src={`/projects/${project.slug}/${img}`} alt={project.title} width={400} height={300}/>
            ))}

            <ul>
                {project.features?.map((feat) =>
                    <li key={feat}>{feat}</li>
                )}
            </ul>
            <a href={ project.github } target="_blank"> Github </a>
            { project.live && (
                <a href={project.live} target="_blank"> Live Demo </a>
            )}

            <img alt="" />

        </div>
    );
}
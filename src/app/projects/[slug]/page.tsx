import { projects } from "@/lib/data";
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
            <p> { project.github } </p>
            <p> { project.live } </p>
        </div>
    );
}
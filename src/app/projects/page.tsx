
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function Projects() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 max-w-5xl mx-auto">

            { projects.map(p => (
                <div key={p.slug}>
                    <ProjectCard key={p.slug} project={p} />
                </div>
            )) }

            <div className="col-span-full mt-16 text-center text-sm text-gray-400">More Projects will come as Build</div>


        </div>

    );
}
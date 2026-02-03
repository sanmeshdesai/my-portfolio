
import { projects } from "@/lib/data";
import Link from "next/link";

export default function Projects() {
    return(
        <div>
            <h1>Projects</h1>
            { projects.map(p => (
                <div key={p.slug}>
                    <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                </div>
            )) }
        </div>

    );
}
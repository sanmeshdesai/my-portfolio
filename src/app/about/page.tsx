export default function About() {
    return(
        <div className="max-w-3xl mx-auto mt-16 space-y-10">
            <section>
                <h2 className="text-xl font-semibold">About Me</h2>
                <p className="text-md mt-5 text-gray-300">I'm a full-stack developer who focuses on building realistic, production-style web applications. I enjoy working on systems that involve real user flows,
                    authentication, and structured data handling.
                </p>
                <p className="text-md mt-4 text-gray-300">    
                    Most of my work is centered on the MERN stack, with a strong focus on React and Next.js for the frontend and Node.js and MongoDB on the backend.
                </p>
            </section>
            <hr className="border-gray-800 "/>

            <section>
                <h2 className="text-xl font-semibold">What I Build</h2>
                <p className="text-md mt-5 text-gray-300">I mainly works on projects that simulate real-world products, such as:</p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2"> 
                    <li >Full-Stack E-Commerce Platform with authentication.</li>
                    <li >User authentication systems using JWT and role based access.</li>
                    <li >REST APIs for product, user and order management. </li>
                    <li >Responsive user interfaces using Tailwind CSS and modern component-patterns.</li>
                </ul>
            </section>
            <hr className="border-gray-800 "/>

            <section>
                <h2 className="text-xl font-semibold">How I Approach Development</h2>
                <p className="text-md mt-5 text-gray-300" >I focus on writing clean and maintainable code, structuring projects in a way 
                    that scales, and implementing features as they would exist in real production systems.
                </p>
                <p className="text-md mt-4 text-gray-300">
                    I prioritize clarity and long-term maintainability over quick fixes.  
                </p>
            </section>
            <hr className="border-gray-800 "/>

            <section>
                <h2 className="text-xl font-semibold">What I'm Currently Improving</h2>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2"> 
                    <li>Deploying and maintaining full-stack applications.</li>
                    <li>Writing more production ready back-end logic. </li>
                    <li >Application architecture in Next.js.</li>
                    <li >Performance and rendering pattern.</li>
                </ul>
            </section>
        </div>
    );
}
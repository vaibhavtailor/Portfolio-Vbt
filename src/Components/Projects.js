// Importing necessary components.
import React from "react";
import { projectList } from "./ProjectList";

export default function Projects() {
    return (
        <section id="Projects" className="py-10">
            <div className="md:px-12 px-6">
                {/* Setting up shadow box */}
                <div className="shadow-xl bg-white border-2 rounded">
                    <div className="container md:px-12">
                        <h1 className="font-bold md:text-4xl text-3xl m-6">
                            {/* Defining Topic of the section */}
                            Projects Fabricated <p className="h-1 bg-sky-700 rounded md:w-72 w-56" />
                        </h1>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-3 md:px-12 px-8">
                        {/* Loading all the projects from the projects file and assigning them to each element. */}
                        {projectList.map((project) => (
                            // Making all the projects a link to the github.
                            <a href={project.link} target="_blank" rel="noreferrer" className="md:h-96 h-64" key={project.image}>
                                <div className="p-4 absolute md:w-2/5 w-4/6 h-64" key={project.image}>
                                    <div key={project.subtitle}>
                                        {/* Keeping the projects as an absolute value so that on hover it displays the information of project. */}
                                        <div className="absolute md:h-80 h-56 bg-zinc-700 opacity-0 hover:opacity-100 ease-in-out duration-700" key={project.image}>
                                            <h2 className="md:py-2 md:text-xl text-cyan-500 font-bold text-center">{project.subtitle}</h2>
                                            <h1 className="md:pb-2 md:text-lg text-white font-semibold text-center">
                                                {project.title}
                                            </h1>
                                            <p className="md:pb-6 md:text-base text-sm text-neutral-300 text-center">{project.description}</p>
                                            <p className="md:text-base text-sm text-red-300 text-center ">Visit Project.</p>
                                        </div>
                                        {/* Displaying one of the screenshots of the project. */}
                                        <div>
                                            <img className="w-full md:h-80 h-56 object-fill border-solid border-2 border-black" src={project.image} alt="Project" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
// Importing necessary components.
import React from "react";

export default function Skills() {

    return (
        <section id="Skills" className="py-10">
            <div className="md:px-12 px-6">
                {/* Setting up shadow box */}
                <div className="shadow-xl bg-white border-2 rounded">
                    <div className="container">
                            {/* Defining Topic of the section */}
                        <h1 className="font-bold md:text-4xl text-3xl m-6">
                            Skills <p className="h-1 bg-sky-700 rounded md:w-16 w-12" />
                        </h1>
                    </div>
                    {/* Showing skills in the form of grid. Each image shows the programming languages logo. Added animation as well. */}
                    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-3 md:px-12 px-8">
                        <img className="h-52 w-52 object-contain p-4 scale-100 hover:scale-110 ease-in-out duration-500" src="./img/react.png" alt="React" />
                        <img className="h-52 w-52 object-contain p-2 scale-100 hover:scale-110 ease-in-out duration-500" src="./img/javascript.png" alt="Javascript" />
                        <img className="h-52 w-52 object-contain p-2 scale-100 hover:scale-110 ease-in-out duration-500" src="./img/tailwindcss.png" alt="TailwindCSS" />
                        <img className="h-52 w-52 object-contain p-2 scale-100 hover:scale-110 ease-in-out duration-500" src="./img/angularjs.png" alt="Angular" />
                        <img className="h-52 w-52 object-contain p-2 scale-100 hover:scale-110 ease-in-out duration-500" src="./img/java.png" alt="Java" />
                        <img className="h-52 w-52 object-contain p-2 scale-100 hover:scale-110 ease-in-out duration-500" src="./img/python.png" alt="Python" />
                        <img className="h-52 w-52 object-contain p-2 scale-100 hover:scale-110 ease-in-out duration-500" src="./img/mysql.png" alt="MySql" />
                        <img className="h-52 w-52 object-contain p-2 scale-100 hover:scale-110 ease-in-out duration-500" src="./img/mongodb.png" alt="MongoDB" />
                    </div>
                </div>
            </div>
        </section>
    );
}
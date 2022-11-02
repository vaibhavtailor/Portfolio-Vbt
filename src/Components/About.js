// Importing necessary components.
import React from "react";

export default function About() {
    return (
        <section id="About" className="py-10">
            <div className=" md:px-12 md:w-full px-6">
                {/* Setting up shadow box */}
                <div className="grid shadow-xl bg-white border-2 rounded">
                    {/* Defining Topic of the section */}
                    <h1 className="font-bold md:text-4xl text-3xl m-6">About Me <p className="h-1 bg-sky-700 rounded w-32" /></h1>
                    <div className="md:flex md:row grid align-items-center mx-6">
                        {/* Defining two elements in the flex, one for about myself, and another my picture. */}
                        <div className="mb-4 grid">
                            <p>
                                I am an enthusiastic developer who enjoys developing and creating new applications. I have experience in working with Java, Android, and Full-Stack development.
                            </p>
                            <p>
                                When I initially started coding at the age of seventeen, I thought it is amazing. Since then, programming has taken over my life. I constantly associate things with coding, so anytime I see something, my mind works like a computer to imagine the processes necessary to create such an application. I constantly look for innovative ideas and methods to be creative, and I strive to produce something original. I frequently run across difficulties when trying to do something innovative, but because of my problem-solving abilities and unique perspective compared to others, I can resolve these difficulties quickly. I have a certain knack for organizing and managing things, which helps me produce good outcomes as well.
                            </p>
                            <p>
                                After resolving issues and picking up knowledge from my mistakes, I became interested in leadership. I always give my best effort whenever I have a chance to lead, and I have discovered that when I approach problems with a different concept and a positive outlook, I succeed on a higher level. And as of late, I have grown quite interested in start-up’s; all I want is to develop, grow, and take advantage of opportunities.
                            </p>
                            <p>
                                Finally, I am very devoted to my mother and continuously go beyond to grant her desires. She is entirely responsible for who I am today, and I believe this will continue to be true in the future.
                            </p>
                        </div>
                        <div className="w-full md:w-full mb-6 md:mx-4 grid justify-center ">
                            <img className="h-72 md:h-96 object-cover rounded-lg scale-100 hover:scale-105 ease-in-out duration-500" src="./img/Pic.jpg" alt="Vaibhav" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
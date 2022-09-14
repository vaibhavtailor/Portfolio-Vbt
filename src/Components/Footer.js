// Importing necessary components.
import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";

export default function Footer() {
    return (
        <section id="Footer">
            {/* Thematic Break to differentiate footer. */}
            <hr className="py-6 border-black" />
            <footer className="md:p-10 md:w-full p-6">
                <div className="flex flex-wrap items-center justify-between">
                    {/* Adding authorship information.  */}
                    <p className="font-bold uppercase w-1/2"> Designed & Built by Vaibhav Tailor</p>
                    {/* Adding socials. */}
                    <ul className="flex flex-wrap">
                        <li className="md:mx-4">
                            <a href="https://github.com/vaibhavtailor" target="_blank" rel="noreferrer"><RiGithubFill className="w-10 h-10"></RiGithubFill></a>
                        </li>
                        <li className="md:mx-4">
                            <a href="https://www.linkedin.com/in/vaibhav-tailor-03238b1b6/" target="_blank" rel="noreferrer"><RiLinkedinBoxFill className="w-10 h-10"></RiLinkedinBoxFill></a>
                        </li>
                        <li className="md:mx-4">
                            <a href="https://twitter.com/VaibhavTailor20?t=5USCdErfLl8ZprIOnbe7-Q&s=08" target="_blank" rel="noreferrer"><RiTwitterFill className="w-10 md:h-8 h-10"></RiTwitterFill></a>
                        </li>
                        <li className="md:mx-4">
                            <a href="https://instagram.com/vbt_456?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><RiInstagramFill className="w-10 md:h-8 h-10"></RiInstagramFill></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </section>
    );
}
// Importing necessary components.
import React, { useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { RiMenuFoldFill } from "react-icons/ri";

export default function Navbar() {

    // Defining some variables to change the state of the navbar
    const [showNav, setShowNav] = useState(false)
    const [color, setColor] = useState(false)

    //Changing the navbar color on scrolling
    const changeColor = () => {
        if (window.scrollY >= 30) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        // Setting up navbar to change the color on scroll with animation
        <header className={(color ? "bg-zinc-700" : "bg-black") + " sticky top-0 z-10 ease-in-out duration-500 shadow-xl"}>
            {/* Changing the padding between the elements on scroll */}
            <nav className={(color ? "p-2" : "p-6") + " flex justify-between ease-in-out duration-500"}>
                <div className="flex w-full self-center">
                    {/* Setting up personal logo and name */}
                    <img className="h-10 w-18 ml-6 object-fill self-center text-white" src="./MyLogo.png" alt="vbt" href="#Home" />
                    <a href="#page-top" className="p-2 self-center text-white font-bold text-2xl hover:underline decoration-2">
                        Vaibhav Tailor</a>
                        {/* Showing the navbar icons when the screen is medium else hidden. Added the functionality of changing the icon on tap. */}
                    {showNav ? (<RiMenuUnfoldFill onClick={() => setShowNav(!showNav)} className="md:hidden block ml-auto mr-5 w-10 h-10 p-1.5 self-center cursor-pointer text-white " />) : (<RiMenuFoldFill onClick={() => setShowNav(!showNav)} className="md:hidden block ml-auto mr-5 w-10 h-10 p-1.5 self-center cursor-pointer text-white " />)}
                </div>
                {/* Showing the side bar when the screen is medium.*/}
                <div className={(showNav ? "right-0" : "-right-full") + " md:static fixed bottom-0 top-16 flex bg-zinc-800 md:bg-transparent md:justify-end md:flex md:grow bg-opacity-90 w-1/2 p-2 transition-[right] ease-in-out duration-300"}>
                    {/* Added the navigation links of the page. */}
                    <ul className="md:flex md:mx-4 md:space-x-7 md:space-y-0 space-y-5">
                        <li>
                            <a href="#page-top" className="text-white font-semibold text-xl hover:underline"> Home </a>
                        </li>
                        <li>
                            <a href="#About" className="text-white font-semibold text-xl hover:underline"> About</a>
                        </li>
                        <li>
                            <a href="#Skills" className="text-white font-semibold text-xl hover:underline"> Skills</a>
                        </li>
                        <li>
                            <a href="#Projects" className="text-white font-semibold text-xl hover:underline"> Projects</a>
                        </li>
                        <li>
                            <a href="#Contact" className="text-white font-semibold text-xl hover:underline"> Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
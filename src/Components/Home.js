// Importing necessary components.
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";


export default function Home() {

  //Setting up typed.js
  // Creating Ref element.
  const type = useRef(null);

  useEffect(() => {
    const typed = new Typed(type.current, {
      // Writing strings to display
      strings: ["Web Developer", "Full Stack Developer", "Java Developer", "Android Developer"],
      // Setting up speed settings
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 200,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying the text
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="Home" className="bg-black h-screen">
      <div className="flex  w-full h-full md:flex-row flex-row items-center">
        <div className="grid row-2 w-full md:mx-10 justify-center">
          {/* Writing Introduction. */}
          <h1 className="text-white mb-4 font-bold text-2xl md:text-5xl md:mb-4 justify-items-center">Hi,  </h1>
          <h1 className="text-white mb-4 font-bold text-2xl md:text-5xl md:mb-4 justify-items-center">I am Vaibhav Tailor </h1>
          {/* Setting up typed.js inputs. */}
          <h1> <span ref={type} className="text-white font-semibold text-xl md:text-3xl"></span><strong className="text-white font-semibold md:text-3xl text-xl">|</strong></h1>
        </div>
      </div>
    </section>
  );
}
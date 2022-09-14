// Importing necessary components.
import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {

    // Setting up email.js configrations to send email with the details in the form.
    //Configuring as per the email.js documentation.
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail_vbt', 'portfolio_website', e.target, 'xDZuNDhH1_tAA1lHY')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent, Thanks!");
            }, (error) => {
                console.log(error.text);
                alert("Sorry! Please try again later.");
            });
        e.target.reset();
    };

    return (
        <section id="Contact" className="py-10">
            <div className=" md:px-12 md:w-full px-6">
                {/* Setting up shadow box */}
                <div className="grid shadow-xl bg-white border-2 rounded">
                    <div className="md:flex md:row grid align-items-center">
                        <div className="mx-4 md:w-full">
                            {/* Defining Topic of the section */}
                            <h1 className="font-bold md:text-4xl text-3xl m-6 ">Get In Touch <p className="h-1 bg-sky-700 rounded md:w-44 w-36" /></h1>
                            {/* Setting up the form for the user to get in touch with me. All the fields are required in order to get proper details. Asking user for name and the message. On subbmitting the form with all the required fields, email will be sent to myself. */}
                            <form className="m-6" onSubmit={sendEmail}>
                                <div className="flex flex-wrap mb-6">
                                    {/* Asking user for first name and setting it as a required field of input. */}
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input name="firstName" type="text" placeholder="Vaibhav" required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 firstName" />
                                        <span className="block firstNameError text-red-500 text-xs hidden">error</span>
                                    </div>
                                    {/* Asking user for last name and setting it as a required field of input. */}
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input name="lastName" type="text" placeholder="Tailor" required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 lastName" />
                                        <span className="block lastNameError text-red-500 text-xs hidden">error</span>
                                    </div>
                                </div>
                                {/* Asking user for their email and setting it as a required field of input. */}
                                <div className="flex flex-wrap mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                            Your Email
                                        </label>
                                        <input name="email" type="email" placeholder="someone@example.com" required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 email" />
                                        <span className="block emailError text-red-500 text-xs hidden">error</span>
                                    </div>
                                </div>
                                {/* Asking user for message and setting it as a required field of input. */}
                                <div className="flex flex-wrap mb-6">
                                    <div className="w-full px-3">
                                        <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Your Message</label>
                                        <textarea name="message" rows="5" placeholder="Leave a comment..." required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 message" ></textarea>
                                        <span className="block messageError text-red-500 text-xs hidden">error</span>
                                    </div>
                                </div>
                                <button id="button" type="submit" className="m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
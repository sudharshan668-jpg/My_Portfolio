import React from "react";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow z-50">
            <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-xl font-bold">
                    <a href="#app" className="hover:text-gray-600">Sudharshan Thirunarayanan</a>
                </h1>

                <ul className="flex space-x-6 font-medium">
                    <li><a href="#about" className="hover:text-gray-600">About</a></li>
                    <li><a href="#skills" className="hover:text-gray-600">Skills</a></li>
                    <li><a href="#experience" className="hover:text-gray-600">Experience</a></li>
                    <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
                    <li><a href="#projects" className="hover:text-gray-600">Projects</a></li>
                    <li><a href="#email-me" className="hover:text-gray-600">Get in touch</a></li>
                </ul>
            </nav>
        </header>
    );
}

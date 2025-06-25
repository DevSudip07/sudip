import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons
import Button from "../Button";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed container mx-auto w-full h-20 text-white flex items-center px-6 md:px-40 z-50 bg-black">
            <nav className="flex justify-between items-center w-full">
                <h1 className="font-bold text-xl">SUDIP</h1>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-6">
                    {navItems.map((nav, index) => (
                        <li key={index} className="relative font-semibold py-0.3 after:absolute after:content-[''] after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:rounded-2xl hover:after:w-full cursor-pointer after:duration-200">
                            {nav.name}
                        </li>
                    ))}
                    <li><Button title="CONTACT" /></li>
                </ul>

                {/* Toggle Button */}
                <div className="md:hidden z-50">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black transition-transform duration-500 flex flex-col items-center justify-center gap-6 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    {navItems.map((nav, index) => (
                        <li key={index} className="list-none text-xl font-semibold hover:underline cursor-pointer">
                            {nav.name}
                        </li>
                    ))}
                    <Button title="CONTACT" />
                </div>
            </nav>
        </header>
    );
};

export default Nav;

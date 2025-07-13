import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/project' },
        { name: 'Contact', href: '/contacts' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                        <Link to="/" className="text-teal-400 font-bold text-lg">PA</Link>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center text-lg space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => handleLinkClick()}
                            className={`transition-colors duration-300 ${
                                location.pathname === link.href
                                    ? 'text-teal-600 font-semibold'
                                    : 'text-gray-600 hover:text-teal-600'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4">
                    <nav className="flex flex-col space-y-4 text-lg">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => handleLinkClick()}
                                className={`transition-colors duration-300 ${
                                    location.pathname === link.href
                                        ? 'text-teal-600 font-semibold'
                                        : 'text-gray-600 hover:text-teal-600'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Nav;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contacts' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex items-center justify-between px-[200px] py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-teal-400 font-bold text-lg">PA</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center text-lg space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
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
        </header>
    );
};

export default Nav;

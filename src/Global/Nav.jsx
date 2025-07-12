import React from 'react'
import { Link } from 'react-router'

const Nav = () => {

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contacts' },
    ]

    return (
        <div>
            {/* Header */}
            <header className="flex items-center justify-between px-[200px] py-4 shadow-md">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-teal-400 font-bold text-lg">PA</span>
                    </div>
                </div>
                <nav className="hidden md:flex items-center text-xl space-x-8">
                    {links.map((link) => (
                        <Link key={link.name} to={link.href} className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </header>
        </div>
    )
}

export default Nav
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Hp, pf, tt } from '../image/image';

const allProjects = [
    {
        id: 1,
        title: "Herbal Landing Page",
        description:
            "A clean and informative landing page showcasing a variety of herbs along with their health benefits.",
        tags: ["Website Design", "UI Design", "Landing Page"],
        image: Hp,
        link: "https://www.figma.com/design/PFQQQgFF4Gm0Bipgbjq3GN/Herbal?node-id=0-1&t=vQ7qOUhfrhvvcghX-1",
    },
    {
        id: 2,
        title: "Portfolio",
        description:
            "A modern and minimalistic portfolio design for Prabal Aryal. Emphasizes personal branding, project showcase, and a smooth user experience.",
        tags: ["Website Design", "UI Design"],
        image: pf,
        link: "https://www.figma.com/design/dpKRGrfj4Ru97M4xPbRHRv/Protfolio?t=2ihbF382PO0prXhx-1",
    },
    {
        id: 3,
        title: "Transport Tracker",
        description:
            "A user-friendly mobile app design for tracking public transportation in real time. Focuses on route clarity and live updates.",
        tags: ["Mobile Design", "UX Design"],
        image: tt,
        link: "https://www.figma.com/design/Q1HzJRugEbyhs5MWXhWMWR/Transportation-tracker?node-id=0-1&t=2ihbF382PO0prXhx-1",
    },
];

export const AllProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(allProjects.length / itemsPerPage);
    const paginatedProjects = allProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {paginatedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-sm transition-shadow duration-300"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-900 font-medium hover:text-teal-600 transition-colors duration-200 group"
                                >
                                    View Project
                                    <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="text-sm px-3 py-1 rounded hover:bg-gray-100 disabled:text-gray-400"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`text-sm px-3 py-1 rounded ${currentPage === i + 1
                                ? 'bg-teal-500 text-white'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="text-sm px-3 py-1 rounded hover:bg-gray-100 disabled:text-gray-400"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};


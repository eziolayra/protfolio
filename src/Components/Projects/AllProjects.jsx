import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { IoChevronBackSharp } from 'react-icons/io5';
import allProjects from '../../Data/projectdata';


const AllProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(allProjects.length / itemsPerPage);
    const paginatedProjects = allProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const navigate = useNavigate();

    const goback = () => {
        navigate(-1)
    }

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <IoChevronBackSharp className="text-5xl cursor-pointer mb-10 text-teal-600" onClick={goback} />
                {/* Header Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
                    {paginatedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-sm transition-shadow duration-300"
                        >
                            <div className="aspect-[4/3] overflow-hidden border-b">
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

export default AllProjects;
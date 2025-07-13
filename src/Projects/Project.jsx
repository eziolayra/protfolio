import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Hp, pf, tt } from '../image/image'
import { Link } from 'react-router'

const Project = () => {

    const projects = [
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

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        My Work
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects & Case Study</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        A collection of my learning projects, design exercises, and concept work.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-sm transition-shadow duration-300"
                        >
                            {/* Project Image */}
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6 ">
                                {/* Tags */}
                                <div className="flex  flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>

                                {/* Project Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>

                                {/* View Projects Link */}
                                <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-teal-600 transition-colors duration-200 group">
                                    <Link to={project.link} target="_blank">View Projects</Link>
                                    <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center">
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        These projects represent my learning journey and growth as a designer.
                    </p>

                    {/* See All Projects Link */}
                    <button className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-teal-600 transition-colors duration-200 group">
                        <Link to="/projects">See All Projects</Link>
                        <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Project
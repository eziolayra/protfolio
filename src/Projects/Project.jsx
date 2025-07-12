import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Project = () => {

    const projects = [
        {
            id: 1,
            title: "Herbal Landing Page",
            description:
                "Herbal websites which shows the variety of hearbs and their uses",
            tags: ["Mobile Design", "UI Design"],
            image: "/placeholder.svg?height=240&width=320",
        },
        {
            id: 2,
            title: "Herbal Landing Page",
            description:
                "Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem",
            tags: ["Mobile Design", "UI Design"],
            image: "/placeholder.svg?height=240&width=320",
        },
        {
            id: 3,
            title: "Herbal Landing Page",
            description:
                "Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem Lorem porem",
            tags: ["Mobile Design", "UI Design"],
            image: "/placeholder.svg?height=240&width=320",
        },
    ]

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
                            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Project Image */}
                            <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
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
                                    <span>View Projects</span>
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
                        <span>See All Projects</span>
                        <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Project
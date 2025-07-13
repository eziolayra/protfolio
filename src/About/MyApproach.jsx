import React from 'react'

const MyApproach = () => {

    const steps = [
        {
            number: "01",
            title: "Research",
            description: "Understanding the problem, users, and business goals.",
        },
        {
            number: "02",
            title: "Ideate",
            description: "Sketching ideas and exploring different solutions.",
        },
        {
            number: "03",
            title: "Design",
            description: "Creating wireframes, mockups, and prototypes.",
        },
        {
            number: "04",
            title: "Test & Iterate",
            description: "Gathering feedback and refining the solution.",
        },
    ]

    return (
        <div className=" bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    My Approach
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects & Case Study</h1>
                <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
                    How I approach design problems and create solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white rounded-lg p-8 shadow-sm border border-gray-100"
                        >
                            {/* Circle with Number */}
                            <div className="w-20 h-20 bg-teal-200 rounded-full flex items-center justify-center mb-6">
                                <span className="text-teal-800 font-bold text-lg">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyApproach
import React from 'react'
import { educationList, features, skillsList } from '../../Data/AboutData'

const Aboutme = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        About Me
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Design Journey</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        I'm a design student passionate about creating user-centered digital experiences. Currently learning and
                        developing my skills in UI/Ux design.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {features.map(({ id, title, description, Icon, iconBg, iconColor }) => (
                        <div
                            key={id}
                            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
                        >
                            <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                <Icon className={`w-8 h-8 ${iconColor}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>

                {/* Skills and Education  */}

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Skills  */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>
                        <div className="space-y-6">
                            {skillsList.map(({ name, level }, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-gray-700 font-medium">{name}</span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education  */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Education & Courses</h2>
                        <div className="space-y-8">
                            {educationList.map(({ title, institution, period, note }, index) => (
                                <div key={index} className="border-l-4 border-teal-500 pl-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                                    <p className="text-gray-600 mb-2">{institution} • {period}</p>
                                    <p className="text-gray-500 italic">{note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme

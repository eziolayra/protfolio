import { BiBookOpen, BiLaptop } from 'react-icons/bi'
import { GiLightBulb } from 'react-icons/gi'

const features = [
    {
        id: 1,
        title: "Always Learning",
        description: "Constantly improving my skills through courses, tutorials, and hands-on projects.",
        Icon: BiBookOpen,
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600"
    },
    {
        id: 2,
        title: "Technical Background",
        description: "Basic understanding of HTML/CSS and React to better collaborate with development teams.",
        Icon: BiLaptop,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
    },
    {
        id: 3,
        title: "Creative Problem Solver",
        description: "Approaching design challenges with creativity and a user-centered mindset.",
        Icon: GiLightBulb,
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600"
    }
]

const educationList = [
    {
        title: "Bachelor in Science CSIT",
        institution: "Tribhuvan University",
        period: "2019 - 2023",
        note: "Focused on Programming and Designing",
    },
    {
        title: "UI/UX Course",
        institution: "Broadway Infos",
        period: "2025",
        note: "2.5 months training",
    },
];

const skillsList = [
    { name: "UI Design", level: "Intermediate" },
    { name: "Wireframing", level: "Intermediate" },
    { name: "Prototyping", level: "Beginner" },
    { name: "User Research", level: "Beginner" },
    { name: "Visual Design", level: "Intermediate" },
];

export { features, educationList, skillsList };
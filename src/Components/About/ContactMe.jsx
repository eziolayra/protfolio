import React, { useRef, useState } from 'react'
import { FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import emailjs from '@emailjs/browser';
import NoticeBar from '../Global/Notifaction';

const contactItems = [
    {
        id: 'phone',
        label: 'Phone Number',
        value: '9843810916',
        href: 'tel:9843810916',
        icon: FaPhoneAlt,
        isLink: true,
    },
    {
        id: 'email',
        label: 'Email',
        value: 'prabal.aryal.ez@gmail.com',
        href: 'mailto:prabal.aryal.ez@gmail.com',
        icon: IoIosMail,
        isLink: true,
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'https://www.linkedin.com/in/prabal-aryal-b20a4130a',
        displayText: 'Prabal Aryal',
        icon: FaLinkedinIn,
        isLink: true,
    },
]

const ContactMe = () => {

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();
    const { Notice } = NoticeBar();

    const validateForm = (formData) => {
        const newErrors = {};

        if (!formData.get('user_name').trim()) {
            newErrors.user_name = 'Name is required';
        }

        const email = formData.get('user_email').trim();
        if (!email) {
            newErrors.user_email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.user_email = 'Email is invalid';
        }

        if (!formData.get('message').trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const formErrors = validateForm(formData);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        emailjs
            .sendForm('service_lzycdjo', 'template_ymi06nb', form.current, {
                publicKey: 'riEuYKzWGZ051fgQ1',
            })
            .then(
                () => {
                    Notice('Message sent successfully!', 'success');
                    form.current.reset();
                    console.log('SUCCESS!');
                },
                (error) => {
                    Notice('Failed to send message. Please try again.', 'error');
                    console.log('FAILED...', error.text);
                },
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="bg-teal-600 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{"Let's Connect"}</h1>
                    <p className="text-teal-100 text-lg max-w-2xl mx-auto">
                        {"I'm open to internship opportunities, mentorship, and collaboration on interesting projects."}
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Contact Info */}
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

                        <div className="space-y-6">
                            {contactItems.map(({ id, label, value, icon: Icon, isLink, displayText, href }) => (
                                <div key={id} className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-teal-100 text-sm">{label}</p>
                                        {isLink ? (
                                            <a
                                                href={href || value}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white font-medium"
                                            >
                                                {displayText || value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-medium">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name='user_name'
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                {errors.user_name && <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name='user_email'
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                {errors.user_email && <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    name='message'
                                    placeholder="I'd like to talk about..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                value="Send"
                                className="w-full bg-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe

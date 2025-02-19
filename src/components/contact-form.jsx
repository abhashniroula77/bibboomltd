'use client'

import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useModal } from '@/context/modalContext';

export function ContactForm() {
    const { isModalOpen, setIsModalOpen } = useModal();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f246ffb6-4ca4-48d8-a1ef-a126162c9208");

        const services = [];
        formData.forEach((value, key) => {
            if (key === 'checkbox') {
                services.push(value);
            }
        });

        const object = Object.fromEntries(formData);
        object.services = services;

        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        const result = await response.json();
        if (result.success) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                setIsModalOpen(false);
            }, 3000);
        }
    }

    if (!isModalOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center md:justify-end p-4 bg-black/50 backdrop-blur-md"
            onClick={handleClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-lg p-8 overflow-y-auto bg-white rounded-xl shadow-xl border border-blue-600"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute p-2 transition-colors rounded-full top-4 right-4 hover:bg-blue-600/20"
                >
                    <X className="w-6 h-6 text-blue-600" />
                </button>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-blue-600 tracking-tight text-center">
                        Let's Build Something Great Together
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border rounded-md border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 border rounded-md border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            rows={4}
                            className="w-full px-4 py-3 border rounded-md border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />

                        <p className="font-medium text-lg text-blue-600">Services You Need:</p>
                        <div className="grid grid-cols-2 gap-3">
                            {["Web Development", "SEO & Marketing", "IT Support", "Brand Strategy", "Software Solutions", "UI/UX Design"].map(service => (
                                <label key={service} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        value={service}
                                        className="w-4 h-4 text-blue-600 border-blue-600 focus:ring-blue-600"
                                    />
                                    <span className="text-sm">{service}</span>
                                </label>
                            ))}
                        </div>

                        <div className="flex justify-center mt-6">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-3 px-6 text-sm font-medium text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Get in Touch
                            </motion.button>
                        </div>
                    </form>
                </div>
                
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md flex items-center space-x-2"
                    >
                        <CheckCircle className="w-6 h-6" />
                        <span>Message sent successfully!</span>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}

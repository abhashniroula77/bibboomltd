'use client'

import Image from "next/image"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";

export const faqData = [
    {
        id: 1,
        question: "What services does BitBoom Ltd offer?",
        answer: "We provide web development, SEO, digital marketing, IT services, and web maintenance to help businesses grow online."
    },
    {
        id: 2,
        question: "Does BitBoom Ltd work with clients outside the UK?",
        answer: "Yes, we work with clients globally, helping businesses in different countries improve their online presence and performance."
    },
    {
        id: 3,
        question: "What is included in web development services?",
        answer: "We offer custom website development, performance optimization, and ongoing maintenance to ensure your site runs smoothly."
    },
    {
        id: 4,
        question: "Can BitBoom Ltd assist with SEO?",
        answer: "Yes, we specialize in SEO strategies that improve website visibility, ranking, and drive more organic traffic."
    },
    {
        id: 5,
        question: "What kind of digital marketing services do you offer?",
        answer: "We offer social media management, email marketing, content creation, and online ad campaigns to boost your brand's presence."
    },
    {
        id: 6,
        question: "How does BitBoom Ltd handle IT services?",
        answer: "Our IT services include website troubleshooting, software maintenance, and implementing efficient digital marketing strategies."
    },
    {
        id: 7,
        question: "Do you provide web maintenance after development?",
        answer: "Yes, we offer ongoing support, updates, and performance improvements to keep your website in top shape."
    },
    {
        id: 8,
        question: "How can BitBoom Ltd help with lead generation?",
        answer: "Through SEO, digital marketing, and website optimization, we help businesses attract more leads and convert them into customers."
    },
    {
        id: 9,
        question: "Can BitBoom Ltd help with website analytics and performance?",
        answer: "Yes, we provide performance tracking and analytics to ensure your website's goals are being met and to identify areas of improvement."
    },
    {
        id: 10,
        question: "How does BitBoom Ltd approach custom website design?",
        answer: "We work closely with clients to create unique, user-friendly designs that represent their brand and provide an optimal user experience."
    },
    {
        id: 11,
        question: "What industries does BitBoom Ltd serve?",
        answer: "We serve a variety of industries including retail, healthcare, education, real estate, and more, helping businesses across sectors grow online."
    },
    {
        id: 12,
        question: "How do you ensure the security of client websites?",
        answer: "We implement best practices in website security including SSL encryption, regular updates, and secure server environments to protect client data."
    },
    {
        id: 13,
        question: "What is the process for starting a project with BitBoom Ltd?",
        answer: "The process begins with an initial consultation to understand your needs. From there, we create a tailored plan, develop the website, and provide ongoing support."
    },
    {
        id: 14,
        question: "How do you handle website performance optimization?",
        answer: "We focus on improving loading speeds, enhancing mobile responsiveness, optimizing images, and employing caching strategies to boost performance."
    }
];

const FAQItem = ({ id, question, answer, isOpen, toggleFAQ }) => {
    return (
        <div className="mb-4 flex flex-col">
            <button
                className="flex justify-between border border-gray-200 items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none rounded-t-md"
                onClick={() => toggleFAQ(id)}
            >
                <span className="font-medium text-gray-900">
                    <span className="mr-2 text-primary">{id}.</span>
                    {question}
                </span>
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white border-b border-r border-l"
                    >
                        <div className="p-4">
                            <p className="text-muted-foreground">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {

    const [openFAQs, setOpenFAQs] = useState({});
    const toggleFAQ = (id) => {
        setOpenFAQs(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section id="faq" className="bg-neutral-100/50 relative md:pt-48">
            <div className="container relative mx-auto px-4 py-20 z-10">
                <div className="size-4 hidden md:block border-neutral-400/50 border-2 rounded-full absolute bg-primary bottom-72 right-1/2 translate-x-[50%] z-0" />
                <div className="w-[.04rem] hidden md:block absolute h-72 bg-neutral-400/50 bottom-0 right-1/2 translate-x-[50%] z-0" />
                <BlurFade delay={0.25} inView>
                    <h1 className="text-xl md:text-5xl font-medium tracking-[-.06em] max-w-2xl capitalize mb-4 md:mb-0">
                        Your Digital Solutions, Simplified
                    </h1>
                </BlurFade>
                <BlurFade delay={0.5} inView>
                    <p className="md:text-lg text-muted-foreground">Got questions? We've got the answers!</p>
                </BlurFade>
            </div>
            <div className="absolute right-1/2 translate-x-[50%] translate-y-[-50%] bg-neutral-100 z-20 border-2 border-neutral-400/50 flex items-center justify-center size-24 rounded-full">
                <Image src='/images/logo.png' width={62} height={92} alt="FAQ Logo" />
            </div>
            <div className="container border-t-2 border-neutral-400/50 mx-auto px-4 py-24 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqData.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            {...faq}
                            isOpen={openFAQs[faq.id]}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ

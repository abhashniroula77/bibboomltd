'use client';

import { cn } from "@/lib/utils";
import { Code, Laptop, Database, Server, Shield, Monitor, UserPlus, HelpCircle } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";

const features = [
    {
        icon: <Laptop className="w-8 h-8 stroke-white" />,
        title: "Web Development",
        description: "Our full-stack web development services include custom websites and applications tailored to your business, using the latest technologies like React, Next.js, and Node.js.",
        delay: '250',
        color: 'bg-blue-600'
    },
    {
        icon: <Code className="w-8 h-8 stroke-white" />,
        title: "Web Maintenance",
        description: "We provide ongoing website support and maintenance services, ensuring your platform stays up-to-date, secure, and optimized for the best performance.",
        delay: '500',
        color: 'bg-green-600'
    },
    {
        icon: <Database className="w-8 h-8 stroke-white" />,
        title: "SEO Services",
        description: "Boost your search engine rankings with our expert SEO strategies, ensuring your website reaches the right audience and performs well on search engines.",
        delay: '500',
        color: 'bg-yellow-600'
    },
    {
        icon: <Server className="w-8 h-8 stroke-white" />,
        title: "Cloud Hosting & Servers",
        description: "We provide reliable and scalable cloud hosting solutions, ensuring high uptime and speed for your business-critical applications.",
        delay: '750',
        color: 'bg-red-600'
    },
    {
        icon: <Shield className="w-8 h-8 stroke-white" />,
        title: "Cybersecurity Services",
        description: "Our cybersecurity services protect your digital assets with state-of-the-art solutions, preventing cyber threats and ensuring data safety for your business.",
        delay: '1000',
        color: 'bg-purple-600'
    },
    {
        icon: <Monitor className="w-8 h-8 stroke-white" />,
        title: "UI/UX Design",
        description: "We craft user-friendly, visually appealing designs that enhance the user experience and ensure smooth interactions across platforms.",
        delay: '1250',
        color: 'bg-orange-600'
    },
    {
        icon: <UserPlus className="w-8 h-8 stroke-white" />,
        title: "Digital Marketing",
        description: "Our digital marketing strategies help increase your brand's visibility and engagement, driving growth and online success through targeted campaigns.",
        delay: '1500',
        color: 'bg-teal-600'
    },
    {
        icon: <HelpCircle className="w-8 h-8 stroke-white" />,
        title: "24/7 Customer Support",
        description: "We offer around-the-clock support to ensure that your business operations run smoothly, with real-time assistance whenever you need it.",
        delay: '1750',
        color: 'bg-pink-600'
    }
];

const Details = () => {
    return (
        <section id="about" className="min-h-screen bg-neutral-100/50 relative overflow-hidden">
            <div className="absolute opacity-30 md:opacity-100 top-36 right-36 z-0">
                <BlurFade inView delay={0.5}>
                    {/* <div className="w-[0.12rem] absolute h-48 bg-neutral-300 -top-36 right-[3.25rem]"></div> */}
                    {/* <div className="size-28">
                        <Image src="/images/decor-1.png" fill alt="decor" />
                    </div> */}
                </BlurFade>
            </div>
            <div className="absolute opacity-30 md:opacity-100 top-48 right-12 z-0">
                <BlurFade inView delay={0.5}>
                    {/* <div className="w-[0.12rem] absolute h-64 bg-neutral-300 -top-48 right-[3.25rem]"></div> */}
                    {/* <div className="size-28">
                        <Image src="/images/decor-2.png" fill alt="decor" />
                    </div> */}
                </BlurFade>
            </div>
            <div className="container mx-auto px-4 py-32">
                <BlurFade delay={0.25} inView>
                    <div className="flex items-center gap-2 mb-8 text-sm text-primary bg-primary-light/20 px-4 py-2 rounded-full w-max animate-pulse">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Why choose BitBoom Ltd?
                    </div>
                </BlurFade>
                <BlurFade delay={0.5} inView>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-[-.06em] mb-2 max-w-2xl capitalize">
                        Our Expertise Tailored for Your Success
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-[-.06em] mb-16 max-w-2xl capitalize">
                        We deliver comprehensive IT solutions
                    </h2>
                </BlurFade>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <MagicCard gradientColor="#299cdf" gradientSize={200} gradientOpacity={0.35} delay={feature.delay} key={index} className="border-neutral-200 shadow-none">
                            <div className="p-6">
                                <div className={cn('p-3 rounded-lg inline-block mb-4', feature.color)}>
                                    {feature.icon}
                                </div>
                                <h3 className="font-medium tracking-tight text-lg leading-tight mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground tracking-tight">
                                    {feature.description}
                                </p>
                            </div>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Details;

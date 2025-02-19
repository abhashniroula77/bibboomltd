"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import { useModal } from '@/context/modalContext';
import Image from 'next/image';
import Head from 'next/head';

const Hero = () => {
  const { setIsModalOpen } = useModal();
  const handleConnectClick = () => {
    setIsModalOpen(true);
  };
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* SEO Meta Tags Uisng Next js 15  */}
      <Head>
        <title>Web Development & Digital Marketing Services | BitBoom Ltd</title>
        <meta
          name="description"
          content="BitBoom Ltd provides expert web development, SEO, and digital marketing services to enhance your online presence and digital growth."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bitboom.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BitBoom Ltd",
              "url": "https://www.bitboom.com",
              "logo": "https://www.bitboom.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+447585590274",
                "contactType": "Customer Service",
                "areaServed": "GB",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/bitboom",
                "https://twitter.com/bitboom",
         
              ]
            }),
          }}
        />
      </Head>

      <div className="flex pt-12 mt-10 px-6 md:px-20 items-center justify-center bg-gray-100 md:h-screen overflow-hidden">
        <div className="flex flex-col gap-6 md:flex-row items-center max-w-7xl">
          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:pr-32" data-aos="fade-right">
            <h1 className="text-4xl lg:text-5xl text-center md:text-left font-medium leading-tight">
              Empowering your <span className="text-blue-600">digital growth</span>
            </h1>
            <h2 className="mt-4 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              BitBoom Ltd offers expert web development, maintenance, digital marketing, and SEO solutions to boost your online presence.
            </h2>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start">
              <button 
                onClick={handleConnectClick}
                className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-600 text-white border-2 border-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 flex items-center justify-center space-x-2"
                data-aos="zoom-in"
              >
                <span>Get Started</span>
                <FaArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end" data-aos="fade-left">
            <Image
              src="/images/hero.png"  // Ensure the image is in the public folder
              width={500}
              height={500}
              alt="Tech company providing web development and digital marketing services"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="fixed bottom-3 right-3 z-50">
          <a 
            href="https://wa.me/+447585590274?text=Hello, how can I help you?" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/images/what.png" width="60" height="60" alt="WhatsApp Icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;

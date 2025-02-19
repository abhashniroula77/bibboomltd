'use client';
import { FaReact, FaNodeJs, FaInstagram, FaTwitter, FaGoogle, FaWrench } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFramer, SiGoogleanalytics, SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si';
const Tech = () => {
  return (
    <div>
    <section className="p-4">
    <h3 className="mx-4 mb-6 text-center capitalize text-2xl md:text-4xl font-bold text-shadesOfBlue">
       Technologies & Services We Use
        </h3>

  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li>
      <a href="https://reactjs.org/" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <FaReact className="text-4xl text-blue-600" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              React.js
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">Frontend Development</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="https://tailwindcss.com/" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <SiTailwindcss className="text-4xl text-cyan-500" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Tailwind CSS
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">Styling Framework</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="https://nextjs.org/" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <SiNextdotjs className="text-4xl text-black" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Next.js
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">Server-Side Rendering</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="https://framer.com/motion" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <SiFramer className="text-4xl text-pink-500" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Framer Motion
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">Animations and Interactions</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="https://nodejs.org/" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <FaNodeJs className="text-4xl text-green-600" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Node.js
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">Backend Development</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="https://www.google.com/analytics" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <SiGoogleanalytics className="text-4xl text-yellow-600" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Google Analytics
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">SEO and Insights</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <FaInstagram className="text-4xl text-pink-500" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Social Media Optimization
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">Instagram, Twitter, etc.</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="https://www.adobe.com/products/photoshop.html" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <SiAdobephotoshop className="text-4xl text-red-600" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Graphics Designing
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">Adobe Photoshop</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
    <li>
      <a href="https://www.adobe.com/products/premiere.html" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <SiAdobepremierepro className="text-4xl text-blue-700" />
          </div>
          <div className="flex-grow ml-6">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Video Editing
            </h3>
            <div className="inline-flex items-center mt-1">
              <span className="text-gray-600 rounded">Adobe Premiere Pro</span>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </div>
        </div>
      </a>
    </li>
  </ul>
</section>
    </div>
  )
}

export default Tech

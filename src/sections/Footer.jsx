'use client';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">BitBoom Ltd</h2>
            <p className="text-gray-400">Providing top-notch IT services including web development, SEO, and digital marketing to help businesses grow.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#" className="hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
    <p>&copy; {new Date().getFullYear()} BitBoom Ltd. All Rights Reserved.</p>
    <p>
        Developed & Maintained by{" "}
        <a 
            href="https://anish-10.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
        >
            Anish Mainali
        </a>
    </p>
</div>
      </div>
    </footer>
    </div>
  )
}

export default Footer

'use client';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center" data-aos="fade-up" data-aos-duration="1000">
            <img src="https://i.imgur.com/WbQnbas.png" alt="BitBoom Ltd" />
        </div>
    </div>
    <div className="sm:w-1/2 p-5" data-aos="fade-up" data-aos-duration="1500">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-blue-600 uppercase">About Us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl text-blue-600">
                About <span className="text-blue-600">BitBoom Ltd</span>
            </h2>
            <p className="text-gray-700">
                At BitBoom Ltd, we specialize in delivering cutting-edge IT solutions that empower businesses across various industries. From responsive web development to digital marketing and SEO, we provide a comprehensive range of services tailored to meet the unique needs of each client. Our team of experts is dedicated to helping businesses grow and thrive in the digital world.
            </p>
            <p className="text-gray-700 mt-4">
                Whether you're looking to enhance your online presence, optimize your website for search engines, or build a user-friendly digital platform, BitBoom Ltd is your go-to partner. We are committed to excellence, innovation, and delivering results that exceed expectations.
            </p>
        </div>
    </div>
</div>
  )
}

export default About

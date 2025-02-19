import { GiTargetArrows } from "react-icons/gi";
import { FaLightbulb, FaShieldAlt } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="w-screen mx-auto p-6 lg:px-30 sm:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <h3 className="mx-4 mb-0 text-center capitalize text-2xl md:text-4xl font-bold text-shadesOfBlue">
          Our Mission, Vision & Policy
        </h3>
      </div>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 my-16">
        {/* Mission Card */}
        <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring-2 hover:ring-blue-500 border-r-4 border-gradient-to-r from-transparent to-blue-500 transform duration-500 hover:scale-105 hover:shadow-xl">
          <div className="bg-blue-500 flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
            <GiTargetArrows className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-blue-500 dark:group-hover:text-white transform duration-300" />
          </div>
          <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
            <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-8">
              Our Mission
            </h2>
            <p className="text-center text-base dark:text-white">
              To provide cutting-edge digital solutions that accelerate business growth and enhance customer experiences.
            </p>
          </div>
        </div>
        {/* End Mission Card */}

        {/* Vision Card */}
        <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring-2 hover:ring-green-500 border-r-4 border-gradient-to-r from-transparent to-green-500 transform duration-500 hover:scale-105 hover:shadow-xl">
          <div className="bg-green-500 flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
            <FaLightbulb className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-green-500 dark:group-hover:text-white transform duration-300" />
          </div>
          <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
            <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-8">
              Our Vision
            </h2>
            <p className="text-center text-base dark:text-white">
              To become a global leader in IT services, empowering businesses through innovative technology solutions.
            </p>
          </div>
        </div>
        {/* End Vision Card */}

        {/* Policy Card */}
        <div className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring-2 hover:ring-red-500 border-r-4 border-gradient-to-r from-transparent to-red-500 transform duration-500 hover:scale-105 hover:shadow-xl">
          <div className="bg-red-500 flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
            <FaShieldAlt className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-red-500 dark:group-hover:text-white transform duration-300" />
          </div>
          <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
            <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-8">
              Our Policy
            </h2>
            <p className="text-center text-base dark:text-white">
              We uphold the highest standards of ethical practices and transparency while delivering exceptional customer-focused IT solutions.
            </p>
          </div>
        </div>
        {/* End Policy Card */}
      </div>
    </div>
  );
};

export default Mission;

"use client";
import {motion} from "framer-motion";
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import {PhoneIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <section className="relative my-30 2xl:my-0 bg-[url('/background_2.jpg')] bg-cover bg-bottom 2xl:h-80 h-fit flex items-center justify-between 2xl:px-20 px-7 py-10 2xl:py-0 w-full">
      <motion.div
        className="absolute inset-0 bg-black/65"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2, ease: "easeOut"}}
      />

      {/* ✨ Centered Text (animated slide-up + fade-in) */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{opacity: 0, y: 40}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.2, ease: "easeOut", delay: 0.3}}
      >
        <div className="block 2xl:flex justify-between">
          <div className="w-full 2xl:w-[30%]">
            <h2 className="text-left 2xl:text-center">Logo</h2>
            <p className="text-justify leading-8">
              Versavvy IT consulting is a boutique information technology firm
              that provides cutting edge technologies with a tailor-made
              approach to help businesses achieve their unique goals.
            </p>
            <hr />
            <div className="flex gap-9 mt-6 text-white">
              <FaFacebook className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="w-6 h-6 hover:text-sky-500 cursor-pointer" />
              <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            </div>
          </div>
          <nav>
            <h2 className="font-bold mt-10 2xl:mt-5 text-left 2xl:text-center">
              COMPANY
            </h2>
            <ul className="text-left mt-5 leading-7">
              <li className="font-semibold">Home</li>
              <li className="font-semibold">Service</li>
              <li className="font-semibold">About Us</li>
              <li className="font-semibold">Contact Us</li>
            </ul>
          </nav>
          <div className="text-left">
            <h2 className="font-bold">HELP</h2>
            <div className="leading-10">
              <div className="flex gap-4 mt-5 items-center">
                <PhoneIcon className="w-6 h-6 text-white hover:text-blue-500 transition-colors" />{" "}
                <p>+2348137386134</p>
              </div>
              <div className="flex gap-4 items-center">
                <EnvelopeIcon className="w-6 h-6 text-white hover:text-blue-500 transition-colors" />{" "}
                <p> adeyemoaid@gmail.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <MapPinIcon className="w-6 h-6 text-white hover:text-blue-500 transition-colors" />{" "}
                <p>Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-10" />

        <p className="text-center mt-5"> &copy; CopyWrite 2025</p>
      </motion.div>
    </section>
  );
};

export default Footer;

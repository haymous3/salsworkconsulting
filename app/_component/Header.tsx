// import Link from "next/link";
// import Button from "./Button";

// const Header = () => {
//   return (
//     <nav className="flex justify-between items-center bg-white px-20 py-5">
//       <div className="flex gap-4">
//         <h2 className="border-r-2 pr-3">Logo</h2>

//         <ul className="flex gap-3">
//           <li className="font-semibold hover:text-primary">
//             <Link href="/home">Home</Link>
//           </li>
//           <li className="font-semibold  hover:text-primary">
//             <Link href="/about_us">About</Link>
//           </li>

//           <li className="font-semibold hover:text-primary">
//             <Link href="/services">Services</Link>
//           </li>
//           <li className="font-semibold hover:text-primary">
//             <Link href="contact_us">Contact Us</Link>
//           </li>
//         </ul>
//       </div>

//       <Button className="px-4 py-3 text-white font-semibold rounded-md text-[1rem]">
//         GET STARTED
//       </Button>
//     </nav>
//   );
// };

// export default Header;

"use client";

import {useState} from "react";
import Link from "next/link";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {motion, AnimatePresence} from "framer-motion";
import Button from "./Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <h2 className="border-r-2 pr-3 text-lg font-bold text-gray-800">
            Logo
          </h2>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            <li className="font-semibold hover:text-primary transition-colors">
              <Link href="/home">Home</Link>
            </li>
            <li className="font-semibold hover:text-primary transition-colors">
              <Link href="/about_us">About</Link>
            </li>
            <li className="font-semibold hover:text-primary transition-colors">
              <Link href="/services">Services</Link>
            </li>
            <li className="font-semibold hover:text-primary transition-colors">
              <Link href="/contact_us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="px-5 py-3 text-white font-semibold rounded-md text-[1rem]">
            GET STARTED
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-gray-800"
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Background Overlay + Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}
              onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Dropdown Menu */}
            <motion.div
              initial={{height: 0, opacity: 0}}
              animate={{height: "auto", opacity: 1}}
              exit={{height: 0, opacity: 0}}
              transition={{duration: 0.3, ease: "easeInOut"}}
              className="md:hidden bg-white shadow-lg overflow-hidden z-50 relative"
            >
              <ul className="flex flex-col gap-4 px-6 py-5 border-t">
                <li className="font-semibold hover:text-primary transition-colors">
                  <Link href="/home" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="font-semibold hover:text-primary transition-colors">
                  <Link href="/about_us" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li className="font-semibold hover:text-primary transition-colors">
                  <Link href="/services" onClick={() => setMenuOpen(false)}>
                    Services
                  </Link>
                </li>
                <li className="font-semibold hover:text-primary transition-colors">
                  <Link href="/contact_us" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>

                <Button className="mt-2 px-5 py-3 text-white font-semibold rounded-md text-[1rem]">
                  GET STARTED
                </Button>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

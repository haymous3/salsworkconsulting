"use client";
import {motion} from "framer-motion";

import Image, {StaticImageData} from "next/image";

type HeroProps = {
  background: string;
  image: StaticImageData | string;
  children: React.ReactNode;
};

const Hero = ({children, image,background}: HeroProps) => {
  return (
    <section
      className="relative bg-cover bg-bottom h-screen flex items-center justify-center"
      style={{backgroundImage: `url(/${background}`}}
    >
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
        <div className="flex flex-wrap gap-4 justify-center">
          {/* <div className="w-[40%] text-left">
            <h4 className="text-primary font-bold">GROW YOUR BUSINESS</h4>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
              Get Your Result-driven Analysis With{" "}
              <span className="text-primary">Salworks</span>
            </h3>
            <p className=" text-justify sm:text-lg md:text-xl opacity-90 max-w-2xl drop-shadow leading-7">
              Salworks IT consulting is a boutique information technology firm
              that provides cutting edge technologies with a tailor-made
              approach to help businesses achieve their unique goals. By
              leveraging industry best practices, our vendor-neutral solutions
              help clients to develop and mature their IT practices while
              providing data driven solutions.
            </p>
            <Button className="px-5 py-4 mt-4 font-bold rounded-sm">
              <Link href="about_us">About Us</Link>
            </Button>
            <Button className="px-5 py-4 mt-4 font-bold rounded-sm">
              <Link href="about_us">Our Services</Link>
            </Button>
          </div> */}
          {children}
          <Image
            src={image}
            placeholder="blur"
            quality={70}
            className="w-[600px] h-[600px] rounded-2xl"
            alt="Mountains and forests with two cabins"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

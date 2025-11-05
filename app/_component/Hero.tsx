"use client";
import {motion} from "framer-motion";

import Image, {StaticImageData} from "next/image";

type HeroProps = {
  background: string;
  image: StaticImageData | string;
  children: React.ReactNode;
};

const Hero = ({children, image, background}: HeroProps) => {
  return (
    <section
      className="relative bg-cover bg-bottom sm:h-fit py-10 2xl:py-0 md:h-fit lg:h-fit xl:h-screen flex items-center justify-center"
      style={{backgroundImage: `url(/${background})`}}
    >
      <motion.div
        className="absolute inset-0 bg-black/65"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2, ease: "easeOut"}}
      />

      <motion.div
        className="relative z-10 text-center w-full text-white px-4"
        initial={{opacity: 0, y: 40}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.2, ease: "easeOut", delay: 0.3}}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {children}
          <Image
            src={image}
            placeholder="blur"
            quality={70}
            className="sm:w-fit w-fit md:w-fit xl:w-[80%] 2xl:w-[30%] sm:h-fit md:h-fit lg:h-fit xl:h-[600px] rounded-2xl"
            alt="Mountains and forests with two cabins"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

// "use client";
// import {motion} from "framer-motion";
// import Image, {StaticImageData} from "next/image";

// type HeroProps = {
//   background: string;
//   image: StaticImageData | string;
//   children: React.ReactNode;
// };

// const Hero = ({children, image, background}: HeroProps) => {
//   return (
//     <section
//       className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-center"
//       style={{backgroundImage: `url(/${background})`}}
//     >
//       {/* Overlay */}
//       <motion.div
//         className="absolute inset-0 bg-black/65"
//         initial={{opacity: 0}}
//         animate={{opacity: 1}}
//         transition={{duration: 1.2, ease: "easeOut"}}
//       />

//       {/* Content */}
//       <motion.div
//         className="relative z-10 text-center w-full text-white px-4 sm:px-6 md:px-10"
//         initial={{opacity: 0, y: 40}}
//         animate={{opacity: 1, y: 0}}
//         transition={{duration: 1.2, ease: "easeOut", delay: 0.3}}
//       >
//         <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12">
//           {/* Children (text/buttons) */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md sm:max-w-lg md:max-w-xl">
//             {children}
//           </div>

//           {/* Image */}
//           <div className="flex justify-center">
//             <Image
//               src={image}
//               placeholder="blur"
//               quality={70}
//               className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-[600px] h-auto rounded-2xl object-cover"
//               alt="Hero Image"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

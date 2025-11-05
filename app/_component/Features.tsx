import Image from "next/image";

import image2 from "@/public/image_2.png";
import image3 from "@/public/image_3.png";
import {BriefcaseIcon} from "@heroicons/react/24/solid";

const Features = () => {
  return (
    <div className="mt-20 2xl:px-35 px-5">
      <div className="w-full text-center mb-10">
        <h2 className="text-4xl font-bold">
          Our <span className="text-primary">Features</span>
        </h2>
      </div>
      <div className="block bg-[#f7f9fe] 2xl:flex mt-30">
        <div>
          <Image
            src={image2}
            placeholder="blur"
            quality={70}
            className="w-[85%] relative -top-10 left-6"
            alt="Mountains and forests with two cabins"
          />
        </div>
        <div className="leading-8 px-7 pb-3 2xl:px-0 2xl:pb-0">
          <BriefcaseIcon className="text-primary mt-6  w-[60px] h-[60px]" />
          <h2 className="font-semibold"> EASY WORK PROCESS</h2>
          <p className="text-[#666666]">
            We provide quality services and products at a competitive cost
            through our highly optimized work processes. Enjoy hassle-free
            solutions delivery with us.
          </p>
        </div>
      </div>
      <div className="block bg-[#f7f9fe] 2xl:flex 2xl:mt-30 mt-10">
        <div className="leading-8 px-10 py-10 2xl:py-0">
          <BriefcaseIcon className="text-primary mt-6  w-[60px] h-[60px]" />
          <h2 className="font-semibold"> MARKETING ANALYSIS</h2>
          <p className="text-[#666666]">
            We blend consumer behavior and economic trends to confirm and
            improve your business idea and outlook through analysed data about
            customers, competitors, distributors, and other actors and forces in
            the marketplace.
          </p>
        </div>
        <div>
          <Image
            src={image3}
            placeholder="blur"
            quality={70}
            className="w-[85%] relative 2xl:-top-10 top-10 left-6"
            alt="Mountains and forests with two cabins"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

import Image from "next/image";

import image2 from "@/public/image_2.png";
import image3 from "@/public/image_3.png";
import {BriefcaseIcon} from "@heroicons/react/24/solid";

const Features = () => {
  return (
    <div className="mt-20 2xl:px-35 px-5">
      <div className="w-full text-center mb-10">
        <h2 className="text-4xl font-bold">
          Our <span className="text-primary">Core Values</span>
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
          <h2 className="font-semibold"> INNOVATIONS</h2>
          <p className="text-[#666666]">
            We explore and apply modern technologies, especially AI, to build
            practical solutions for our clients.
          </p>
        </div>
      </div>
      <div className="block bg-[#f7f9fe] 2xl:flex 2xl:mt-30 mt-10">
        <div className="leading-8 px-10 py-10 2xl:py-0">
          <BriefcaseIcon className="text-primary mt-6  w-[60px] h-[60px]" />
          <h2 className="font-semibold"> COLLABORATION</h2>
          <p className="text-[#666666]">
            We work together as one team, respecting diverse viewpoints and
            contributions. Continuous Learning: We encourage constant learning,
            experimentation and knowledge sharing.
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
          <h2 className="font-semibold"> INTEGRITY</h2>
          <p className="text-[#666666]">
            We act honestly, protect confidential information and keep our
            commitments to clients and partners.
          </p>
        </div>
      </div>
      <div className="block bg-[#f7f9fe] 2xl:flex 2xl:mt-30 mt-10">
        <div className="leading-8 px-10 py-10 2xl:py-0">
          <BriefcaseIcon className="text-primary mt-6  w-[60px] h-[60px]" />
          <h2 className="font-semibold"> CLIENT IMPACT</h2>
          <p className="text-[#666666]">
            We measure success by the real, positive outcomes our technology
            delivers to clients.
          </p>
        </div>
        <div>
          <Image
            src={image3}
            placeholder="blur"
            quality={70}
            className="w-[85%] relative 2xl:left-0 2xl:-top-10 top-10 left-6"
            alt="Mountains and forests with two cabins"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

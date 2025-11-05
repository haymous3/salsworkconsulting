import Link from "next/link";
import Button from "./Button";
import {BriefcaseIcon} from "@heroicons/react/24/solid";

const AboutUs = () => {
  return (
    <div className="pb-10">
      <div className="w-full text-center py-15 leading-10">
        <h2 className="text-4xl font-bold">
          About <span className="text-primary">Us</span>
        </h2>
        <p className="font-semibold w-[30%] text-[#666666] mx-auto leading-6 mt-4">
          Salworks IT consulting is a boutique information technology firm that
          provides cutting edge technologies with a tailor-made approach to help
          businesses achieve their unique goals.
        </p>
      </div>

      <div className="flex justify-between items-center px-30">
        <div className="w-[30%] font-semibold text-2xl border-r border-r-[#666666]  leading-8">
          <h3>
            We’re <span className="text-primary">Passionate</span> About Growing
            Businesses with{" "}
            <span className="text-primary">lasting effects.</span>
          </h3>
          <Button className="px-8 py-3 mt-3 text-white font-semibold rounded-sm">
            <Link href="/about_us">About Us</Link>
          </Button>
        </div>
        <div className="w-[30%] leading-7">
          <BriefcaseIcon className="text-primary  w-[60] h-[60]" />
          <h3 className="font-semibold mt-3">Our Mission</h3>
          <p className="text-[#666666]">
            Become the most innovative, customer-centric, inclusive and
            sustainable business intelligence Company in the world
          </p>
        </div>
        <div className="w-[30%] leading-7">
          <BriefcaseIcon className="text-primary w-[60] h-[60]" />
          <h3 className="font-semibold mt-3">Our Vision</h3>
          <p className="text-[#666666]">
            To deliver a sustainable business growth for the businesses through
            our business intelligence expertise and collaboration with our
            partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

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
        <p className="font-semibold w-fit px-10 2xl:px-0 2xl:w-[30%] text-[#666666] mx-auto leading-6 mt-4">
          Versavvy IT consulting is a boutique information technology firm that
          provides cutting edge technologies with a tailor-made approach to help
          businesses achieve their unique goals.
        </p>
      </div>

      <div className="block 2xl:flex flex-wrap justify-between items-center 2xl:px-30">
        <div className="2xl:w-[30%] w-full font-semibold px-15 2xl:px-0 2xl: text-left 2xl:text-2xl border-r border-r-[#666666]  leading-8">
          <h3>
            We’re <span className="text-primary">Passionate</span> About Growing
            Businesses with{" "}
            <span className="text-primary">lasting effects.</span>
          </h3>
          <Button className="px-8 py-3 mt-3 text-white font-semibold rounded-sm">
            <Link href="/about_us">About Us</Link>
          </Button>
        </div>
        <div className="2xl:w-[30%] px-15 2xl:px-0 mt-8 2xl:mt-0 leading-7 w-full text-center">
          <BriefcaseIcon className="text-primary mx-auto 2xl:mx-0  w-[60] h-[60]" />
          <h3 className="font-semibold mt-3">Our Mission</h3>
          <p className="text-[#666666]">
            To empower businesses and individuals through intelligent,
            data-driven, and affordable technology solutions that solve
            real-world problems and create measurable impact.
          </p>
        </div>
        <div className="2xl:w-[30%] px-15 2xl:px-0 mt-8 2xl:mt-0 leading-7 w-full text-center">
          <BriefcaseIcon className="text-primary mx-auto 2xl:mx-0  w-[60] h-[60]" />
          <h3 className="font-semibold mt-3">Our Vision</h3>
          <p className="text-[#666666]">
            To be a leading African technology company recognized globally for
            excellence in AI-driven innovation, software development, and
            transformative digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

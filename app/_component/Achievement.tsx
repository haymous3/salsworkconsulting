"use client";

import {BriefcaseIcon, UserIcon} from "@heroicons/react/24/solid";

const Archievement = () => {
  return (
    <>
      <div className="bg-[url('/background_10.svg')] h-[60] bg-cover bg-bottom"></div>
      <div className="bg-[#f9f9f9] flex flex-wrap justify-center pb-10">
        <div className="w-full text-center  py:5 2xl:py-15 leading-15 2xl:leading-10">
          <h2 className="text-2xl px-15 2xl:px-0 2xl:text-4xl font-semibold 2xl:font-bold">
            Best Solution for your{" "}
            <span className="text-primary">Business</span>
          </h2>
          <p className="px-10 2xl:px-0 font-light 2xl:font-semibold 2xl:w-[50%]  mx-auto leading-6 mt-4">
            Our solutions and services are designed to improve quality, drive
            engagements, improve operational efficiencies, remediate risk, and
            enhance opportunities to increase revenue.
          </p>
        </div>
        <div className="mt-10 2xl:mt-0 block 2xl:flex flex-wrap w-full justify-around 2xl:px-60">
          <div className="text-center leading-10 2xl:leading-0">
            <BriefcaseIcon className="text-primary text-center mx-auto w-[60] h-[60]" />
            <h3 className="text-md font-bold 2xl:text-3xl">300</h3>
            <p className="text-md font-semibold 2xl:text-2xl">Projects</p>
          </div>
          <div className="mt-15 2xl:mt-0 text-center leading-10 2xl:leading-0">
            <UserIcon className="text-primary text-center mx-auto w-[60] h-[60]" />
            <h3 className="text-md font-bold 2xl:text-3xl">300</h3>
            <p className="text-md font-semibold 2xl:text-2xl">No. of client</p>
          </div>
          <div className="mt-15 2xl:mt-0 text-center leading-10 2xl:leading-0">
            <UserIcon className="text-primary text-center mx-auto w-[60] h-[60]" />
            <h3 className="text-md font-bold 2xl:text-3xl">300</h3>
            <p className="text-md font-semibold 2xl:text-2xl">
              {" "}
              Cup of Coffees
            </p>
          </div>
          <div className="mt-15 2xl:mt-0 text-center leading-10 2xl:leading-0">
            <UserIcon className="text-primary text-center mx-auto w-[60] h-[60]" />
            <h3 className="text-md font-bold 2xl:text-3xl">300</h3>
            <p className="text-md font-semibold 2xl:text-2xl">Award</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Archievement;

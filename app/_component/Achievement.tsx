"use client";

import {BriefcaseIcon, UserIcon} from "@heroicons/react/24/solid";

const Archievement = () => {
  return (
    <>
      <div className="bg-[url('/background_10.svg')] h-[60] bg-cover bg-bottom"></div>
      <div className="bg-[#f9f9f9] flex flex-wrap justify-center pb-10">
        <div className="w-full text-center py-15 leading-10">
          <h2 className="text-4xl font-bold">
            Best Solution for your{" "}
            <span className="text-primary">Business</span>
          </h2>
          <p className="font-semibold w-[50%] mx-auto leading-6 mt-4">
            Our solutions and services are designed to improve quality, drive
            engagements, improve operational efficiencies, remediate risk, and
            enhance opportunities to increase revenue.
          </p>
        </div>
        <div className="flex w-full justify-around px-60">
          <div className="text-center leading=7">
            <BriefcaseIcon className="text-primary text-center mx-auto w-[60] h-[60]" />
            <h3 className="font-bold text-3xl">300</h3>
            <p className="font-semibold text-2xl">Projects</p>
          </div>
          <div className="text-center">
            <UserIcon className="text-primary text-center mx-auto w-[60] h-[60]" />
            <h3 className="font-bold text-3xl">300</h3>
            <p className="font-semibold text-2xl">No. of client</p>
          </div>
          <div className="text-center">
            <UserIcon className="text-primary text-center mx-auto w-[60] h-[60]" />
            <h3 className="font-bold text-3xl">300</h3>
            <p className="font-semibold text-2xl"> Cup of Coffees</p>
          </div>
          <div className="text-center">
            <UserIcon className="text-primary text-center mx-auto w-[60] h-[60]" />
            <h3 className="font-bold text-3xl">300</h3>
            <p className="font-semibold text-2xl">Award</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Archievement;

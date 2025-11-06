"use client";

import {BriefcaseIcon} from "@heroicons/react/24/solid";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const Service = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const servicesDetails = [
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Network Solution",
      text: "Versavvy provides a range of services related to the design, installation, maintenance, and repair of networking systems. These systems can include computer networks, data centers, and internet and wireless networks. We work with businesses, organizations, and government agencies to provide network solutions that meet their specific needs and goals.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Data Solution",
      text: "We provide systems and tools designed to help businesses collect, store, manage, and analyze data. These solutions can be used to help businesses make informed decisions, improve processes, and gain insights into their operations. Our data solutions can be used in a variety of industries, including finance, healthcare, retail, and manufacturing.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Market Research",
      text: "Versavvy helps with gathering and analyzing data about consumers, competitors, and the market to inform business decisions. Our market research service has helped businesses understand the needs and preferences of their target customers, as well as the competitive landscape in which they operate.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Software Development",
      text: "We have a team of software developers ready to build functional and efficient solutions at scale to meet your business needs. Our software developers craft custom software solutions, maintain and update existing software systems while improving efficiency and productivity.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Cloud Engineering",
      text: "We help businesses design, build, and maintain cloud computing systems. Our cloud engineers work with businesses to understand their needs and develop cloud solutions that meet those needs from choosing the right cloud provider and architecture, configuring and setting up the cloud environment to the security of their cloud infrastructure.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Business Analysis",
      text: "At Versavvy, we employ cutting-edge tools to identify and define business needs and opportunities then determine and implement solutions to meet those needs. Our business analysts work with businesses to make informed decisions, improve processes, and increase efficiency and effectiveness.",
    },
  ];

  return (
    <div className="bg-[#f7f9fe] px-20 py-20">
      <div className="w-full text-center mb-10">
        <h2 className="text-4xl font-bold">
          Our <span className="text-primary">Services</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {servicesDetails.map((service, index) => {
          const isOpen = openIndex === index;
          const words = service.text.split(" ");
          const preview =
            words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");

          return (
            <motion.div
              key={service.heading}
              className="w-[30%] min-w-[300px] px-6 py-6 text-center bg-white border border-transparent hover:border-primary hover:border-2 rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-1"
              layout
            >
              {service.icon}
              <h2 className="text-primary text-2xl font-semibold mt-4">
                {service.heading}
              </h2>

              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.p
                    key="expanded"
                    className="mt-3 text-gray-600"
                    initial={{height: 0, opacity: 0}}
                    animate={{height: "auto", opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.4, ease: "easeInOut"}}
                  >
                    {service.text}
                  </motion.p>
                ) : (
                  <motion.p
                    key="collapsed"
                    className="mt-3 text-gray-600"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                  >
                    {preview}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => handleToggle(index)}
                className="mt-4 text-primary font-medium hover:underline"
                whileTap={{scale: 0.95}}
              >
                {isOpen ? "Read Less" : "Read More"}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;

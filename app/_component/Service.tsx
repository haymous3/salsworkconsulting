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
      heading: "Artificial Intelligence Solution",
      text: "Versavvy provides a range of services including machine learning models, natural language processing, and predictive analytics.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Software and Application Development",
      text: "We design and deployment of custom applications and digital platforms.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Data Engineering and Integration",
      text: "Versavvy helps with building and maintaining robust data pipelines, APIs, and automation systems.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Cloud-Based Solutions",
      text: "We leverage on modern infrastructure such as Microsoft Azure and AWS to deliver scalable systems.",
    },
    {
      icon: (
        <BriefcaseIcon className="text-primary mx-auto w-[60px] h-[60px]" />
      ),
      heading: "Technology Consulting",
      text: "We offering strategic guidance and technical expertise for organizations adopting AI and digital transformation.",
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

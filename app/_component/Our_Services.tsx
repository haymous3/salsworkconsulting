"use client";

import Image from "next/image";

import Service_1 from "@/public/service_1.jpg";
import Service_2 from "@/public/service_2.jpg";
import Service_3 from "@/public/service_3.jpg";
import Service_4 from "@/public/service_4.jpg";
import Service_5 from "@/public/service_5.jpg";
import Service_6 from "@/public/service_6.jpg";

const OurServices = () => {
  const OurServiceDetails = [
    {
      img: Service_1,
      heading: "Network Solutions",
      text: "We are solution partner to businesses across the globe looking for a true IT partner, we offer a comprehensive range of services to ensure your unique IT needs are met and managed perfectly.\nOur services include network design and architecture, network monitoring, performance optimization, managed IT Services, IT Consulting & Technology Roadmap, Cloud Computing, Network Security, Backup & Data Recovery.",
    },
    {
      img: Service_2,
      heading: "Market Research",
      text: "Are you looking to make informed decisions about your business, but not sure where to start? Salworks can help. We offer a range of market research services that will provide you with the data and insights you need to make strategic decisions about your products, services, and target market.\nOur team of experienced professionals uses a variety of methods, including surveys, focus groups, and data analysis, to gather accurate and actionable information about your market. With our help, you’ll be able to understand your customers better, identify new opportunities, and stay ahead of the competition. Trust Salworks to help your business succeed.",
    },
    {
      img: Service_3,
      heading: "Business Analysis",
      text: "At Salworks, we look to improve the efficiency and profitability of businesses. Our team of experienced professionals has a proven track record of helping businesses for growth and streamline operations.\nWith our comprehensive analysis and expert insights, we’ll help you make informed decisions that drive success. Whether you’re looking to enter a new market, expand your product offerings, or simply optimize your current operations, we have the tools and expertise to help you reach your goals. Let us be your trusted partner in business analysis and watch your company thrive.",
    },
    {
      img: Service_4,
      heading: "Cloud Engineering",
      text: "Are you ready to take your business to the next level with the power of the cloud? Salworks can help. Our team of experienced cloud engineers has a proven track record of helping businesses like yours migrate to the cloud, optimize their infrastructure, and build scalable, reliable applications.\nWe offer a range of cloud engineering services, including cloud migration, cloud optimization, and custom cloud solution development. With our help, you’ll be able to leverage the benefits of the cloud, including increased flexibility, scalability, and cost-efficiency. Let us be your trusted partner in cloud engineering and watch your business thrive.",
    },
    {
      img: Service_5,
      heading: "Software Development",
      text: "Building custom software solutions that drive success for your business is our strong suite. Our team of experienced developers has a proven track record of helping businesses like yours bring their ideas to life with high-quality software systems.\nFrom web and mobile applications to custom integrations and automation tools, we have the skills and expertise to help you build the software you need to achieve your business goals. We offer a range of software development services, including design, development, and testing, to ensure that your software is reliable, user-friendly, and delivers value to your customers. Let us be your trusted partner in software development and watch your business grow.",
    },
    {
      img: Service_6,
      heading: "Consulting",
      text: "Whether you’re looking to enter a new market, expand your product offerings, or optimize your operations, we have the tools and expertise to help you succeed. We offer a range of business consulting services, including market analysis, business planning, and execution support, to ensure that you have the right strategy in place to drive growth and achieve your goals. Let us be your trusted partner in business consulting and watch your business thrive.\nAre you looking to take your business to the next level, but not sure where to start? We have a proven track record of helping businesses like yours achieve their goals through strategic planning and execution.",
    },
  ];

  return (
    <>
      <h2 className="text-4xl text-center font-bold mt-30">
        Our <span className="text-primary">Services</span>
      </h2>
      {OurServiceDetails.map((service, i) => (
        <div
          key={i}
          className={`block 2xl:flex justify-between items-center px-10 2xl:px-100 mt-10 2xl:mt-25 ${
            i % 2 === 0 ? "flex-row-reverse" : ""
          }`}
        >
          <Image
            src={service.img}
            placeholder="blur"
            quality={70}
            className="w-full 2xl:w-[45%] relative top:0 2xl:-top-10 2xl:left-6 left-0"
            alt="Service image"
          />
          <div className="mt-10 2xl:mt-0 max-w-md leading-7">
            <h1 className="bg-primary rounded-4xl text-white font-bold w-fit px-4 py-4 mb-6">
              {i + 1}
            </h1>
            <h2 className="text-3xl font-bold text-gray-800">
              {service.heading}
            </h2>
            {service.text.split("\n").map((line, index) => (
              <p
                key={index}
                className=" text-justify text-md text-gray-700 mt-2"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default OurServices;

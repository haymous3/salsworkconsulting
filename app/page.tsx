import AboutUs from "./_component/About_Us";
import Archievement from "./_component/Achievement";
import Features from "./_component/Features";
import Footer from "./_component/Footer";
import Header from "./_component/Header";
import Hero from "./_component/Hero";
import Service from "./_component/Service";
import FadeInSection from "./_component/FadeInSection";

import hero from "@/public/hero.png";
import Button from "@/app/_component/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Hero image={hero} background="background_7.jpg">
        <div className="w-full sm:w-fit mt-24 md:mt-28 sm:mt-20 lg:mt-28 xl-[0rem] 2xl:mt-10 md:w-fit md:px-20 lg:w-fit 2xl:w-[50%] text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-secondary font-bold text-sm sm:text-base md:text-lg mb-2">
            GROW YOUR BUSINESS
          </h4>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Build Intelligent, Data Driven Solutions With
            <span className="text-secondary"> Versavvy</span>
          </h3>

          <p className="text-sm sm:text-base md:text-lg  text-justify opacity-90  max-w-2xl drop-shadow leading-7 2xl:leading-8">
            Versavvy Limited is a boutique information technology company that
            builds intelligent, data driven and affordable technology solutions
            to help organizations achieve their unique goals. We focus on
            artificial intelligence, software and application development, data
            engineering and integration, cloud based solutions and technology
            consulting. <br /> Our approach is vendor neutral and client
            focused. We combine industry best practices with a tailored delivery
            model to improve quality, drive engagement, enhance operational
            efficiency, reduce risk and unlock new opportunities for revenue
            growth and digital transformation.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <Button className="px-5 py-3 sm:px-6 sm:py-4 font-bold rounded-sm">
              <Link href="about_us">About Us</Link>
            </Button>
            <Button className="px-5 py-3 sm:px-6 sm:py-4 font-bold rounded-sm">
              <Link href="our_services">Our Services</Link>
            </Button>
          </div>
        </div>
      </Hero>
      <FadeInSection>
        <Archievement />
      </FadeInSection>

      <FadeInSection>
        <AboutUs />
      </FadeInSection>

      <FadeInSection>
        <Service />
      </FadeInSection>

   
        <Features />
    

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
}

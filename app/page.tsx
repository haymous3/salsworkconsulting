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
        <div className="w-full sm:w-fit mt-[6rem] md:mt-[7rem] sm:mt-[5rem] lg:mt-[7rem] xl-[0rem] 2xl:mt-[0rem] md:w-fit md:px-20 lg:w-fit xl:w-[50%] text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-primary font-bold text-sm sm:text-base md:text-lg mb-2">
            GROW YOUR BUSINESS
          </h4>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Get Your Result-driven Analysis With{" "}
            <span className="text-primary">Salworks</span>
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify opacity-90  max-w-2xl drop-shadow leading-7">
            Salworks IT consulting is a boutique information technology firm
            that provides cutting edge technologies with a tailor-made approach
            to help businesses achieve their unique goals. By leveraging
            industry best practices, our vendor-neutral solutions help clients
            to develop and mature their IT practices while providing data driven
            solutions.
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

      <FadeInSection>
        <Features />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
}

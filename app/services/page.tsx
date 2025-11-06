import Link from "next/link";
import Button from "../_component/Button";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Hero from "../_component/Hero";

import hero3 from "@/public/hero-3.png";
import Team from "../_component/Team";
import OurServices from "../_component/Our_Services";
import ChooseUs from "../_component/Choose_Us";
import FadeInSection from "../_component/FadeInSection";

const Page = () => {
  return (
    <>
      <Header />
      <FadeInSection>
        <div className="relative">
          <Hero background="background_6.jpg" image={hero3}>
            <div className="2xl:w-[55%] mt-15 2xl:mt-0 text-left w-full">
              <h4 className="text-primary font-bold">SERVICE</h4>
              <h3 className="text-4xl sm:text-5xl mb-0 md:text-6xl font-bold 2xl:mb-4 leading-tight drop-shadow-lg">
                Services
                <span className="text-primary"> We Offer!</span>
              </h3>
              <p className=" text-justify sm:text-lg md:text-xl opacity-90 max-w-2xl drop-shadow leading-7">
                Salworks IT consulting is a boutique information technology firm
                that provides cutting edge technologies with a tailor-made
                approach to help businesses achieve their unique goals.
              </p>
              <Button className="px-5 py-4 mt-4 font-bold rounded-sm">
                <Link href="about_us">View Services</Link>
              </Button>
            </div>
          </Hero>
          <div className="absolute bottom-0 h-[100px] z-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMjgwIDBsLTI2NiA5MS41MmE3Mi41OSA3Mi41OSAwIDAgMS0zMC43NiAzLjcxTDAgMHYxNDBoMTI4MHoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNMTI4MCAwbC0yNjIuMSAxMTYuMjZhNzMuMjkgNzMuMjkgMCAwIDEtMzkuMDkgNkwwIDB2MTQwaDEyODB6Ii8+PC9nPjwvc3ZnPg==')] bg-size-[100%_100px] scale-[1_1] pointer-events-none w-full left-0 right-0"></div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <Team />
      </FadeInSection>

      <OurServices />

      <FadeInSection>
        <ChooseUs />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default Page;

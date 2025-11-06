import Link from "next/link";
import Button from "../_component/Button";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Hero from "../_component/Hero";
import hero4 from "@/public/hero_4.png";
import Hiring from "../_component/Hiring";

export const metadata = {
  title: "About",
};

const Page = () => {
  return (
    <>
      <Header />
      <div className="relative">
        <Hero background="background_5.jpg" image={hero4}>
          <div className="2xl:w-[55%] mt-15 2xl:mt-0 text-left w-full">
            <h4 className="text-primary font-bold">Who we are?</h4>
            <h3 className="text-4xl sm:text-5xl mb-0 md:text-6xl font-bold 2xl:mb-4 leading-tight drop-shadow-lg">
              Want to Know a little{" "}
              <span className="text-primary">
                About <br /> us?
              </span>{" "}
              Let us tell you.
            </h3>

            <p className=" text-justify sm:text-lg md:text-xl opacity-90 max-w-2xl drop-shadow leading-7">
              At Versavvy IT consulting, we provide cutting edge technologies
              with a tailor-made approach to help businesses achieve their
              unique goals. Our vendor-neutral solutions leverage industry best
              practices to develop client data management and data driven
              solutions.
            </p>
            <Button className="px-5 py-4 mt-4 font-bold rounded-sm">
              <Link href="about_us">LEARN MORE</Link>
            </Button>
          </div>
        </Hero>
        <div className="absolute bottom-0 h-[100px] z-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMjgwIDBsLTI2NiA5MS41MmE3Mi41OSA3Mi41OSAwIDAgMS0zMC43NiAzLjcxTDAgMHYxNDBoMTI4MHoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNMTI4MCAwbC0yNjIuMSAxMTYuMjZhNzMuMjkgNzMuMjkgMCAwIDEtMzkuMDkgNkwwIDB2MTQwaDEyODB6Ii8+PC9nPjwvc3ZnPg==')] bg-size-[100%_100px] scale-[1_1] pointer-events-none w-full left-0 right-0"></div>
      </div>
      <Hiring />
      <Footer />
    </>
  );
};

export default Page;

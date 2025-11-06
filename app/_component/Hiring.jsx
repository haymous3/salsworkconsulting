// import Image from "next/image";

// import aboutUs from "@/public/about_us.png";

// import Button from "@/app/_component/Button";

// const Hiring = () => {
//   return (
//     <div className="bg-[#E1E1E1] flex flex-wrap rounded-sm justify-between mx-100 my-10 px-10 pt-5">
//       <div className="w-[50%] leading-8">
//         <h3 className="font-bold">Want to join us?</h3>
//         <h2 className="font-bold text-3xl mt-5">
//           We’re <span className="text-primary">Hiring</span>
//         </h2>
//         <p className="font-semibold">
//           We’d love to have you in our Team. click the button below to enquire
//           about Open positions.
//         </p>
//         <Button className="px-5 py-5 mt-5 font-bold rounded-sm text-white">
//           VIEW OPEN POSITIONS
//         </Button>
//       </div>
//       <div className="w-[367px] h-[367px]">
//         <Image
//           src={aboutUs}
//           placeholder="blur"
//           quality={70}
//           className="sm:w-fit w-fit md:w-fit xl:w-[80%] 2xl:max-w-full 2xl:h-fit sm:h-fit md:h-fit lg:h-fit xl:h-[600px] rounded-2xl"
//           alt="Mountains and forests with two cabins"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hiring;

import Image from "next/image";
import aboutUs from "@/public/about_us.png";
import Button from "@/app/_component/Button";

const Hiring = () => {
  return (
    <section className="bg-[#E1E1E1] flex flex-wrap items-center justify-between rounded-2xl mx-10 2xl:mx-80 my-16 px-10 py-10 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="w-full md:w-[50%] leading-8 mb-8 md:mb-0 ">
        <h3 className="font-bold text-gray-700 text-lg">Want to join us?</h3>
        <h2 className="font-extrabold text-4xl mt-4 mb-3 text-gray-900">
          We’re <span className="text-primary">Hiring</span>
        </h2>
        <p className="font-medium text-gray-700 mb-6">
          We’d love to have you on our team. Click the button below to enquire
          about open positions.
        </p>
        <Button className="bg-primary text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105">
          VIEW OPEN POSITIONS
        </Button>
      </div>

      <div className="w-full md:w-[45%] flex justify-center">
        <div className="relative group">
          <Image
            src={aboutUs}
            alt="Team working together"
            placeholder="blur"
            quality={80}
            className="rounded-2xl w-[300px] md:w-[400px] lg:w-[450px] transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;

import Image from "next/image";
import team_1 from "@/public/team_1.png";
import team_2 from "@/public/team_2.png";

const Team = () => {
  const teamDetail = [
    {
      img: team_1,
      text: "We’re a Team of Excellence Driven Professionals.",
    },
    {
      img: team_2,
      text: "We Provide a Complete Solution for your Business.",
    },
  ];

  return (
    <>
      {teamDetail.map((team, i) => (
        <div
          key={i}
          className={`block 2xl:flex justify-between px-15 2xl:px-80 mt-10 2xl:mt-25 ${
            i % 2 === 0 ? "flex-row-reverse" : ""
          }`}
        >
          <Image
            src={team.img}
            placeholder="blur"
            quality={70}
            className="w-full wxl:w-[45%] relative top:0 2xl:-top-10 2xl:left-6 left-0"
            alt="Team image"
          />
          <div className="max-w-md">
            <h2 className="2xl:text-2xl text-lg font-semibold text-gray-800">
              {team.text}
            </h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;

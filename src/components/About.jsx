import React from "react";
import One from "../../public/one.png";
import Points from "../../public/points.svg";
const About = ({
  image,
  desc,
  day,
  name,
  date,
  anotherDate,
  time,
  level,
  bgColor,
  width,
  bg,
}) => {
  return (
    <div>
      <div
        style={{ backgroundColor: `${bg}` }}
        className="relative flex h-[92px] items-center justify-between px-8 py-6 transition duration-300 ease-in-out"
      >
        <div className="flex w-[440px] items-center gap-6">
          <img
            className="h-11 w-11 rounded-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
            src={image}
            alt="User Img"
          />
          <div>
            <p className="mb-1 text-[14px] font-semibold text-[#252733] transition duration-300 ease-in-out">
              {desc}
            </p>
            <p className="text-[12px] font-normal text-[#C5C7CD] transition duration-300 ease-in-out">
              {day}
            </p>
          </div>
        </div>
        <div className="w-[208px]">
          <p className="mb-1 text-[14px] font-semibold text-[#252733] transition duration-300 ease-in-out">
            {name}
          </p>
          <p className="text-[12px] font-normal text-[#C5C7CD] transition duration-300 ease-in-out">
            {date}
          </p>
        </div>
        <div className="w-[140px]">
          <p className="mb-1 text-[14px] font-semibold text-[#252733] transition duration-300 ease-in-out">
            {anotherDate}
          </p>
          <p className="text-[12px] font-normal text-[#C5C7CD] transition duration-300 ease-in-out">
            {time}
          </p>
        </div>
        <div className="w-[104px]">
          <div
            style={{
              backgroundColor: `${bgColor}`,
              width: `${width}`,
              height: "24px",
              borderRadius: "100px",
              padding: "5px 12px",
            }}
            className="transition duration-300 ease-in-out hover:bg-gray-400"
          >
            <p className="text-[11px] font-bold text-white">{level}</p>
          </div>
        </div>
        <div className="absolute right-[41px] cursor-pointer transition duration-300 ease-in-out hover:rotate-360">
          <img src={Points} alt="Points Img" />
        </div>
      </div>
      <hr className="h-[1.5px] bg-[#DFE0EB]" />
    </div>
  );
};

export default About;

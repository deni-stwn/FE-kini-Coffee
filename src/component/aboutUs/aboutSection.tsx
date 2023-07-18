import React from "react";

export interface AboutProps {
  banner: string;
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutProps> = ({ banner, title, description }) => {
  return (
    <div className="flex md:gap-5 lg:gap-12 xl:gap-24">
      <div className="hidden md:block md:min-w-[350px] lg:min-w-[529px]">
        <img
          src={banner}
          alt=""
          className="h-full object-cover object-center"
        />
      </div>
      <div className="text-center flex justify-center items-center md:text-left">
        <div>
          <div className="flex justify-center md:justify-start">
            <h1 className="text-4xl md:w-[276px] md:text-6xl font-semibold my-7 font-PlayfairDisplay md:my-0 md:mb-6 md:leading-[85px]">
              {title}
            </h1>
          </div>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-inter text-gray-500 leading-8 lowercase">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

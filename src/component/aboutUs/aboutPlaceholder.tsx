import React from "react";
import ContentLoader from "react-content-loader";

const PlaceholderAboutSection: React.FC = () => (
  <div className="flex justify-center mt-10 md:mt-0 md:w-full">
    <div className={` w-auto mx-5 lg:mx-20`}>
      <div className="flex md:gap-5 lg:gap-10">
        <div className="hidden md:block md:min-w-[350px] lg:min-w-[529px]">
          <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect className="w-[529px] h-[551px]" />
          </ContentLoader>
        </div>
        <div className="text-center flex justify-center items-center md:text-left font-PlayfairDisplay">
          <div className="">
            <div className="flex justify-center md:justify-start">
              <h1 className="text-4xl md:w-[70%] md:text-6xl font-semibold my-7 md:my-0 md:mb-6 md:leading-[85px]">
                <ContentLoader
                  speed={2}
                  width="100%"
                  height="100%"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="0" y="50" width="80%" height="30" />
                  <rect x="0" y="100" width="100%" height="30" />
                </ContentLoader>
              </h1>
            </div>
            <p className="text-base md:text-1xl lg:text-2xl leading-8 lowercase">
              <ContentLoader
                speed={2}
                width="100%"
                height="100%"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" width="100%" height="15" />
                <rect x="0" y="30" width="100%" height="15" />
                <rect x="0" y="60" width="100%" height="15" />
              </ContentLoader>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PlaceholderAboutSection;

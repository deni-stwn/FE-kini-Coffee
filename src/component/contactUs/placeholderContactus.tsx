import React from "react";
import ContentLoader from "react-content-loader";

const PlaceholderContactus = () => {
  return (
    <div className="md:w-full -ml-10 md:ml-0">
      <div className="md:flex md:justify-around md:mt-28 mx-10 lg:mx-20">
        <div className="w-[400px] h-[600px] hidden md:flex">
          <ContentLoader
            speed={2}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className="w-full h-full"
          >
            <rect className="hidden md:flex md:w-full md:h-[600px]" />
          </ContentLoader>
          {/* <img
            src={data?.[0].image_contact}
            alt=""
            className="hidden md:flex md:w-full md:h-[600px] object-cover object-center"
          /> */}
        </div>
        <div className="w-[315px] mt-16">
          <div className="flex justify-start mt-24 ml-10 md:mt-0 md:-ml-14 md:-mb-10">
            {/* <Title title="Contact Us" /> */}
            <ContentLoader
              speed={2}
              width="100%"
              height="100%"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="50" width="100%" height="40" />
            </ContentLoader>
          </div>
          <ul>
            <li className="text-base md:text-1xl lg:text-2xl leading-8 lowercase md:mt-12 ml-10 md:-ml-14">
              <ContentLoader
                speed={2}
                width="100%"
                height="100%"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" width="100%" height="15" />
                <rect x="0" y="40" width="100%" height="15" />
                <rect x="0" y="80" width="100%" height="15" />
                <rect x="0" y="120" width="100%" height="15" />
              </ContentLoader>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderContactus;

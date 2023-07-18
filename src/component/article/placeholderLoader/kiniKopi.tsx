import React from "react";
import ContentLoader from "react-content-loader";

const PlcaeholderKiniKopi = () => {
  return (
    <div className="mx-5 md:mx-12">
      <div className="w-auto my-10 md:h-[227px] xl:h-[250px] md:flex md:my-8">
        <div className="w-[280px]">
          <ContentLoader
            speed={2}
            className="w-full h-[227px] object-cover rounded-lg"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect className="w-full h-full" x="0" y="0" />
          </ContentLoader>
        </div>
        <div className="flex justify-center items-center">
          <div className="md:ml-5">
            <ContentLoader
              speed={2}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              className="w-full h-full"
            >
              <rect x="0" y="80" width="80%" height="30" />
            </ContentLoader>

            <ContentLoader
              speed={2}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              className="w-full h-full -mt-16 md:mt-0"
            >
              <rect x="0" y="0" width="100%" height="15" />
              <rect x="0" y="30" width="100%" height="15" />
              <rect x="0" y="60" width="100%" height="15" />
            </ContentLoader>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlcaeholderKiniKopi;

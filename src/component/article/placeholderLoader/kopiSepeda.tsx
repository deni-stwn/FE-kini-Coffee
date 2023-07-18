import React from "react";
import ContentLoader from "react-content-loader";

const PlaceholderKopiSepeda = () => {
  return (
    <div className="flex justify-center">
      <div className="article-item md:w-[460px] md:h-[507px] mx-6">
        <ContentLoader
          speed={2}
          className="h-[180px] w-full md:h-[300px] object-cover object-center"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" className="w-full h-full" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          className="text-xl md:text-2xl w-full font-PlayfairDisplay -mt-2 mb-2"
        >
          <rect x="0" y="30" width="80%" height="30" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          className="article-content w-full text-base -mt-20"
        >
          <rect x="0" y="0" width="100%" height="12" />
          <rect x="0" y="30" width="100%" height="12" />
          <rect x="0" y="60" width="100%" height="12" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          className="text-xl md:text-2xl w-full font-PlayfairDisplay -mt-14"
        >
          <rect x="0" y="0" width="100%" height="30" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default PlaceholderKopiSepeda;

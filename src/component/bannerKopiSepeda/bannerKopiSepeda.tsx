import React from "react";
import img1 from "../../assets/story-img/img-story-1.svg";
import img2 from "../../assets/story-img/img-story-2.svg";
import img3 from "../../assets/story-img/img-story-3.svg";
import logo from "../../assets/story-img/img-story-logo.svg";

const BannerKopiSepeda = () => {
  return (
    <div className="mt-24 md:mt-[139px] md:w-full">
      <div className="grid grid-cols-6 mx-10 gap-2 lg:grid-rows-3 lg:gap-5 lg:mx-20 lg:grid-flow-col">
        <div className="col-start-1 col-span-3 row-span-1 lg:col-start-1 lg:col-span-2 ">
          <img src={img1} alt="kopi" className="w-full" />
        </div>
        <div className="col-start-4 col-span-3 row-span-1 lg:col-start-3 lg:col-span-2">
          <img src={img2} alt="kini" className="w-full" />
        </div>
        <div className="relative col-start-4 col-span-3 row-span-3 lg:col-start-5 lg:col-span-12 lg:row-span-full xl:col-span-8">
          <img src={img3} alt="sepeda" />
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="absolute bottom-1 right-24 sm:-bottom-4 sm:right-36 md:right-48 lg:bottom-20 lg:right-56 xl:bottom-80 xl:right-60"
            />
          </div>
        </div>
        <div className="col-start-1 col-span-3 row-span-1 lg:col-start-1 lg:col-span-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-PlayfairDisplay font-semibold">
            {" "}
            Cerita - Cerita Tentang Kopi dan Sepeda
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerKopiSepeda;

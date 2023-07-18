import React from "react";
import BannerList from "./BannerList";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchDataApi } from "../../services/api";
import { HeaderInterface } from "../../interface/bannerInterface";
import ContentLoader from "react-content-loader";

const Banner: React.FC = () => {
  const { data, loading, error } = useFetchData<HeaderInterface[]>(() =>
    fetchDataApi("/banner/title")
  );

  if (error) return <div></div>;

  return (
    <>
      <div className="h-full">
        <div className="h-[100vh] md:w-full mx-auto bg-[#222222] hidden md:block">
          <div className="flex justify-center relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] absolute top-52 md:top-24 md:p-10 lg:top-30 xl:top-48 z-40 text-white leading-[86px] font-PlayfairDisplay text-center">
              {data?.[0].banner_title}
            </h1>
          </div>
        </div>

        <div className="md:flex md:justify-center ">
          <div className="md:w-[90%] md:mx-auto md:-mt-[50vh] lg:-mt-[50vh]">
            <div className="flex justify-center relative md:hidden">
              <h1 className="text-7xl mx-10 xl:text-[80px] absolute top-52 md:top-28 md:p-10 lg:top-32 xl:top-48 z-40 text-white leading-[86px] font-PlayfairDisplay text-center">
                {data?.[0].banner_title}
              </h1>
            </div>
            {loading ? (
              <div className="h-[100vh] md:w-full object-center object-cover ">
                <ContentLoader
                  speed={3}
                  width="100%"
                  height="100%"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect className="w-full h-screen" />
                </ContentLoader>
              </div>
            ) : (
              <div className="">
                <BannerList />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

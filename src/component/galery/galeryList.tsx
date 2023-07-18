import React from "react";
import Title from "../title";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchDataApi } from "../../services/api";
import { GaleryInterface } from "../../interface/galeryInterface";
import PlaceholderGalery from "./placeholderGalery";

const GaleryList = () => {
  const { data, loading, error } = useFetchData<GaleryInterface[]>(() =>
    fetchDataApi("/galery")
  );

  if (loading) {
    return (
      <div className="mx-10 mt-16 md:mt-[139px]">
        <Title title={"Gallery"} />
        <div className="flex justify-around flex-wrap gap-5 md:gap-10">
          <PlaceholderGalery />
          <PlaceholderGalery />
          <PlaceholderGalery />
        </div>
      </div>
    );
  }
  if (error) return <div></div>;

  return (
    <>
      <div>
        <Title title={"Gallery"} />
        <div className="mx-7 md:mx-10 lg:mx-14 xl:mx-24 flex justify-around flex-wrap gap-10">
          {data?.map((item) => (
            <div className="relative group" key={item.id}>
              <div className="rounded-lg overflow-hidden relative hover:scale-95 transition-all duration-500">
                <img
                  src={`${item.image}`}
                  alt=""
                  className="w-[300px] h-[375px] md:w-[300px] lg:w-[400px] md:h-[450px] lg:h-[550px] object-cover object-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
                />
              </div>
              <span className="absolute bottom-10 left-16 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#AFAFAF] text-5xl lg:text-6xl font-PlayfairDisplay font-semibold">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GaleryList;

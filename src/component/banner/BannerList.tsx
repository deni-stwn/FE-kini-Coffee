import React from "react";
import Carousel from "./Carousel";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchDataApi } from "../../services/api";
import { CarouselItem } from "../../interface/bannerInterface";

const BannerList = () => {
  const {data, error}= useFetchData<CarouselItem[]>(() => fetchDataApi('/banner/carousel'))

  if (error) return <div>Not Found</div>;

  return (
      <Carousel data={data} />
  );
};

export default BannerList;

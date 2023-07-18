import React from "react";
import Title from "../title";
import Button from "../button/Button";
import { youtubeInterface } from "../../interface/youtubeInterface";
import PlaceholderYoutube from "./placeholderYoutube";

export interface youtubeProps {
  data: youtubeInterface[] | null;
  youtubeUserName: string;
  loading: boolean;
}

const navigateToUrl = (url: string) => {
  window.open(url, "_blank");
};

const YoutubeSection: React.FC<youtubeProps> = ({
  data,
  youtubeUserName,
  loading,
}) => {
  return (
    <div className="md:w-full mt-16 md:mt-[139px]">
      <div>
        <Title title="Our YouTube" />
      </div>
      <div className="mx-7 md:mx-10 lg:mx-14 xl:mx-24 flex justify-center flex-wrap gap-6">
        {data?.map((item) =>
          loading ? (
            <PlaceholderYoutube />
          ) : (
            <div
              key={item.id}
              className="md:w-[320px] lg:w-[350px] xl:w-[397px] md:justify-between py-5 md:py-0"
            >
              <a
                href={item.URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => navigateToUrl(item.URL)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full object-cover object-center"
                />
                <h1 className="md:text-xl text-base mt-2 lg:mt-3 xl:mt-[18px] font-medium font-inter">
                  {item.title}
                </h1>
              </a>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center py-8 text-">
        <Button
          link={`https://www.youtube.com/@${youtubeUserName}`}
          ButtonStyle={
            "bg-[#222222] w-1/2 p-1 md:w-80 md:text-xl lg:text-2xl xl:text-[32px] text-white text-center font-PlayfairDisplay"
          }
        >
          Visit Our Channel
        </Button>
      </div>
    </div>
  );
};

export default YoutubeSection;

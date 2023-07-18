import React from "react";
import { AboutUsInterface } from "../../interface/aboutInterface";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchDataApi } from "../../services/api";
import AboutSection from "./aboutSection";
import PlaceholderAboutSection from "./aboutPlaceholder";

const AboutUs = () => {
  const { data, loading } = useFetchData<AboutUsInterface[]>(() =>
    fetchDataApi("/about")
  );

  return (
    <div className="flex justify-center mt-16 md:mt-[139px] md:w-full">
      <div className={` w-auto mx-7 md:mx-10 lg:mx-14 xl:mx-24`}>
        {data?.map((item) =>
          loading ? (
            <PlaceholderAboutSection />
          ) : (
            <AboutSection
              key={item.id}
              banner={item.banner}
              description={item.description}
              title={item.title}
            />
          )
        )}
      </div>
    </div>
  );
};

export default AboutUs;

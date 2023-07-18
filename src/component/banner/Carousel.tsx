import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/dots.css";
import { CarouselItem } from "../../interface/bannerInterface";

export interface CarouselProps {
  data: CarouselItem[] | null;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [dots, setDots] = useState(true);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      if (window.innerWidth < 768) {
        setDots(false);
      } else {
        setDots(true);
      }
    };

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider {...settings} dots={dots} className="dots w-full h-screen">
        {data?.map((item, index) => (
          <div className="h-screen w-full" key={index}>
            <img
              key={item.id}
              src={`${item.url}`}
              alt={"carousel"}
              className="md:w-full h-full object-center object-cover"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;

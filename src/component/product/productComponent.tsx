import React from "react";
import { PropsProduct } from "../../interface/productsInterface";
import Button from "../button/Button";
import PlaceholderProductComponent from "./placeholderProduct";

export const ProductComponent: React.FC<PropsProduct> = ({
  image,
  alt,
  title,
  message,
  phoneNumber,
}) => {
  return (
    <div className="">
      <div className="px-2 md:px-4 xl:px-5">
        <div className="md:w-auto ">
          {image ? (
            <img
              src={`${image}`}
              alt={alt}
              className="w-full h-[200px] md:h-[300px] lg:h-[420px] xl:h-[450px] object-cover"
            />
          ) : (
            <PlaceholderProductComponent />
          )}
          <h2 className="font-PlayfairDisplay text-[16px] md:text-lg lg:text-2xl py-1">
            {title}
          </h2>
          <Button
            link={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              message
            )}`}
            ButtonStyle={
              "text-sm md:text-lg lg:text-2xl flex justify-center w-full text-white bg-[#222222] font-PlayfairDisplay px-2 py-2"
            }
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Title from "../title";

export interface visiMisiProps {
  visi: string | null | undefined;
  misi: string | null | undefined;
}

const VisiMisiSection: React.FC<visiMisiProps> = ({ visi, misi }) => {
  return (
    <div className="md:w-full mt-16 md:mt-[139px]">
      <Title title="Visi & Misi" />
      <div className="text-base lg:text-xl xl:text-2xl font-inter text-gray-500 md:flex leading-8 gap-10 text-center md:text-left px-7 md:px-10 lg:px-14 xl:px-24 md:text-lg">
        <p>{visi}</p>
        <p className="py-8 md:py-0">{misi}</p>
      </div>
    </div>
  );
};

export default VisiMisiSection;

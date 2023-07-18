import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="text-center md:text-start mx-7 md:mx-10 lg:mx-14 xl:mx-24 md:pb-10 font-PlayfairDisplay text-4xl md:text-6xl md:mt-28 font-semibold my-3 mb-7">
      {title}
    </h1>
  );
};

export default Title;

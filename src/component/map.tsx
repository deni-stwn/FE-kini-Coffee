import React from "react";
import Title from "./title";

const Maps = () => {
  return (
    <>
      <div className="md:w-full -mt-5 md:mt-32">
        <div className="mx-7 md:mx-10 lg:mx-14 xl:mx-24 lg:flex overflow-hidden md:my-14">
          <div className="md:w-full md:-mt-12">
            <div className="flex justify-start mt-14 -mb-5 md:-mt-14 -ml-7 md:-ml-10 lg:-ml-14 xl:-ml-24 md:-mb-20 md:pb-10">
              <Title title="Location Map" />
            </div>
            <p className="my-6 text-sm leading-5 md:text-base  xl:text-2xl font-inter text-gray-500 md:my-0 md:pr-20">
              Kini Kopi adalah kedai kopi di Sukamantri, Kabupaten Bandung, Jawa
              Barat. Kami menawarkan pengalaman kopi unik dan memuaskan. Biji
              kopi pilihan kami dipanggang dengan hati-hati untuk menghadirkan
              cita rasa yang kaya dan aroma yang menggugah selera. Selain itu,
              kami menciptakan lingkungan yang hangat dan ramah untuk pelanggan
              kami.
            </p>
          </div>
          <div className="md:w-full mt-8 lg:mt-0">
            <iframe
              title="kini coffee"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.630522840571!2d107.76465920949252!3d-7.052628292920277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c7e4d80886a1%3A0x6984dbe8e17a1d5d!2sKini%20Kopi!5e0!3m2!1sid!2sid!4v1687798967030!5m2!1sid!2sid"
              loading="lazy"
              className="w-full h-[252px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maps;

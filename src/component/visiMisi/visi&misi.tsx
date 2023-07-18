import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchDataApi } from "../../services/api";
import { visiMisiInterface } from "../../interface/visiMisiInterface";
import VisiMisiSection from "./visiMisiSection";
import Title from "../title";
import PlaceholderVisiMisi from "./placeholderVis";

const VisiMisi = () => {
  const { data, loading, error } = useFetchData<visiMisiInterface[]>(() =>
    fetchDataApi("/visimisi")
  );

  if (loading)
    return (
      <div className="md:w-full mt-16 md:mt-[139px]">
        <Title title="Visi & Misi" />
        <div className="px-10 md:px-20 md:flex gap-16">
          <PlaceholderVisiMisi />
          <PlaceholderVisiMisi />
        </div>
      </div>
    );
  if (error) return <div></div>;

  return <VisiMisiSection visi={data?.[0].visi} misi={data?.[0].visi} />;
};

export default VisiMisi;

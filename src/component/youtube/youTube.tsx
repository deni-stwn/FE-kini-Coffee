import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchDataApi } from "../../services/api";
import { youtubeInterface } from "../../interface/youtubeInterface";
import { ContactInterface } from "../../interface/contactUsInterface";
import YoutubeSection from "./youtubeSection";
import Title from "../title";
import Button from "../button/Button";
import PlaceholderYoutube from "./placeholderYoutube";

const YouTube = () => {
  const { data, loading, error } = useFetchData<youtubeInterface[]>(() =>
    fetchDataApi("/youtube")
  );

  const contactData = useFetchData<ContactInterface[]>(() =>
    fetchDataApi("/contact")
  );
  const youtubeUserName = contactData.data?.[0]?.youtube_channel || "";

  if (error) return <div></div>;

  return (
    <YoutubeSection
      data={data}
      youtubeUserName={youtubeUserName}
      loading={loading}
    />
  );
};

export default YouTube;

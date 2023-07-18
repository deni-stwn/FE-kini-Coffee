import React from "react";
import Title from "../title";
import PhoneLogo from "../../assets/phone-pageContact.svg";
import emailLogo from "../../assets/email-pageContact.svg";
import instagramLogo from "../../assets/instagram-pageContact.svg";
import youtubeLogo from "../../assets/youtube-pageContact.svg";
import { useFetchData } from "../../hooks/useFetchData";
import { fetchDataApi } from "../../services/api";
import {
  ContactInterface,
  ContactList,
} from "../../interface/contactUsInterface";
import PlaceholderContactus from "./placeholderContactus";

const ContactUs = () => {
  const { data, loading, error } = useFetchData<ContactInterface[]>(() =>
    fetchDataApi("/contact")
  );
  const handleLinkClick = (href: string) => {
    window.open(href, "_blank");
  };

  if (loading) {
    return <PlaceholderContactus />;
  }
  if (error) return <div></div>;

  const listContact: ContactList[] = [
    {
      img: [
        {
          baseUrl: `${PhoneLogo}`,
          alt: "img-contact-whatsapp",
          name: "",
        },
      ],
      title: `${data?.[0]?.phone_number}`,
      href: `https://wa.me/${data?.[0]?.phone_number}`,
    },
    {
      img: [
        {
          baseUrl: `${emailLogo}`,
          alt: "img-contact-email",
          name: "",
        },
      ],
      title: `${data?.[0]?.email}`,
      href: `mailto:${data?.[0]?.email}`,
    },
    {
      img: [
        {
          baseUrl: `${instagramLogo}`,
          alt: "img-contact-instagram",
          name: "",
        },
      ],
      title: `${data?.[0]?.username_instagram}`,
      href: `https://www.instagram.com/${data?.[0]?.username_instagram}/`,
    },
    {
      img: [
        {
          baseUrl: `${youtubeLogo}`,
          alt: "img-contact-youtube",
          name: "",
        },
      ],
      title: `${data?.[0]?.youtube_channel}`,
      href: `https://www.youtube.com/@${data?.[0]?.youtube_channel}`,
    },
  ];

  return (
    <>
      <div className="md:w-full mt-16 md:mt-[139px] -ml-10 md:ml-0">
        <div className="md:flex md:justify-around md:mt-28 mx-10 lg:mx-20">
          <div className="w-[400px]">
            <img
              src={data?.[0].image_contact}
              alt=""
              className="hidden md:flex md:w-full md:h-[600px] object-cover object-center"
            />
          </div>
          <div className="w-auto">
            <div className="flex justify-start mt-24 ml-0 md:mt-0 lg:-ml-8 xl:-ml-16 md:-mb-10">
              <Title title="Contact Us" />
            </div>
            <ul>
              {listContact.map((att: ContactList, index: number) => {
                return (
                  <li className="cursor-pointer w-full" key={index}>
                    <button
                      onClick={() => handleLinkClick(att.href)}
                      className="flex justify-center text-lg text-left items-center font-inter md:m-8 m-4 pl-6 md:pl-0 font-medium lg:text-xl"
                    >
                      <div className="w-[46px]">
                        <img src={att.img[0].baseUrl} alt={att.img[0].alt} />
                      </div>
                      <div className="w-auto">
                        <span>{att.title}</span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

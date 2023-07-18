import React from "react";
import Facebook from "../assets/imgArticleDetail/facebookLogo.svg";
import Pinterest from "../assets/imgArticleDetail/pinterestLogo.svg";
import Twiiter from "../assets/imgArticleDetail/twitterLogo.svg";
import Email from "../assets/imgArticleDetail/EmailLogo.svg";

const ShareToLink = () => {
  const url = window.location.href;
  return (
    <div className="flex justify-center">
      <div className="w-[715px] mx-5 md:mx-20">
        <h3 className="font-PlayfairDisplay font-bold my-3 text-1xl">
          Share to:
        </h3>
        <div className="flex gap-5">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="facebook-Img" />
          </a>
          <a
            href={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Pinterest} alt="pinterest-img" />
          </a>
          <a
            href={`https://twitter.com/share?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twiiter} alt="twitter-img" />
          </a>
          <a
            href={`mailto:?body=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Email} alt="email-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareToLink;

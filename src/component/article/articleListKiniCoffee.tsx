import React from "react";
import Title from "../title";
import { Link } from "react-router-dom";
import { formatArticleParam } from "../../util/formatArticleParam";
import Ellipsis from "react-lines-ellipsis";
import ButtonPagination from "../button/ButtonPagination";
import { articleProps } from "../../interface/ArticleInterface";
import PlcaeholderKiniKopi from "./placeholderLoader/kiniKopi";

const ArticleListKiniCoffee: React.FC<articleProps> = ({
  data,
  showPagination,
  handleNext,
  handlePrev,
  page,
  totalPages,
  loading,
}) => {
  return (
    <div className="md:w-full mb-4 mt-16 md:mt-[139px]">
      <Title title={"Artikel"} />
      <div className="mx-7 md:mx-10 lg:mx-14 xl:mx-24">
        {data?.map((article) => {
          const htmlContent = article.content;
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlContent, "text/html");

          const imageElement = doc.querySelector("img");
          const imageSrc = imageElement
            ? imageElement.getAttribute("src") || ""
            : "";

          const paragraphElements = doc.querySelectorAll("p");
          const firstParagraphText = paragraphElements[0]
            ? paragraphElements[0].textContent || ""
            : "";
          const secondParagraphText = paragraphElements[1]
            ? paragraphElements[1].textContent || ""
            : "";

          return loading ? (
            <div key={article.id}>
              <PlcaeholderKiniKopi />
            </div>
          ) : (
            <div
              className="w-auto my-10 md:h-[227px] xl:h-[250px] md:flex md:my-8"
              key={article.id}
            >
              {imageSrc && (
                <div className="w-full md:max-w-[240px] lg:max-w-[280px]">
                  <img
                    src={imageSrc}
                    alt="Article"
                    className="w-full h-[227px] object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="flex justify-center items-center">
                <div className="md:ml-5 ">
                  <h3 className="mt-2 font-semibold text-base md:text-[32px]">
                    {article.title}
                  </h3>
                  {firstParagraphText && (
                    <Ellipsis
                      className="text-[14px] py-5 text-[#888888] md:text-lg lg:text-xl xl:text-2xl"
                      text={firstParagraphText}
                      maxLine={2}
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  )}
                  {!firstParagraphText && secondParagraphText && (
                    <Ellipsis
                      className="text-[14px] py-5 text-[#888888] md:text-lg lg:text-xl xl:text-2xl"
                      text={secondParagraphText}
                      maxLine={2}
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  )}
                  <Link
                    to={`/article/${formatArticleParam(article.title)}`}
                    className="md:text-[20px] font-PlayfairDisplay text-white text-sm bg-[#222222] w-full px-2 py-1 text-center"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-end">
          {showPagination && (
            <ButtonPagination
              handlePrev={handlePrev}
              handleNext={handleNext}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleListKiniCoffee;

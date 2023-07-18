import React from "react";
import Title from "../title";
import { Link } from "react-router-dom";
import { formatArticleParam } from "../../util/formatArticleParam";
import Ellipsis from "react-lines-ellipsis";
import ButtonPagination from "../button/ButtonPagination";
import { articleProps } from "../../interface/ArticleInterface";
import PlaceholderKopiSepeda from "./placeholderLoader/kopiSepeda";

const ArticlesListKopiSepeda: React.FC<articleProps> = ({
  data,
  showPagination,
  handleNext,
  handlePrev,
  page,
  totalPages,
  loading,
}) => {
  return (
    <div className="lg:-mt-36 mt-20 md:w-full">
      <Title title={"Cerita Kita"} />
      <div className="flex justify-around flex-wrap gap-24">
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
              <PlaceholderKopiSepeda />
            </div>
          ) : (
            <div
              className="article-item md:w-[460px] md:h-[507px] mx-8 font-inter"
              key={article.id}
            >
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt="Article"
                  className="h-[180px] w-full md:h-[300px] object-cover object-center"
                />
              )}
              <h3 className="text-2xl lg:text-3xl xl:text-[32px] font-PlayfairDisplay pt-4">
                {article.title}
              </h3>
              {firstParagraphText && (
                <Ellipsis
                  className="text-[12px] py-5 text-[#888888] md:text-lg xl:text-2xl"
                  text={firstParagraphText}
                  maxLine={2}
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              )}
              {!firstParagraphText && secondParagraphText && (
                <Ellipsis
                  className="text-[12px] py-5 text-[#888888] md:text-lg  xl:text-2xl"
                  text={secondParagraphText}
                  maxLine={2}
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              )}
              <Link
                to={`/article/${formatArticleParam(article.title)}`}
                className="border-black border flex justify-center font-PlayfairDisplay font-semibold text-center p-1 md:p-2"
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex justify-start mt-4 ml-8 md:ml-20">
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
  );
};

export default ArticlesListKopiSepeda;

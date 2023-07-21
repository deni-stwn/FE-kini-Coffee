import React, { useEffect, useState } from "react";
import Ellipsis from "react-lines-ellipsis";
import { Link, useParams } from "react-router-dom";
import Title from "../title";
import { formatArticleParam } from "../../util/formatArticleParam";
import { ArticleInterface } from "../../interface/ArticleInterface";
import { fetchDataApi } from "../../services/api";
import { ApiResponse } from "../../interface/articleApiResponse";
import { getRandomArticles } from "../../util/getRandomArticle";
import PlaceholderAnotherArticle from "./placeholder/placeholderAnotherArticle";

const AnotherArticle: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const [data, setData] = useState<ArticleInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetchDataApi(`/article`);
      const responseData = res as ApiResponse;

      const kiniCoffeeArticles = responseData?.data?.kiniCoffee || [];
      const kopiSepedaArticles = responseData?.data?.kopiSepeda || [];

      const allArticles = [...kiniCoffeeArticles, ...kopiSepedaArticles];
      setData(allArticles);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };

  if (error) return <div></div>;

  const decodedTitle = title?.replace(/-/g, " ");

  const filteredArtikelList = data.filter(
    (artikel) => artikel.title !== decodedTitle
  );

  const randomArticles = getRandomArticles(filteredArtikelList, 3);

  return (
    <div className="mt-16 md:mt-[139px]  md:w-full">
      <Title title={"Artikel Lainnya"} />
      <div className="flex mx-5 md:mx-14  gap-12 justify-evenly flex-wrap lg:flex-nowrap">
        {randomArticles.map((article: ArticleInterface, index) => {
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
            <div key={index}>
              <PlaceholderAnotherArticle />
            </div>
          ) : (
            <div key={index} className="article-item md:w-[360px] md:h-[507px]">
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
                  className="article-content text-[12px] py-4 text-[#888888] md:text-[16px]"
                  text={firstParagraphText}
                  maxLine={2}
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              )}
              {!firstParagraphText && secondParagraphText && (
                <Ellipsis
                  className="article-content text-[12px] py-4 text-[#888888] md:text-[16px]"
                  text={secondParagraphText}
                  maxLine={2}
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              )}
              <Link
                to={`/article/${formatArticleParam(article.title)}`}
                className="border-black border flex justify-center font-PlayfairDisplay font-semibold text-center p-2"
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnotherArticle;

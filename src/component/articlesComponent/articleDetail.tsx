import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/detailStyle.css";
import Nav from "../nav";
import ShareToLink from "../shareToLink";
import Footer from "../footer";
import { parseHTML } from "../../util/parseHTML";
import { fetchDataApi } from "../../services/api";
import { ArticleInterface } from "../../interface/ArticleInterface";
import { ApiResponse } from "../../interface/articleApiResponse";
import AnotherArticle from "./anotherArticle";
import PlaceholderDetailArticle from "./placeholder/placeholderDetaillArticle";

const DetailArticle = () => {
  const { title } = useParams<{ title: string }>();
  const [data, setData] = useState<ArticleInterface[]>([]);
  const [loading, setLoading] = useState(true);

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
      console.error(error);
    }
  };

  const decodedTitle = title?.replace(/-/g, " ");
  const article = data.find((item) => item.title === decodedTitle);

  const htmlContent = parseHTML(article?.content);

  console.log(htmlContent);

  return (
    <>
      <Nav navbarClass={""} />
      <div className="mt-20 md:mt-[139px] md:w-full">
        <div className="flex justify-center">
          {loading ? (
            <div className="w-auto mx-5">
              <PlaceholderDetailArticle />
            </div>
          ) : (
            <div
              className="w-[715px] md:mx-20 mx-5"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
          )}
        </div>
        <ShareToLink />
        <AnotherArticle />
      </div>
      <Footer />
    </>
  );
};

export default DetailArticle;

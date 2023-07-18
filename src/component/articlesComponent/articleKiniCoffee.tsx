import React from "react";
import useArticleData from "../../hooks/useArticleData";
import ArticleListKiniCoffee from "../article/articleListKiniCoffee";

const ArticleKiniCoffee: React.FC = () => {
  const { data, loading, page, totalPages, handlePrevClick, handleNextClick } =
    useArticleData(`/article/kini-coffee`, 1, 3);

  const showPagination = totalPages > 1;

  return (
    <ArticleListKiniCoffee
      data={data}
      showPagination={showPagination}
      handleNext={handleNextClick}
      handlePrev={handlePrevClick}
      page={page}
      totalPages={totalPages}
      loading={loading}
    />
  );
};

export default ArticleKiniCoffee;

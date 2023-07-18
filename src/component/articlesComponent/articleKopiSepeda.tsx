import React from "react";
import ArticlesListKopiSepeda from "../article/articlesListKopiSepeda";
import useArticleData from "../../hooks/useArticleData";

const ArticleKopiSepeda: React.FC = () => {
  const {
    data,
    loading,
    error,
    page,
    totalPages,
    handlePrevClick,
    handleNextClick,
  } = useArticleData(`/article/kopi-sepeda`, 1, 6);

  if (error) return <div></div>;

  const showPagination = totalPages > 1;

  return (
    <ArticlesListKopiSepeda
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

export default ArticleKopiSepeda;

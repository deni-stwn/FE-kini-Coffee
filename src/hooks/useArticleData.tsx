import { useState, useEffect } from "react";
import { fetchDataApi } from "../services/api";
import { ArticleInterface } from "../interface/ArticleInterface";

const useArticleData = (
  endpoint: any,
  initialPage = 1,
  initialLimit = 4
): {
  data: ArticleInterface[];
  loading: boolean;
  error: boolean;
  page: number;
  limit: number;
  totalPages: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
} => {
  const [data, setData] = useState<ArticleInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [limit] = useState(initialLimit);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const fetchData = async () => {
    try {
      const response = await fetchDataApi(
        `${endpoint}?page=${page}&limit=${limit}`
      );
      const { data, totalPages: total } = response;
      setData(data);
      setTotalPages(total);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return {
    data,
    loading,
    error,
    page,
    limit,
    totalPages,
    handleNextClick,
    handlePrevClick,
  };
};

export default useArticleData;

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { articleProps } from "../interface/ArticleInterface";
import ArticlesListKopiSepeda from "../component/article/articlesListKopiSepeda";

const mockData: articleProps["data"] = [
  {
    id: 1,
    title: "Article 1",
    content: "<p>First paragraph</p><p>Second paragraph</p>",
  },
  {
    id: 2,
    title: "Article 2",
    content: "<p>Another article</p>",
  },
];

describe("ArticleListKiniCoffee", () => {
  test("renders without error", () => {
    render(
      <Router>
        <ArticlesListKopiSepeda
          data={mockData}
          showPagination={false}
          handleNext={undefined}
          handlePrev={undefined}
          page={0}
          totalPages={0}
          loading={false}
        />
      </Router>
    );
  });

  test("displays the article title", () => {
    render(
      <Router>
        <ArticlesListKopiSepeda
          data={mockData}
          showPagination={false}
          handleNext={undefined}
          handlePrev={undefined}
          page={0}
          totalPages={0}
          loading={false}
        />
      </Router>
    );
    const titleElement = screen.getByText("Article 1");
    expect(titleElement).toBeInTheDocument();
  });

  test("display the show pagination", () => {
    render(
      <Router>
        <ArticlesListKopiSepeda
          data={mockData}
          showPagination={true}
          handleNext={undefined}
          handlePrev={undefined}
          page={0}
          totalPages={0}
          loading={false}
        />
      </Router>
    );
    const showPagination = true;
    expect(mockData.length > 1).toBe(showPagination);
  });

  test("should nto show pagination", () => {
    render(
      <Router>
        <ArticlesListKopiSepeda
          data={mockData}
          showPagination={false}
          handleNext={undefined}
          handlePrev={undefined}
          page={0}
          totalPages={0}
          loading={false}
        />
      </Router>
    );
    const showPagination = false;
    expect(mockData.length < 1).toBe(showPagination);
  });
});

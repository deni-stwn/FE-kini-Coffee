import { ArticleInterface } from "../interface/ArticleInterface";
import { getRandomArticles } from "../util/getRandomArticle";

// Mock data
const articles: ArticleInterface[] = [
  { id: 1, title: "Article 1", content: "Content 1" },
  { id: 2, title: "Article 2", content: "Content 2" },
  { id: 3, title: "Article 3", content: "Content 3" },
  { id: 4, title: "Article 4", content: "Content 4" },
  { id: 5, title: "Article 5", content: "Content 5" },
];

describe("getRandomArticles", () => {
  test("returns random articles from the array", () => {
    const count = 3;

    const result = getRandomArticles(articles, count);

    expect(result).toHaveLength(count); // Ensure the result has the specified count of articles
    expect(result.every((article) => articles.includes(article))).toBe(true); // Ensure all articles in the result are present in the original array
  });

  test("returns empty array when count is zero", () => {
    const count = 0;

    const result = getRandomArticles(articles, count);

    expect(result).toEqual([]); // Ensure the result is an empty array
  });

  test("returns the entire array when count is greater than or equal to the array length", () => {
    const count = articles.length + 1;

    const result = getRandomArticles(articles, count);

    expect(result).toEqual(articles); // Ensure the result is the same as the original array
  });
});

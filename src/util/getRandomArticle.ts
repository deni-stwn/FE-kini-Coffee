import { ArticleInterface } from "../interface/ArticleInterface"

export const getRandomArticles = (array: ArticleInterface[], count: any) => {
  const shuffled = array.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

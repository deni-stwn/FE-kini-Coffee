import { ArticleInterface } from "./ArticleInterface";

export interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    kiniCoffee: ArticleInterface[];
    kopiSepeda: ArticleInterface[];
  };
}
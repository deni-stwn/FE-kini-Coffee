export interface articleProps {
  data: ArticleInterface[] | null;
  showPagination: any;
  handleNext: any;
  handlePrev: any;
  page: number;
  totalPages: number;
  loading: boolean;
}

export interface ArticleInterface {
  id: number;
  title: string;
  content: any;
  created_at?: string | undefined;
  updated_at?: string;
}

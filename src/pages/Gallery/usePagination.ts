import { useNavigate, useParams } from "react-router-dom";

export function usePagination() {
  const navigate = useNavigate();
  const { page } = useParams<{ page: string }>();
  const pageNumber = Number(page ?? 1);

  const onPrevPage = () => navigate(`/page/${pageNumber - 1}`);
  const onNextPage = () => navigate(`/page/${pageNumber + 1}`);

  return {
    pageNumber,
    onPrevPage,
    onNextPage
  }
}

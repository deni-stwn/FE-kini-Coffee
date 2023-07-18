import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke atas (0, 0) saat berpindah halaman
  }, [pathname]);

  return null;
};

export default ScrollToTop;

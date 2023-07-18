import React from "react";
import ContentLoader from "react-content-loader";

const PlaceholderDetailArticle: React.FC = () => (
  <ContentLoader
    speed={2}
    className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
    viewBox="0 0 715 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
  </ContentLoader>
);

export default PlaceholderDetailArticle;

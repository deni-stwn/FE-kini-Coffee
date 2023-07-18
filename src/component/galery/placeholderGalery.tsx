import ContentLoader from "react-content-loader";

const PlaceholderGalery: React.FC = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={550}
    viewBox="0 0 400 550"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
  </ContentLoader>
);

export default PlaceholderGalery;

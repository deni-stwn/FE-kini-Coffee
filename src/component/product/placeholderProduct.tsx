import ContentLoader from "react-content-loader";

const PlaceholderProductComponent: React.FC = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={450}
    viewBox="0 0 300 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
  </ContentLoader>
);

export default PlaceholderProductComponent
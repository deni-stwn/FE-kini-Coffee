import ContentLoader from "react-content-loader";

const PlaceholderVisiMisi: React.FC = () => (
  <ContentLoader
    className="w-auto"
    speed={2}
    viewBox="0 0 600 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="40" rx="3" ry="3" width="100%" height="15" />
    <rect x="0" y="70" rx="3" ry="3" width="100%" height="15" />
    <rect x="0" y="100" rx="3" ry="3" width="100%" height="15" />
    <rect x="0" y="130" rx="3" ry="3" width="100%" height="15" />
  </ContentLoader>
);

export default PlaceholderVisiMisi
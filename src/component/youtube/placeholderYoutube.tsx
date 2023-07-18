import ContentLoader from "react-content-loader";

const PlaceholderYoutube: React.FC = () => (
  <div className="md:w-[320px] lg:w-[350px] xl:w-[395px] md:justify-between py-5 md:py-0">
    <ContentLoader
      className="w-full"
      speed={2}
      height={280}
      viewBox="0 0 400 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="100%" height="90%" />
    </ContentLoader>
  </div>
  // <ContentLoader
  //   className="w-auto"
  //   speed={2}
  //   height={280}
  //   viewBox="0 0 400 300"
  //   backgroundColor="#f3f3f3"
  //   foregroundColor="#ecebeb"
  // >
  //   <rect x="0" y="0" rx="3" ry="3" width="100%" height="90%" />
  // </ContentLoader>
);

export default PlaceholderYoutube;

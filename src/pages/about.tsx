import AboutUs from "../component/aboutUs/aboutUs";
import Footer from "../component/footer";
import GaleryList from "../component/galery/galeryList";
import Nav from "../component/nav";
import VisiMisi from "../component/visiMisi/visi&misi";
import YouTube from "../component/youtube/youTube";

const About = () => (
  <>
    <Nav navbarClass={"text-[#222222]"} />
    <AboutUs />
    <VisiMisi />
    <GaleryList />
    <YouTube />
    <Footer />
  </>
);

export default About;

import Header from "../components/header/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const MainPage = () => (
  <div className="min-h-screen max-w-7xl lg:max-w-8xl 3xl:max-w-10xl mx-auto container flex flex-col">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default MainPage;

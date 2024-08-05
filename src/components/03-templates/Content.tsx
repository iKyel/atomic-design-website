// images

// Icon

// Templates
import Footer from "./Footer";
import MainNews from "./MainNews";
import MainVideo from "./MainVideo";
import MainContent from "./MainContent";

const Content = () => {
  return (
    <div>
      <div className="main">
        {/* <!---------------- content ------------------> */}
        <MainContent />
        <MainVideo />
        <MainNews />
        <Footer />
        {/* <!---------------- //content ------------------> */}
      </div>
    </div>
  );
};

export default Content;

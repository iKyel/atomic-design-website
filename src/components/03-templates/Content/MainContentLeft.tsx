/* eslint-disable jsx-a11y/anchor-is-valid */
// images


// icons

// components
import MainContentLeftTop from "./Left/MainContentLeftTop";
import News from "./Left/News";


const MainContentLeft = () => {
  return (
    <>
      <div className="content-left">
        <div className="content-left_main">
          <MainContentLeftTop />
          <News />
        </div>
      </div>
    </>
  );
};

export default MainContentLeft;

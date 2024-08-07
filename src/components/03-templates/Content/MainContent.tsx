/* eslint-disable jsx-a11y/anchor-is-valid */
// images

// icon


// Components
import MainContentLeft from "./MainContentLeft"
import MainContentRight from "./MainContentRight";

const MainContent = () => {
  return (
    <>
      <div className="container main_content">
        <MainContentLeft />
        <MainContentRight />
      </div>
    </>
  );
};

export default MainContent;

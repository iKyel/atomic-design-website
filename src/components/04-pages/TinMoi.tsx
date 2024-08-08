import React from "react";
import Header from "../03-templates/Header";
import Footer from "../03-templates/Footer";
import NewsDetail from "../03-templates/Content/Left/NewsDetail";
import HotTopic from "../03-templates/Content/Right/HotTopic";
const TinMoi = () => {
  return (
    <>
      <Header />
      <div className="container main_content">
        <div className="content-left_main">
          <NewsDetail />
          <HotTopic />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TinMoi;

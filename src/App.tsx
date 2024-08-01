/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
// import Header from './components/Header';
// import Ads from './components/Ads';
// import NavBar from './components/NavBar';
// import Banner from './components/Banner';
// import Content from './components/Content';
import Header from "./components/03-templates/Header";
import Banner from "./components/03-templates/Banner";
import Content from "./components/03-templates/Content";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Content />
    </>

    // <div className="wrapper">
    //   {/* <!---------------- header -----------------> */}
    //   <Header />
    //   {/* <!---------------- //header ------------------> */}

    //   {/* <!---------------- ads ------------------> */}
    //   <Ads />
    //   {/* <!---------------- //ads ------------------> */}

    //   {/* <!---------------- navbar ------------------> */}
    //   <NavBar />
    //   {/* <!---------------- //navbar ------------------> */}

    //   {/* <!---------------- banner ------------------> */}
    //   <Banner />
    //   {/* <!---------------- //banner ------------------> */}

    //   {/* <!---------------- content ------------------> */}
    //   <Content />
    // </div>
  );
}

export default App;

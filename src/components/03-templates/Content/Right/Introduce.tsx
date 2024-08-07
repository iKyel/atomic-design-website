import React from "react";
import introduce from "../../../../data/Content/Right/Introduce.json"

const Introduce = () => {
  return (
    <>
      <div className="item gioi-thieu">
        <div className="title">
          <p>{introduce.title.toUpperCase()}</p>
          <div className="line">
            <div className="red"></div>
            <div className="gray"></div>
          </div>
        </div>
        <div className="noi-dung">
          <p>
            {introduce.paragraphs}
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduce;

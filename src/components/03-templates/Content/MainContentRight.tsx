/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import HotTopic from "./Right/HotTopic"
import Introduce from "./Right/Introduce"
import MuchAsked from "./Right/MuchAsked"
import Questions from "./Right/Questions"



const MainContentRight = () => {
  return (
    <>
      <div className="content-right">
          <div className="main-content-right">
            <Introduce />
            <MuchAsked />
            <Questions />
            <HotTopic />
          </div>
        </div>
    </>
  )
}

export default MainContentRight

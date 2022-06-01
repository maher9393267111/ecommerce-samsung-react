import React from "react";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Textslider = () => {
  const [activateright, setActivateright] = useState(false);

  // when click on right arrow transition to right

  const handleRight = () => {
    setActivateright(true);
    console.log("right go----->");
    if (activateright) {
      setActivateright(false);
      console.log("right go to zerooo----->");
    }
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <h1 className="mb-8 mt-8   font-bold sm:text-lg  lg:text-2xl">
              Popular Topics
            </h1>
          </div>
        </div>

        <div>
          {/* ---left zero arrow  */}
          <div className=" relative">
            {activateright && (
              <div className="absolute prev-btn">
                <button onClick={handleRight}>
                  <BsFillArrowLeftCircleFill />
                </button>
              </div>
            )}

            {/* ----next- arrow-- */}

            {!activateright && (
              <div className="">
                <button className=" next-btn absolute" onClick={handleRight}>
                  <BsFillArrowRightCircleFill />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className=" overflow-hidden  w-screen">
          <div
            className={`cat-card grid transform  ${
              activateright ? "translate-x-[-100%]" : "transform translate-x-0"
            }  lg:auto-cols-[225px]  sm:auto-cols-[125px]  transition duration-500  gap-8  grid-flow-col   grid-rows-2 `}
          >
            <div>Web Design</div>
            <div>WordPress</div>
            <div>Html</div>
            <div>Css</div>
            <div>user interface</div>
            <div>Photoshop</div>
            <div>Adobe Xd</div>
            <div>Html5</div>
            <div>Web Development</div>
            <div>Figma</div>
            <div>Bootstrap</div>
            <div>Elementor</div>
            <div>Loading page optimazition</div>
            <div>Web design Buisness</div>
            <div>Javascript</div>
            <div>DreamWeaver</div>
            <div>Vuejs</div>
            <div>Reactjs</div>
            <div>Php</div>
            <div>laravel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textslider;

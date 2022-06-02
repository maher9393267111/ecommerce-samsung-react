import React from "react";
import { useState, useContext } from "react";
import { HomeContext } from "../../context/index";
const All = () => {
  const [shwodrop, setShwodrop] = useState(false);

  const { slide, setSlide } = useContext(HomeContext);

  const handleClick = () => {
    setShwodrop(!shwodrop);

    console.log(shwodrop);
    console.log("clicked");
  };

  return (
    <div>
      <div className="pb-20">
        {/* ---flex-- */}

        <div className="flex h-[66px]  mt-6 justify-between">
          {/* -left-- */}

          <div>
            {/* ---flex inside- */}

            <div>
              <div className="flex gap-6 h-[66px]">
                {/* ---filter- */}

                <div className=" h-full w-[94px]  border-2  border-black">
                  <div className="relative h-full w-full">
                    <div className="absolute top-6 ml-[8px] flex gap-2">
                      <div>
                        <div className=" pt-[5px] w-5 h-5">
                          <img
                            className=" object-cover"
                            src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-8-1/1024/sort_down8-256.png"
                            alt=""
                          />
                        </div>
                      </div>

                      {/* -text- */}

                      <div>
                        <p
                          onClick={() => setSlide(!slide)}
                          className="text-sm font-semibold"
                        >
                          Filter{" "}  {slide ? "Hide" : "Show"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* sortby- */}

                <div className=" h-full border-2 border-black w-[138px] ">
                  <div>
                    {/* -flex- */}

                    <div className="flex justify-between sm:mt-2 lg:mt-[10px] ml-2 sm:text-[9px] lg:text-[13px]">
                      <div>
                        <h1> Sort By</h1>
                        <h1> Most Popular</h1>

                        {/* -drop down- */}

                        {shwodrop && (
                          <div
                            className="relative
                          transition-all duration-300
                        "
                          >
                            <div className="absolute h-[90px] sm:top-[32px]  w-[142px]  shadow-xl  lg:top-[16px] left-[-10px]">
                              <div>
                                <ul className="drop-list  mt-[10px] text-center text-[16px]">
                                  <li>Most popular</li>
                                  <li> highest rated</li>
                                  <li>Neawest</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <p className="w-8 h-8">
                        <img
                          onClick={handleClick}
                          src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-down-512.png"
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---right- */}

          <div>
            <div>
              <h1>1,311 results</h1>
            </div>
          </div>
        </div>
        




      </div>
    </div>
  );
};

export default All;

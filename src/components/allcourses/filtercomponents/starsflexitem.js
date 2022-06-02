import React from 'react';

const Starsflexitem = () => {
    return (
        <div>
            <div className="container h-[12px] mb-4 flex">
          <div>
            {" "}
            <input className=" w-4 h-4 rounded-full " type="checkbox" />
          </div>

          <div className="">
            <div className=" relative w-[90px] h-[71px]  top-[-18px]">
              <img
                className=" relative h-full w-full object-contain"
                src="https://cdn4.iconfinder.com/data/icons/infographics-2-1/512/5_stars-256.png"
                alt=""
              />
            </div>
          </div>

          <div
          
          className="text-sm mt-[2px] "
          >4.5 && up (442)</div>
        </div>
        </div>
    );
}

export default Starsflexitem;

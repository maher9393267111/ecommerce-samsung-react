import React from "react";
import Sidefilter from "./accordion";
import { useState, useContext } from "react";
import { HomeContext } from "../../context/index";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";
import Ratings from "./filtercomponents/rating";
import Videofilter from "./filtercomponents/videofilter";
import Topics from "./filtercomponents/topics";
import Subcategory from "./filtercomponents/subcategory";
import Price from "./filtercomponents/price";
import Threecourse from "./threecourse";
import Middlesec from "./middlesec";
import ALLSectionBaginate from "./ALLSectionBaginate";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';





const Filter = () => {
  const { slide, setSlide } = useContext(HomeContext);

  const [closeside, setCloseside] = useState(false);


 


  return (
    <div className=" ">
      <div className=" ">
        {/* ---flex- */}
        <div className="  overflow-hidden">
          <div
            className={` flex  gap-2 t  min-h-[300px] lg:${
              slide ? "parent " : "w-[100%]"
            }  `}
          >
            {/* --filter side-- */}

            <div className={`     w-[28rem]  sm:hidden lg:block   `}>
              {/* <Sidefilter/> */}

              <Ratings />

              <hr className=" w-[200px] mt-4 mb-4" />

              <Videofilter />

              <hr className=" w-[200px] mt-4 mb-4" />

              <Topics />

              <hr className=" w-[200px] mt-4 mb-4" />

              <Subcategory />

              <hr className=" w-[200px] mt-4 mb-4" />

              <Price />
            </div>

            {/* ---all courses--------- */}

            <div
              className={` ${slide ? "w-screen " : "flex-1"}     flex-1  pb-20`}
            >
              {/* -----three courses component----- */}

              <div>
                <Threecourse />

                {/* -middle section  */}

                <hr />

                <div className=" mt-6">
                  <Middlesec />
                </div>

                {/* -all courses paginate- */}

                <div>
                  <ALLSectionBaginate />
                </div>
              </div>
            </div>
          </div>
        </div>




{/* --Drawer- */}
{ slide ?  'true ' : ' false'}

 <div className=" sm:block  lg:hidden">

<Drawer
className="       lg:hidden  ]"
            anchor="right"
            open={slide}
              //onClose={setCloseside(false)}
            sx={{
           
                width: "300px",
            }}
          >



<h1 

onClick={() => setSlide(false)}

>


Close  {slide}
</h1>

<div>

<div className={`     `}>
              {/* <Sidefilter/> */}

              <Ratings changewidth={true} />

              <hr className=" w-[333px] mt-4 mb-4" />

              <Videofilter />

              <hr className=" w-[200px] mt-4 mb-4" />

              <Topics />

              <hr className=" w-[200px] mt-4 mb-4" />

              <Subcategory />

              <hr className=" w-[200px] mt-4 mb-4" />

              <Price />
            </div>
</div>





              </Drawer> 




</div> 



      </div>
    </div>
  );
};

export default Filter;

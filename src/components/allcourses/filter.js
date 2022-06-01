import React from "react";
import Sidefilter from "./sidefilter";
import {useState, useContext} from "react";
import {HomeContext} from "../../context/index";
import {motion } from 'framer-motion'
import { Rating } from "@mui/material";
import Ratings from "./filtercomponents/rating";
const Filter = () => {

    const { slide, setSlide } = useContext(HomeContext);

  return (
    <div className=" ">
      <div
      
      className=" "
      >
       

{/* ---flex- */}
<div className="  overflow-hidden">



<div className={ ` flex  gap-2 t  min-h-[300px] ${slide ? 'parent ' : 'w-[100%]'}  `}>

{/* --filter side-- */}

<div className={ `     w-[28rem]  sm:hidden lg:block   `}>

{/* <Sidefilter/> */}

<Ratings/>


</div>





{/* ---all courses- */}

<div className={` ${slide ? 'w-screen ' : 'flex-1'}     flex-1`}>

all courses

</div>





</div>

</div>



      </div>
    </div>
  );
};

export default Filter;

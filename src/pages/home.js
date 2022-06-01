import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import CoursesSlider from "../components/coursesSlider";
import Featured from "../components/Featured";
import Textslider from "../components/Textslider";
import InstructorsSlider from "../components/instructorsSlider";

const Home = () => {
  const [right, setRight] = useState(0);

  const [activetab, setActivetab] = useState("");

  return (
    <div>

        <div>


<div>

<Navbar/>

</div>


<div className=" ml-[90px] mt-[55px] mb-10 ">




{/* courses section1 */}



<div>

  <CoursesSlider/>
</div>



<div>
  <Featured/>
</div>


<div>
  <Textslider/>
</div>

<div>
  <InstructorsSlider/>
</div>



</div>


        </div>
    </div>

  );
};

export default Home;

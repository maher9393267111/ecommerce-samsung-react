import React from "react";
import Accordion from "../accordion";
import Starsflexitem from "./starsflexitem";
const Ratings = ({changewidth}) => {
  return (
    <div>
      <Accordion title="ratings"  changewidth={changewidth}>
        
        <Starsflexitem/>
        <Starsflexitem/>
        <Starsflexitem/>
        <Starsflexitem/>
        <Starsflexitem/>
        <Starsflexitem/>




      </Accordion >
    </div>
  );
};

export default Ratings;

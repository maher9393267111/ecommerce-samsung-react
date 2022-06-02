import React from "react";
import Accordion from "../accordion";
import { useState } from "react";
const Topics = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className=" ">
        <Accordion title="Topics">
          <div className={ ` ${show ? 'overflow-visible h-auto ' :'  h-[275px] overflow-hidden '} `}>
            <div>
              <ul className=" ">
                <li> <input type="checkbox" /> Wordpress</li>
                <li> <input type="checkbox" /> Html</li>
                <li> <input type="checkbox" />Css</li>
                <li> <input type="checkbox" />React</li>
                <li> <input type="checkbox" />Vuejs</li>
                <li> <input type="checkbox" />Php</li>
                <li> <input type="checkbox" />Svelte</li>
                <li> <input type="checkbox" />alpinejs</li>
                <li> <input type="checkbox" />Tailwind</li>
                <li> <input type="checkbox" />Bootstrap</li>
                <li> <input type="checkbox" />javascript</li>
                <li><input type="checkbox" />Laravel</li>
                <li><input type="checkbox" />Angular</li>
                <li><input type="checkbox" />Django</li>
                <li><input type="checkbox" />mongodb</li>
                <li> <input type="checkbox" />Mysql</li>
                <li><input type="checkbox" />nodejs</li>
                <li> <input type="checkbox" />Redis</li>
                <li><input type="checkbox" />mongoose</li>
              </ul>
            </div>
          </div>

          <div className="  ">
        <div className={`  ${show ? '   ' : "  shadow-2xl "}  `}>
          <h3 
          
          className=" font-bold    text-purple-600  text-lg]"
          onClick={() => setShow(!show)}>
            {show ? "show less" : "Show more"}
          </h3>
        </div>
      </div>


        </Accordion>
      </div>

   
    </div>
  );
};

export default Topics;

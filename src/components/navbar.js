import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {BsSuitHeart} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { IoNotificationsOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div>
      <div>
        {/* -------above---- */}

        <div className="  bg-yellow-200 h-[77px]">
          <div className=" lg:text-center  pt-2 ml-4">
            <h1 className=" font-bold">
              Learn your way — for less
              <span className="  font-normal ml-2">
                | Get courses from ₺34.99. Sale ends June 2.
              </span>
            </h1>

            <h2 className=" text-xl font-bold">2 days left!</h2>
          </div>

          {/* -close icon- */}

          <div className=" relative">
            <div className=" absolute top-[-42px] text-[22px] right-[18px]">
              <p>
                <AiOutlineClose />
              </p>
            </div>
          </div>
        </div>

        {/* -nav start- */}

        <div>
          <div>
            <nav className=" h-[70px] border-2">
              {/* -grid- */}

              <div className=" h-full self-center grid grid-cols-12">
                {/* -left------ */}

                <div className=" col-span-7 self-center">
                  <div>
                    {/* -flex-- */}

                    <div className=" flex gap-6">
                      {/* logo */}

                      <div className=" ml-4">
                        <div>
                          <img
                            className=" h-[33px]"
                            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                            alt=""
                          />
                        </div>
                      </div>

                      {/* ---categoris- */}

                      <div>
                        <div>
                          <p className="text-[14px]  hover:text-blue-500 mt-2">
                            Categories
                          </p>
                        </div>
                      </div>

                      {/* --search input- */}

                      <div>
                        <div>
                          <div class="relative lg:w-[500px]">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg
                                class="w-5 h-5 text-gray-500 
                dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <input
                              type="text"
                              id="voice-search"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl
           
              block 
              w-full 
              pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Search for anything"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* -right----- */}

                <div className="col-span-5 h-full">

<div className=" sm:text-[8px] first-letter: lg:translate-y-[80%] sm:translate-y-[27px] sm:ml-4 lg:ml-[-44px] lg:text-[14px]">

<nav>

{/* ---nav items flex--- */}


<div className=" flex gap-12">

<ul className=" flex gap-8">

    <li>udemy Buisness </li>
    <li>Tech on Udemy</li>
    <li> 

 My Learning

    </li>
</ul>


{/* icons flex-- */}

<div>

<div>


<ul className=" sm:invisible lg:visible  flex  gap-8 text-2xl   font-bold  ">

<li><BsSuitHeart/></li>
<li className=" relative">

<AiOutlineShoppingCart/>

<span className=" absolute top-[-10px] right-[-6px] text-sm text-white bg-purple-600 text-center  rounded-full w-[22px]">
2
</span>

</li>
<li
className=" relative"
><IoNotificationsOutline/>

<span className="absolute  bg-purple-600 rounded-full top-[-2px]  righ-[-3px] w-[10px] h-[7px]">

</span>

</li>
<li>
<p className="bg-black  text-white font-bold pl-2 pr-2 mt-[-5px]   rounded-full">

    M
</p>


</li>


</ul>




</div> 




</div> 







</div>









</nav>



</div>





                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

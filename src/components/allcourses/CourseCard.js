import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className=" mb-6    shadow-xl">
      <div>
        {/* ---flex- */}

        <div className=" flex gap-6">
          {/* --left image- */}

          <img
            className=" mt-[22px] lg:w-1/3 h-full  object-cover"
            src={course.img}
            alt=""
          />

          {/* --right content-- */}

          <div className=" flex-1 mb-6">
            <div>
              {/* -header--- */}

              <div className="mt-4 ">
                {/* -flex name and price */}

                <div className=" flex justify-between">
                  <div className="w-3/4">
                    <div className=" sm:w-full lg:w-[99%]">
                      <h1 className="  text-sm  font-semibold  text-gray-900  ">
                        {course.name}
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/3 mr-6 text-right">
                    <p>
                      <div>{course.price}</div>

                      <div className=" relative">
                        <span className="    line-through">
                          {course.oldprice}
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              {/* -descreption- */}

              <div className=" pt-[-10px]">
                <div className=" sm:w-[72%] lg:w-[88%] text-[12px]">
                  <p>{course.descreption}</p>
                </div>

                {/* -insructor- */}

                <div>
                  <p className="  text-green-700   font-bold text-sm">
                    {course.instructor}
                  </p>
                </div>

                {/* -rating-- */}

                <div>
                  <div className="flex pt-[-1px]">
                    <p>{course.rating}</p>

                    {/* -stars- */}

                    <div>
                      <div className="flex stars mt-[4px] ml-2">
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/vote-reward-7/24/award_reward_rate_rating_star_full-512.png"
                          alt=""
                        />
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/vote-reward-7/24/award_reward_rate_rating_star_full-512.png"
                          alt=""
                        />
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/vote-reward-7/24/award_reward_rate_rating_star_full-512.png"
                          alt=""
                        />
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/vote-reward-7/24/award_reward_rate_rating_star_full-512.png"
                          alt=""
                        />
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/stars-rounded/250/Gold_Half_Star_5-256.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <p className="  text-[13px] mt-[1px]">
                      ({course.lectures})
                    </p>
                  </div>

                  <div className=" text-sm">
                    <span>{course.duration} Hours</span>
                    <span className=" inline-block ml-2">
                      {course.lectures} Lecture
                    </span>

                    <span className="   p-2 ml-2 inline-block">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

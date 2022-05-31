import React from 'react';
import {AiOutlineStar} from 'react-icons/ai'
import Slider from 'react-slick';
import {courses} from './coursedata'
import { useState,useEffect } from 'react';
const CoursesSlider = () => {


// if screen is md and sm show only 30 letters of description
 
const [show,setShow]=useState(false)

useEffect(()=>{

  // hen window resize execute this function
  window.addEventListener('resize',()=>{
    if (window.innerWidth < 768) {
      setShow(true)
      console.log('show',show)
    }

    else{
      setShow(false)
      console.log('show',show)
    }
  }
  )

},[])



    var settings = {
        //dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
           //   dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };





    return (
        <div className=' mb-28 pb-20'>
            
<div>


<div>
    <h1 className=' font-semibold text-[33px]'>
        Web Design Courses {show ? 'truee' : 'false'}
    </h1>

<div>
    <h2 className='text-[24px] mt-8 font-semibold'>
    Courses to get you started    
    </h2>


<div className=' mt-6'>

<div className=' border-b-2 w-[88%] pb-4 flex gap-6 font-semibold text-[15px]'>

<h3

className='relative after:absolute after:bg-slate-900 after:text-white after:rounded-full after:w-16 after:h-1 after:mr-4 after:z-10  after:top-[36px] after:left-[10px]'

> Most Popular</h3>
<h3> New</h3>
<h3> Trending</h3>


</div>


</div>

</div>


</div>


{/* ---slider start- */}


<div>
   
<div className=' container border-2 w-[80%] h-[300px] mb-[100px]'>


<div className=' ml-[33px] mt-6'>

<Slider {...settings}>

{/* ---cards start--- */}

{courses.map(course => (
    
<div className =' mr-6'>
{/* ---image- */}


<div className='w-[90%]'>
    <img className='w-full' src={course.image} alt="" />
    <div>
       

{/* -title- */}

<div className='mt-4'>

<h1 className=' font-bold text-[13px]'>

    {course.title}
</h1>



{/* -instuctor- */}

<div>
  <p className=' text-sm'>
    {course.instructor}
  </p>
</div>


</div>

    </div>
</div>

</div>



))}




    </Slider>






</div>





</div>










</div>




</div>





        </div>
    );
}

export default CoursesSlider;

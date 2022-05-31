import React from 'react';
import {AiOutlineStar} from 'react-icons/ai'
import Slider from 'react-slick';
import {courses} from './coursedata'
import { useState,useEffect } from 'react';
const CoursesSlider = () => {


// if screen is md and sm show only 30 letters of description
 
const [show,setShow]=useState(false)
const [title,setTitle]=useState('')

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
        <div className=' mb-4 pb-20'>
            
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

<div className='  border-b-2 w-[88%] pb-4 flex gap-6 font-semibold text-[15px]'>

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
   
<div className=' container border-2 w-[80%]  mb-[100px]'>


<div className=' ml-[33px] mt-6'>

<Slider {...settings}>

{/* ---cards start--- */}

{courses.map(course => (
    
<div className =' mr-6'>
{/* ---image- */}


<div className='w-[90%] group'>
    <img className='w-full' src={course.image} alt="" />
    <div>
       

{/* -title- */}

<div className='mt-4'>

<h1 className=' font-bold text-[13px]'>

    {course.title}
</h1>



{/* -instuctor- */}

<div>
  <p className=' text-[#808080] text-sm'>
    {course.instructor}
  </p>
</div>


{/* -stars- */}


<div className=' gap-4 h-[20px] flex'>

<span
className=' font-bold text-orange-400'
>4.5</span>
<span
className=' relative top-[-17px]'

>
<div>
  <img
  className='w-16 h-16'
  src="https://cdn4.iconfinder.com/data/icons/infographics-2-1/512/5_stars-256.png" alt="" />
</div>

</span>

<span
className='sm:text-sm lg:text-md'
>Students {course.students}</span>
</div>


</div>


{/* -price */}

<div className=' flex gap-8'>

  <h1 className=' mt-4'>
    {course.price}
  </h1>

<h1
className='mt-4 relative
after:absolute after:h-[2px]
after:w-[55px]
after:bg-orange-500
after:top-[11px]
after:left-[1px]
'
>
  {course.oldprice}
</h1>

</div>


{/* ------cart description absolute- */}

<div className=' relative invisible group-hover:visible '>

<div  className=' absolute  w-[300px] h-[300px] bg-white transition-all duration-500   ease-in-out
top-[-288px] border-t-0 border-t-black  z-10  left-[2px] 

'>


<div>



{/* -title- */}


<div className=' mt-8'>
  <h1 className=' font-bold text-[15px] ml-4 w-[80%]  '>
    {course.title}
  </h1>


{/* update date- */}


<div>
  <p className=' ml-4 mt-6 font-bold text-sm text-green-700'>
    {course.updatedate}
  </p>
</div>

{/* -description- */}


<div>
  <p  className='w-[75%] mt-6  ml-4 text-sm'>
    {course.description}
  </p>
</div>


{/* -sections- */}


<div>

{course.lists.map(list => (
  
<div className=' ml-4 flex gap-6 text-sm'>

<span className=' inline'>

  <img
  className=' w-6 h-6 inline-block'
  src="https://cdn1.iconfinder.com/data/icons/warnings-and-dangers/400/Warning-02-128.png" alt="" />
</span>


<div>
  <p>
  {list}
  </p>
</div>

</div>

))}


</div>


</div>






</div>





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

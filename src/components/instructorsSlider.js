import React from 'react';
import { instructors } from './instructorsdata';
import Slider from 'react-slick';
import './styles/instructor.css'
const InstructorsSlider = () => {


    var settings = {
        //dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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
              initialSlide: 3
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
        <div className=' mt-12 mb-8'>
            
<div>

{/* -header- */}


<div>
    <h1 className='sm:text-xl lg:text-2xl font-bold'>
        Popular Instructors
    </h1>
</div>


{/* -slider- */}
<div>

<Slider {...settings}>



{instructors.map((instructor, index) => {

return (

<div className=' w-[313px] lg:h-[163px] sm:min-h-[172px] '>

<div className='  mx-auto w-[90%] border-2  border-2-[#c0c0c0] h-[150px] mr-6'>
{/* -image- */}



{/* -flex- */}
<div className='flex gap-2 h-full'>


<div className=' relative h-full w-[30%]'>



<div className='absolute w-16 h-16 top-4 ml-4'>

<img

className='w-full h-full  object-cover  rounded-full   '
src={instructor.image} alt="" />

</div>

</div>



{/* info- */}
<div className='ml-[30px] mt-4 w-[70%]'>

<div>
    <h1 className='text-sm font-bold sm:w-[70%] lg:w-full '>
        {instructor.name}
    </h1>

<div>


    <p
    className='text-sm text-semibold  lg:w-full  sm:w-[70%]'
    
    >
        {instructor.coursename}
    </p>
</div>


</div>


{/* ---stars and rating--- */}


<div>


<div className='flex mt-2 sm:text-[11px] lg:text-sm'>


<p className='   text-orange-600 font-bold'>
    4.5
</p>

<div className='relative w-10 h-10'>
    <div className='w-8 top-[-8px] absolute h-8'>
        <img
        className='w-full h-full'
        
        src="https://cdn2.iconfinder.com/data/icons/flat-icons-web/40/Star_Fill-256.png" alt="" />
    </div>
</div>


<p className='font-normal text-orange-400'>
    instructor Rating
</p>

</div>


</div>



</div>




</div>


{/* ------------ */}

</div>
</div>


) })} 



    </Slider>




<div>




</div>






</div>




</div>


        </div>
    );
}

export default InstructorsSlider;

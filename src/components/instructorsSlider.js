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
              slidesToShow: 3,
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

<div>

{/* -image- */}


<div>

<img src={instructor.image} alt="" />

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

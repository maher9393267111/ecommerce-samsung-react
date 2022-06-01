import React from 'react';
import { Picture, FullsizePicture } from "react-responsive-picture";
const Featured = () => {
    return (
        <div className=' mt-[-22px]'>
            <div>


{/* -header-- */}

<div >

<h1 className=' text-2xl font-bold mb-6 '>
    Featured course
</h1>


</div>


{/* -----card */}


<div>

<div className='lg:h-[344px] sm:h-[250px] border-2 mr-8'>


<div className='h-full'>

{/* -flex- */}

<div className=' flex h-full'>

{/* left- */}
<div className='w-[44%]'>

    <div className='pl-4 w-[90%] pb-4 mt-8 h-[90%]'>

    {/* <FullsizePicture
        sources={[
          {
            srcSet: "https://img-c.udemycdn.com/course/240x135/4367234_187b_2.jpg",
            media: "(max-width: 380px)"
          },
          {
            srcSet:
              "https://img-c.udemycdn.com/course/240x135/4367234_187b_2.jpg"
          }
        ]}
        cover="height"
        center={true}
      /> */}


        <img
        className=' lg:h-full md:h-[70%] sm:h-[77%]  w-full object-cover'
        src="https://img-c.udemycdn.com/course/240x135/4367234_187b_2.jpg" alt="" />
    </div>
</div>


{/* -right- */}

<div className='flex-1'>


<div>

{/* ---header-- */}

<div className='mt-6'>


    <h1 className=' font-bold sm:text-md lg:text-lg sm:w-full lg:w-[68%]'
    >
    WordPress for beginners: Best WordPress and marketing course
    </h1>

<p 
className=' mt-6 sm:text-[13px]  sm:w-full lg:w-[68%]'

>
The only WordPress course you will ever need to create a business WordPress website and market the website online!
</p>

<h4 className='text-sm'>
    By Roby Carter
</h4>


<div className='lg:mt-4'>

<span className=' text-green-800 text-sm mr-2'>Updated</span>
<span className='  text-green-800 font-bold text-sm'>MArch 2022</span>

</div>


{/* stars- */}

<div className=' '>

<div className='flex'>

<span>4.6</span> <div

className='relative top-[-18px]'
>
<img
  className='w-16 h-16'
  src="https://cdn4.iconfinder.com/data/icons/infographics-2-1/512/5_stars-256.png" alt="" />

  
</div>
<span> (24)</span>
<span
className='text-[12px] text-[#612012] translate-y-[3px]   bg-[#fcaea0] h-[24px]  pl-2 pr-2'

>Hot&&New</span>
</div>



</div>

{/* price */}
<div>
    <p className='sm:invisible lg:visible font-bold'>
        34.99$
    </p>
</div>

<div>

</div>

</div>


</div>






</div>


</div>

</div>



</div>




</div>



            </div>
        </div>
    );
}

export default Featured;

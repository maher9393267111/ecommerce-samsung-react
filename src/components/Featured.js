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

<div className='h-[344px] border-2 mr-8'>


<div className='h-full'>

{/* -flex- */}

<div className=' flex h-full'>

{/* left- */}
<div className='w-[44%]'>

    <div className='pl-4 w-[90%] pb-4 mt-8 h-[90%]'>

    <FullsizePicture
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
      />


        {/* <img
        className=' h-full w-full object-cover'
        src="https://img-c.udemycdn.com/course/240x135/4367234_187b_2.jpg" alt="" /> */}
    </div>
</div>


{/* -right- */}

<div className='flex-1'>

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

import React from 'react';
import All from './all'
import Filter from './filter';
const Main = () => {
    return (
        <div className='mr-12'>

<div>


<div>

{/* -header- */}
<div>

<h1 className='text-2xl font-bold border-b-2 p-4 '>
    All Web Design courses
</h1>

</div>

{/* -main card- */}


<div className=' border-2 border-black p-4  '>

<div>

<span className='inline-block'>

    <div className='w-10 h-10 '>
        <img
        className='w-full h-full'
        
        src="https://cdn1.iconfinder.com/data/icons/neutro-interface/32/information-2-256.png" alt="" />
    </div>
</span>

<p className='inline-block relative top-[-12px]  left-[12px] lg:text-[16px]  sm:text-[12px] font-bold '>
    <h5>
    information alert
Not sure? All courses have a 30-day money-back guarantee
    </h5>
</p>



</div>


</div>


{/* -all courses-- */}


<div>
    <All/>
</div>



{/* --filter and all -- */}

<div>


    <Filter/>
</div>




</div>





</div>


        </div>
    );
}

export default Main;

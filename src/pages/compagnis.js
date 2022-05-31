import React from 'react';
import { compagnis } from './data';
import {AiOutlinePlusCircle}    from 'react-icons/ai';
const Compagnis = () => {
    return (
        <div className=' ml-28'>
            
<div>

<div>
    <h1>compagnis</h1>
</div>



<div>


<div>


{compagnis.map(compagni => (
    

    <div className=' mb-2 text-center '>

{/* card- */}

<div className=' relative w-[300px] h-[300px] group'>


{/* -imnage-https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBWaCHCLlxzfgfmzkwet_1U2z6GMn_6mFgQ&usqp=CAU */}

<div className=' w-full h-full'>

    <img
    className='w-full h-full  object-cover'
    
    src={compagni.image} alt="" />
</div>


{/* -ovelay- */}


<div className=' absolute top-0 bottom-0 left-0 right-0  transition duration-200 opacity-0 hover:opacity-[0.7]  bg-black' >


</div>


{/* -content- */}


<div className=''>


<div className=' text-[50px] left-[38%] top-[51%] text-white opacity-0  group-hover:opacity-[1]   transition-all duration-200  absolute'>

<p>
<AiOutlinePlusCircle/>
</p>

</div>


<div className=' absolute ml-12 font-bold text-xl text-white  bottom-[44px]'>

    <h1>
        {compagni.text}
    </h1>
</div>

</div>




</div>




    </div>

))}



</div>



</div>






</div>


        </div>
    );
}

export default Compagnis;

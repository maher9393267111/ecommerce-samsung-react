import React from 'react';
import  {menuitems} from './data';
import {useState,useEffect} from 'react';
import Submenu1 from './submenu1';
const Home = () => {

const [showsub1,setshowsub1]=useState(false);


const toggleSubmenu1 = () => {

    setshowsub1(!showsub1);
    console.log(showsub1,'toggleSubmenu1');

}



    return (
        <div>
            

<div>

<div className=' flex gap-12 ml-12 mt-12 font-bold'>

{menuitems.map((item,index)=>{

return (

<div>
    
<div>

{/* -main title--- */}


<div className=' relative'>
    <h1
onClick={toggleSubmenu1}


    
    >
    {item.main}

<div>
    
{/* -absolute - */}

<div>

<Submenu1  sub={item.submenu1} showsub1={showsub1} />

</div>
</div>


    </h1>



</div>

</div>

</div>


) } ) }


</div>


</div>



        </div>
    );
}

export default Home;

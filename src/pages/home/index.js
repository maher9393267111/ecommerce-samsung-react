import React from 'react';
import { useContext } from 'react';
import {HomeContext} from "../../context/index";
import Navbar from "../../components/navbar";				
const Home = () => {

    const { name,setName,filtredchildmenu,currentparentmenu,currentchildmenu, setCurrentchildmenu
    
    , filtersubchildmenu
    
    } = useContext(HomeContext);	
    
  
    console.log(filtersubchildmenu);



    return (
        <div>
<div>

<Navbar/>

<div>
    {/* {currentchildmenu}   */}
     { filtersubchildmenu[0]?.name}
</div>


{/* -absolute dropdown menu- */}

<div className={ ` ${filtredchildmenu === '' ? 'invisible' :''}     border-2 border-gray-400 shadow-2xl  flex gap-10`}>


<div className=' ml-8 pt-6 pb-8  text-semibold '>

<div>


<h1 className=' mb-8 text-2xl pb-2  w-[122px] border-b-2 border-b-black font-bold'>
{currentparentmenu}
</h1>


</div>


{/* -flex-- */}

<div className=' flex gap-8'>





{/* -flexleft-
 */}



<div>



{filtredchildmenu.map((item,index)=>{

return (

<div>

<h1
 onMouseOver={()=>{ setCurrentchildmenu(item.id)} }
 onMouseOut={ () => { setCurrentchildmenu('') } }





className={ `mb-4    text-md`}>
{item?.name}

</h1>

</div>


)})}



</div>

{/* -----div subchilds- */}


{/* ---right flex- */}

<div className=' child2 transition-all  duration-500'>


<div>


{ filtersubchildmenu.map((item,index)=>{


return (

<div className=' transition-all  duration-700'>

    {item.name}
</div>


)})}



</div>


</div>



</div>


{/* --flex end- */}


</div>
</div>


{/* -----absolute dropdown aend--- */}





<div>
    ds
</div>




</div>





        </div>
    );
}

export default Home;

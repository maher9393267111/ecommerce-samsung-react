import React from 'react';
import { useContext } from 'react';
import {HomeContext} from "../../context/index";
import Navbar from "../../components/navbar";				
const Home = () => {

    const { name,setName,filtredchildmenu } = useContext(HomeContext);	
    
  



    return (
        <div>
<div>

<Navbar/>


{filtredchildmenu.length}

{filtredchildmenu.map((item,index)=>{

return (

<div>

<h1>
{item.name}
{item.parentmenu}
</h1>

</div>


)})}



</div>





        </div>
    );
}

export default Home;

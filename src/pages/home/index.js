import React from 'react';
import { useContext } from 'react';
import {HomeContext} from "../../context/index";
import Navbar from "../../components/navbar";				
const Home = () => {

    const { name,setName } = useContext(HomeContext);	
    
  



    return (
        <div>
<div>

<Navbar/>

</div>





        </div>
    );
}

export default Home;

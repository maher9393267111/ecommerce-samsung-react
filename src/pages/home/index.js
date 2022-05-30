import React from 'react';
import { useContext } from 'react';
import {HomeContext} from "../../context/index";				
const Home = () => {

    const { name,setName } = useContext(HomeContext);	
    
    // change name

    const changeName = () => {
        setName("majd");

    }



    return (
        <div>

<button

onClick={ changeName }
>change name</button>


            {name}
            
        </div>
    );
}

export default Home;

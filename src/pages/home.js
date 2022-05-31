import React from 'react';
import  {useState} from 'react';
import {motion} from 'framer-motion';
import Products  from './products';
import Compagnis from './compagnis';
const Home = () => {

const [right, setRight] = useState(0);

const [activetab, setActivetab] = useState('');

    return (

        <div>


{/* -tabs-div- */}

<div className=' mt-8 ml-12 mb-8'>


<div className=' tab-wrap flex gap-8  font-bold'>




            <h1
            className=' hover:border-b-2 hover:border-b-blue-500'
           
        
            
            onClick = {() => setRight('right-[0px]')}  //0 
            
            >
                products</h1>



            <h1
  // onClick = {() => setRight('lg:right-[1444px] md:right-[800px] sm:right-[666px]')}
               onClick = {() => setRight('right-[1400px]')}  //1366
            
            >compaings</h1>


             <h1
                  onClick = {() => setRight('right-[2720px]')}
           
            
            >events</h1> 
            
            </div>


            </div>

     

<div className=' w-screen overflow-x-hidden'>





<div 
className={ ` wrapper relative 

  ${right}
 
flex 

transition-all duration-500 ease-in-out




` }

>




{/* ---products tab- */}
<div className='   min-w-full mb-12   '>



<Products />



</div>




<div className='  min-w-full   '>


<Compagnis/>

</div>



<div className=' min-w-full  bg-blue-300   '>3</div>



{/* </motion.div> */}

</div>



{right}


</div>





        </div>
    );
}

export default Home;

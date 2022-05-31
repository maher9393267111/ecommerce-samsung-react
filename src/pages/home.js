import React from 'react';
import  {useState} from 'react';
import {motion} from 'framer-motion';
const Home = () => {

const [right, setRight] = useState(0);
    return (

        <div>
            <h1
            
            onClick = {() => setRight('right-[0px]')}  //0 
            
            >
                products</h1>



            <h1
               onClick = {() => setRight('right-[1366px]')}
            
            >projects</h1>


             <h1
                  onClick = {() => setRight('right-[2720px]')}
            
            >Home</h1> 
            
            

     

<div className=' w-screen overflow-x-hidden'>





<div 
className={ ` wrapper relative 

${right}
flex 

transition-all duration-500 ease-in-out




` }

>


{/* <motion.div

// whileInView =
// {{  x:[-2, 0] }}
// transition =
// {{ duration: 1.5 }}

> */}


<div className='   min-w-full bg-green-300   '>1</div>
<div className='  min-w-full  bg-red-400   '>2</div>
<div className=' min-w-full  bg-blue-300   '>3</div>
<div className=' min-w-full  bg-green-300   '>4</div>


{/* </motion.div> */}

</div>



{right}


</div>





        </div>
    );
}

export default Home;

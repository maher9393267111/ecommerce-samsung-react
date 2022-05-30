import React from 'react';
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
const Home = () => {
const [activated, setActivated] = useState(false);


const handleactivatemenu = () => {
    setActivated(!activated);
    console.log(activated);
}


    return (
        <div>


<div>


{/* -ontainer- */}


<div className=' container fixed h-screen w-screen text-center  absolute top-1/3 mx-auto'>

<h1 className=' text-2xl'>
    Container
</h1>




</div>


{/* -hamburger-menu- btn- */}
<div
onClick={handleactivatemenu}

className=  { ` ${activated ? 'active  bg-black' :''}  menu-toggle  fixed top-6 right-0 mr-20`}>

  

 


<span

className='top'></span>
<span className='middle'></span>
<span className='bot'></span>






</div>

<div>

</div>


{/* ---overlay- */}


<div className={ `overlay ${activated ? 'open' : ''}`}>


<div className='animate-ovelay-items'>

<motion.div

animate={{ x: activated ? 0 : -220, opacity: activated ? 1 : 0 }}
transition={{ duration: 0.5, ease: "easeInOut" }}


>

helo maher
</motion.div>





</div>



</div>



</div>



            
        </div>
    );
}

export default Home;

import React from 'react';
import { useState } from "react";
const Textslider = () => {



const [activateright, setActivateright] = useState(false);


// when click on right arrow transition to right

const handleRight = () => {
    setActivateright(true);
   console.log("right go----->");
    if (activateright) {
        setActivateright(false);
        console.log("right go to zerooo----->");
    }
};



    return (
       <div>
           <div>
    
    
    
               text slider





<div>
    {/* ---left zero arrow  */}
<div className=' relative'>


{activateright  && 
<div className='absolute prev-btn'>
   <button
       onClick={handleRight}
   
   
   >prev</button>
</div>

}

{/* ----next- arrow-- */}

{ !activateright  &&

<div


className=''>
   <button
   className=' next-btn absolute'
   onClick={handleRight}
   
   >
       next
   </button>
</div>

}
</div>
</div>



<div


className=' overflow-hidden  w-screen'
>



<div className={ `cat-card grid transform  ${activateright  ? 'translate-x-[-100%]' :'transform translate-x-0'}  auto-cols-[225px]  transition duration-500  gap-8  grid-flow-col   grid-rows-2 `}>

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>
<div>13</div>
<div>14</div>
<div>15</div>
<div>16</div>
<div>17</div>
<div>18</div>
<div>19</div>
<div>20</div>






</div>


</div>




           </div>
       </div>
    );
}

export default Textslider;

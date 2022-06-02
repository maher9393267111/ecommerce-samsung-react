import React from 'react';
import {video} from './data'
import Accordion from "../accordion";
import {useState} from 'react'
const Videofilter = () => {

const [show, setShow] = useState(false)


const handleshwo = () => {

// if true slice from 0 to video.length
// if false slice from video.length to 0

const  slicevideo = show ? video.slice(0, video.length) : video.slice(0, video.length-3)

return slicevideo

}



    return (
        <div>
            
<Accordion title="video duration">

<div>


{handleshwo().map((item,index)=>{

return (

<div>

{/* ---checkbox */}

<div>

<input type="checkbox"   />

{item.hours}  <span>{item.courses}</span>

</div>



</div>



)})}


<div>  <h1 

onClick={()=>setShow(!show)}
className='  mt-2 text-purple-700 font-bold'>SHow More</h1></div>


</div>

</Accordion>


        </div>
    );
}

export default Videofilter;

import React from 'react';

const Submenu1 = ({sub,showsub1}) => {
    return (
        <div  className={`${showsub1 ?'  visible' :'   hidden'} `}>
            


{ showsub1 ? 


<>

<div>
{sub && sub.map((item,index)=>{

return (

<div>

{item.title}  {showsub1 ? 'show' : 'hide'}


</div>

)} )}

</div>

</>

  : null }

        </div>
    );
}

export default Submenu1;

import React from 'react';
import { products }  from './data';
const Products = () => {
    return (
        <div>
            
<div>

<div className=' grid grid-cols-12 ml-20'>

{products.map(product => (

<div  className=' xs:col-span-6 md:col-span-2  lg:col-span-4' >


<div >

{/* -image- */}


<div 
className=' w-[255px]  transition-all  duration-300   shadow-md   hover:shadow-2xl   mb-12 text-center h-[300px]'

>
    <img
    className='w-full h-full'
    src={product.image} alt="" />

    <div>
        <h1>
            {product.name}
        </h1>
    </div>
</div>



</div>





</div>




))}


</div>



</div>


        </div>
    );
}

export default Products;

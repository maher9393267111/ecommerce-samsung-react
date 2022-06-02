import React from 'react';
import { allcourses } from './data';
import CourseCard from './CourseCard';
const Threecourse = () => {
    return (
        <div>

            <div>

<div>


    {allcourses.slice(0,3).map(course => (
        
    <div>

<CourseCard course={course}/>

    </div>
    
    
    
    ))}
</div>





            </div>
        </div>
    );
}

export default Threecourse;

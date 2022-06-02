

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { allcourses } from './data';
//import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CourseCard from "./CourseCard";
const ALLSectionBaginate = () => {

    const [all, setAll] = useState();
    const [pageNumber, setPageNumber] = useState(0);
  
    const coursesPerPage = 4;
    const pagesVisited = pageNumber * coursesPerPage;
  
    const displayUsers = allcourses
      .slice(pagesVisited, pagesVisited + coursesPerPage)
      .map((course) => {
        return (
          <div className="card">
            <CourseCard  course={course}/>
          </div>
        );
      });


      
  const pageCount = Math.ceil(allcourses.length / coursesPerPage -1);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };




    return (
        <div>
            
            <div className="">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>




        </div>
    );
}

export default ALLSectionBaginate;

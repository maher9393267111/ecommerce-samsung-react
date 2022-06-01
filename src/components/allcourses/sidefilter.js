import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Sidefilter = ({children}) => {
    return (
        <div className='w-[66%]'>
           <div>
               
               <div>

               <Accordion
               style={{boxShadow:'none'}}
               
               >
        <AccordionSummary
          expandIcon={<BsFillArrowDownCircleFill />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        

{children}



        </AccordionDetails>
      </Accordion>
               </div>
               
               
               </div> 




        </div>
    );
}

export default Sidefilter;

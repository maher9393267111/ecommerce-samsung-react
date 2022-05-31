import React from "react";

import {products} from './data'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { autocompleteClasses } from "@mui/material";
import Products from "./products";


const Home = () => {
  const [activated, setActivated] = useState(false);

  const handleactivatemenu = () => {
    setActivated(!activated);
    console.log(activated);
  };

  return (
    <div>
      <div>
        {/* -ontainer- */}

        <div className=" container fixed h-screen w-screen text-center  absolute top-1/3 mx-auto">
          <h1 className=" text-2xl">Container</h1>
        </div>

        {/* -hamburger-menu- btn- */}
        <div
          onClick={handleactivatemenu}
          className={` ${
            activated ? "active  bg-black" : ""
          }  menu-toggle  fixed top-12 right-0 mr-20`}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bot"></span>
        </div>

        <div></div>

        {/* ---overlay- */}

        <div className={`overlay ${activated ? "open" : ""}`}>
          <div className="animate-ovelay-items">
            <motion.div
              animate={{ x: activated ? 0 : -220, opacity: activated ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              helo maher

              <FullWidthTabs />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}
        
{/* {index  === 0  && <div>
    <Products/>
</div> }  



{index  === 1  && <div>
    tab2
</div> }  




{index  === 2  && <div>
    tab3
</div> }   */}





            </Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
//   export default
   function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
    return (
      <Box sx={{  backgroundColor: 'white', width: '100vw',minHeight:'200vh' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
            sx={{  backgroundColor: 'green' }}
            
            label="Products" {...a11yProps(0)} >

            </Tab>
            <Tab label="compagnis" {...a11yProps(1)} />
            <Tab label="events" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Products/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
    );
  }
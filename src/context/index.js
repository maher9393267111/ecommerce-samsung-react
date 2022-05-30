import React, { Fragment, createContext, useReducer, useState } from "react";						
	import 	 {childmenu,parentmenu,subchildmenu } from "../pages/home/data";			
                        
                        
                        
export const HomeContext = createContext();						
                        
const HomeProvider = (props) => {						

    const [name, setName] = useState("maher");


    // curentchildmenu
    const [currentchildmenu, setCurrentchildmenu] = useState('');


// filter subchildmenu by currentchildmenu

const filtersubchildmenu = subchildmenu.filter(item => item.parentchildid === currentchildmenu);



    const [currentparentmenu, setCurrentparentmenu] = useState("");

    const [allparentmenu, setAllparentmenu] = useState(parentmenu);

// filter childmenu by current parentmenu

   
const filtredchildmenu = childmenu.filter(  (item) => {
    return item.parentmenu === currentparentmenu;
});

console.log(currentchildmenu);











return (						
<Fragment>						
<HomeContext.Provider value={{ name, setName ,currentparentmenu,setCurrentparentmenu,filtredchildmenu
,allparentmenu, setAllparentmenu,currentchildmenu, setCurrentchildmenu , filtersubchildmenu


}}>						
{props.children}						
</HomeContext.Provider>						
</Fragment>						
);						
};						
export default HomeProvider;						
                        
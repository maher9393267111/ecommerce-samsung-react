import React, { Fragment, createContext, useReducer, useState } from "react";						
	import 	 {childmenu} from "../pages/home/data";			
                        
                        
                        
export const HomeContext = createContext();						
                        
const HomeProvider = (props) => {						

    const [name, setName] = useState("maher");
    const [currentparentmenu, setCurrentparentmenu] = useState("");

// filter childmenu by current parentmenu

   
const filtredchildmenu = childmenu.filter(  (item) => {
    return item.parentmenu === currentparentmenu;
});

    







return (						
<Fragment>						
<HomeContext.Provider value={{ name, setName ,currentparentmenu,setCurrentparentmenu,filtredchildmenu}}>						
{props.children}						
</HomeContext.Provider>						
</Fragment>						
);						
};						
export default HomeProvider;						
                        
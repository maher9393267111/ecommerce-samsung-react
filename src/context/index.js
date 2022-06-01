import React, { Fragment, createContext, useReducer, useState } from "react";						
		
                        
                        
                        
export const HomeContext = createContext();						
                        
const HomeProvider = (props) => {						

    const [name, setName] = useState("maher");
    const [slide, setSlide] = useState(false);


    




   











return (						
<Fragment>						
<HomeContext.Provider value={{ name, setName ,slide, setSlide



}}>						
{props.children}						
</HomeContext.Provider>						
</Fragment>						
);						
};						
export default HomeProvider;						
                        
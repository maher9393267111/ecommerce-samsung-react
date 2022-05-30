import React, { Fragment, createContext, useReducer, useState } from "react";						
		
                        
                        
                        
export const HomeContext = createContext();						
                        
const HomeProvider = (props) => {						

    const [name, setName] = useState("maher");


    




   











return (						
<Fragment>						
<HomeContext.Provider value={{ name, setName 



}}>						
{props.children}						
</HomeContext.Provider>						
</Fragment>						
);						
};						
export default HomeProvider;						
                        
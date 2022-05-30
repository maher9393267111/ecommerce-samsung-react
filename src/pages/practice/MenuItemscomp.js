import Dropdown from "./Dropdown";
import {useState} from "react";
const MenuItems = ({ items }) => {

    const [dropdown, setDropdown] = useState(false);



 return (
  <li className="menu-items group  ">
   {items.submenu ? (
    <>
     <button type="button" 
     className=" "
     
    //  aria-expanded={dropdown ? "true" : "false"}
     //onClick={() => setDropdown(!dropdown)}
    //  onMouseEnter={() => setDropdown((prev) => !prev)}
    //  onMouseLeave={() => setDropdown((prev) => !prev)}
     
     aria-haspopup="menu"
     
     // when hover in class set to true
  //  className= {` ${'hover:' ? setDropdown(true) : setDropdown(false)}`}
  //className=    {` hover:${setDropdown(true)}`}
  >
      {items.title}{" "}
     </button>
     <Dropdown submenus={items.submenu}
      dropdown={dropdown} 
     />
    </>
   ) : (
    <a href="/#">{items.title}</a>
   )}
  </li>
 );
};

export default MenuItems;
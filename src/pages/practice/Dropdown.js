const Dropdown = ({ submenus, dropdown }) => {
    return (


<div className="    ">



     <ul className=" invisible group-hover:visible" 
     // className={` ${dropdown ? "   visible  absolute border-2 border-gray-400 w-screen left-0   min-h-[66vh] text-left   " : "  invisible"}`}
     >
      {submenus.map((submenu, index) => (
       <li  key={index} className="menu-items mt-4 ml-8 last:mb-8">
        <a href="/#">{submenu.title}</a>
       </li>
      ))}
     </ul>

     </div>
    );
   };
   
   export default Dropdown
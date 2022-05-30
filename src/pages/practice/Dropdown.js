const Dropdown = ({ submenus, dropdown }) => {
    return (
     <ul className={` ${dropdown ? "   visible" : "  invisible"}`}>
      {submenus.map((submenu, index) => (
       <li key={index} className="menu-items">
        <a href="/#">{submenu.title}</a>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown
import Itemsmenu from "./itemsmenu";
function Submenus({submenus}) {
    return (
      <ul className="nav-main-submenu">
        {submenus.map(sub => (
          <li className="nav-main-item" key={sub.title}>
            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
              <i className="nav-main-link-icon fab fa-html5"></i>
              <span className="nav-main-link-name">{sub.title}</span>
            </a>
            <Itemsmenu items={sub.subsubs}></Itemsmenu>
          </li>        
          ))}
      </ul>
    );
  } 
export default Submenus;
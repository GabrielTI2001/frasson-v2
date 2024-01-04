import Itemsmenu from "./itemsmenu";
function Submenus({submenus}) {
    return (
      <div className="ms-auto">
      <ul className="nav-main-submenu mr-0">
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
      </div>
    );
  } 
export default Submenus;
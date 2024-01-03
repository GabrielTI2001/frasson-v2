import { Dropdown, DropdownMenu, DropdownToggle, Col } from "react-bootstrap";
import Submenus from "./menus/submenus";
function Menu({item}) {
  return (
    <div className="bg-sidebar-dark p-3 push">
      <div id="horizontal-navigation-hover-normal-dark" className="d-none d-lg-block mt-2 mt-lg-0">
        <ul className="nav-main nav-main-horizontal nav-main-hover nav-main-dark">
          <li className="nav-main-item">
            <a className="nav-main-link active" href="be_ui_navigation_horizontal.html">
              <i className="nav-main-link-icon fa fa-home"></i>
              <span className="nav-main-link-name">Home</span>
            </a>
          </li>
          {item.map(menu => (
           <li className="nav-main-item" key={menu.title}>
             <a className="nav-main-link menu nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
              <i className={"nav-main-link-icon "+menu.icon}></i>
              <span className="nav-main-link-name">{menu.title}</span>
             </a>
            <Submenus submenus={menu.submenus}></Submenus>
           </li>   
          ))}
        </ul>
      </div>
     </div>
    );
  }
  export default Menu;
import { Dropdown, DropdownMenu, DropdownToggle, Col } from "react-bootstrap";
import Submenus from "./menus/submenus";
import Perfil from "./menus/perfil"
import logo from "../../assets/media/various/logo-frasson-app.png";
function Menu({item}) {
  return (
    <div className="bg-sidebar-dark p-2 row push">
      <div id="horizontal-navigation-hover-justified-dark" className="d-none d-lg-flex mt-2 mt-lg-0">
        <ul className="nav-main nav-main-horizontal nav-main-hover nav-main-dark">
          <li className="nav-main-item">
            <a className="nav-main-link active" href="">
              <img className="nav-main-link-icon" src={logo} style={{'width':'110px'}}></img>            
            </a>
          </li>
          {item.map(menu => (
           <li className="nav-main-item" key={menu.title}>
             <a className="nav-main-link menu nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="">
              <i className={"nav-main-link-icon "+menu.icon}></i>
              <span className="nav-main-link-name">{menu.title}</span>
             </a>
            <Submenus submenus={menu.submenus}></Submenus>
           </li>   
          ))}
        </ul>
        <Perfil></Perfil>
      </div>
     </div>
    );
  }
  export default Menu;
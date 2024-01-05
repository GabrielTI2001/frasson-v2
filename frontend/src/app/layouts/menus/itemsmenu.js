import { Link } from "react-router-dom";
function Itemsmenu({items}) {
    return (
     <ul className="nav-main-submenu">
        {items.map(i =>(
          <li className="nav-main-item" key={i.title}>
            <Link className="nav-main-link" to={i.link}>
              <i className={"nav-main-link-icon "+i.icon}></i>
              <span className="nav-main-link-name">{i.title}</span>
            </Link>
          </li>
        ))}
      </ul> 
    );
  }
  
export default Itemsmenu;
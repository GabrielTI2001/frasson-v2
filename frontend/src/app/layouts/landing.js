import { Outlet} from "react-router-dom";
import {Navbar} from 'react-bootstrap'
import { Helmet } from "react-helmet";
import Menu from "./menu.js";
function Landing() {
  const menus = [
  {'label': 'Menu1', 
   'submenus': [
      {'label': 'submenu1'}, 
      {'label': 'submenu2'}]
  },
  {'label': 'Menu2', 
   'submenus': [{'label': 'submenu1', 'path':''}, {'label': 'submenu2'}]},
  {'label': 'Menu3', 
   'submenus': [{'label': 'submenu1'}, {'label': 'submenu2'}]}
  ] 
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin='anonymous'/>
      </Helmet>
      <Navbar id="header" className="row">
        {menus.map(menu => (
          <Menu item={menu}></Menu>
        ))}
      </Navbar>
      <Outlet/>
    </div>
    );
  }
export default Landing;
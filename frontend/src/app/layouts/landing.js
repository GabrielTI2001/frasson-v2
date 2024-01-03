import { Outlet} from "react-router-dom";
import { Helmet } from "react-helmet";
import Menu from "./menu.js";
import "../../assets/css/oneui.css"
import "../../assets/css/index.css"

function Landing() {
  const menus = [
    {'title': 'Operacional', 'icon':'fa-solid fa-gear', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
      {'title': 'submenu2', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
      {'title': 'submenu3', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]}
    ]},
    {'title': 'Crédit Rural', 'icon':'fa-solid fa-gear', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
      {'title': 'submenu2', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]}
    ]},
    {'title': 'Ambiental', 'icon':'fa-solid fa-gear', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
    {'title': 'Serviços', 'icon':'fa-solid fa-gear', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
    {'title': 'Adm & Fin', 'icon':'fa-solid fa-gear', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
    {'title': 'Admin', 'icon':'fa-solid fa-gear', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
  ] 
  return (
    <div className="content p-2">
      <Helmet>
        <meta charSet="utf-8"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin='anonymous'/>
      </Helmet>
      <Menu item={menus}></Menu>
      <Outlet/>
    </div>
    );
  }
export default Landing;
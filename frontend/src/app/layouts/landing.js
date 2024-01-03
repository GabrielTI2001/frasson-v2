import { Outlet} from "react-router-dom";
import Menu from "./menu.js";
import "../../assets/css/oneui.css"
import "../../assets/css/index.css"

function Landing() {
  const menus = [
    {'title': 'Operacional', 'icon':'fa-solid fa-gear', 'submenus':[
      {'title': 'Análise e Processamento', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
      {'title': 'Processos Operacionais', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
      {'title': 'LITEC', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
      {'title': 'Comprovações e Alongamentos', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
    {'title': 'Crédito Rural', 'icon':'fa fa-money-bill', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
      {'title': 'submenu2', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]}
    ]},
    {'title': 'Ambiental', 'icon':'fa fa-leaf', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
    {'title': 'Serviços', 'icon':'fa fa-wrench', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
    {'title': 'Adm & Fin', 'icon':'fa fa-coins', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
    {'title': 'Admin', 'icon':'fa-solid fa-key', 'submenus':[
      {'title': 'submenu1', 'subsubs':[{'title': 'subsub1'}, {'title': 'subsub2'}]},
    ]},
  ] 
  return (
    <div className="content p-0">
      <Menu item={menus}></Menu>
      <Outlet/>
    </div>
    );
  }
export default Landing;
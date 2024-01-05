import { Outlet} from "react-router-dom";
import Menu from "./menu.js";
import "../../assets/css/oneui.css"
import "../../assets/css/index.css"

function Landing() {
  const menus = [
    {'title': 'Operacional', 'icon':'fa-solid fa-gear', 'submenus':[
      {'title': 'Análise e Processamento', 'subsubs':[
        {'title': 'Cadastros Gerais', 'link':'', 'icon':'bi bi-funnel-fill'}, 
        {'title': 'Regimes de Exploração', 'link':'', 'icon':'bi bi-gear-fill'}, 
        {'title': 'Imóveis Rurais', 'link':'', 'icon':'bi bi-signpost-fill'}
      ]},
      {'title': 'Processos Operacionais', 'subsubs':[
        {'title': 'Processos Prospects', 'link':'/pipes', 'icon':'fa-solid fa-gear'}, 
        {'title': 'Processos Produtos', 'link':'/pipes/products', 'icon':'fa-solid fa-gear'},
        {'title': 'Acompanhamento GAI', 'link':'', 'icon':'far fa-calendar-check'}
      ]},
      {'title': 'LITEC', 'subsubs':[
        {'title': 'Produção Agrícola', 'link':'', 'icon':'fa-solid fa-gear'}, 
        {'title': 'Produção Pecuária', 'link':'', 'icon':'fa-solid fa-gear'}
      ]},
      {'title': 'Comprovações e Alongamentos', 'subsubs':[
        {'title': 'Comprovações', 'link':'', 'icon':'fa-solid fa-gear'}, 
        {'title': 'Alongamentos', 'link':'', 'icon':'fa-solid fa-gear'}
      ]},
    ]},
    {'title': 'Crédito Rural', 'icon':'fa fa-money-bill', 'submenus':[
      {'title': 'submenu1', 'subsubs':[
        {'title': 'subsub1', 'link':'', 'icon':'fa-solid fa-gear'}, 
        {'title': 'subsub2', 'link':'', 'icon':'fa-solid fa-gear'}
      ]},
      {'title': 'submenu2', 'subsubs':[
        {'title': 'subsub1', 'link':'', 'icon':'fa-solid fa-gear'}, 
        {'title': 'subsub2', 'link':'', 'icon':'fa-solid fa-gear'}
      ]}
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
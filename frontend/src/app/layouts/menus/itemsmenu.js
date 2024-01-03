function Itemsmenu({items}) {
    return (
     <ul className="nav-main-submenu">
        {items.map(i =>(
          <li className="nav-main-item" key={i.title}>
            <a className="nav-main-link" href="">
              <i className="nav-main-link-icon fa fa-pencil-alt"></i>
              <span className="nav-main-link-name">{i.title}</span>
            </a>
          </li>
        ))}
      </ul> 
    );
  }
  
export default Itemsmenu;
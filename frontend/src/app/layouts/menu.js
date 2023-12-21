import { Dropdown, DropdownMenu, DropdownToggle, Col } from "react-bootstrap";
function Menu({item}) {
  return (
    <Col xxl={2} sm={2}>
      <Dropdown as="ul">
       <DropdownToggle as='span' className="cursor-pointer">{item.label}</DropdownToggle>
        <DropdownMenu>
      {item.submenus.map(i => (
         <Dropdown.Item eventKey="1">{i.label}</Dropdown.Item>
      ))}
        </DropdownMenu>
      </Dropdown>
    </Col>
    );
  }
  export default Menu;
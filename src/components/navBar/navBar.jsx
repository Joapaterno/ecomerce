import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import CartWidget from "../cartWidget/cartWidget";
import "./navBar.css";

const categorias = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];


const Navbarjsx = () => (
  
  <Navbar expand="lg" className="bg-custom my-navbar bg-indigo-400 text-white pr-8">
    <Container>
      <Navbar.Brand as={Link} to="/">
        VIP Ecommerce
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {[
            { to: "/", text: "Inicio" },
            { to: "/products", text: "Productos", className: "text-custom" },
            { to: "/nosotros", text: "Nosotros", className: "text-custom" },
          ].map((item, index) => (
            <Nav.Item key={index}>
              <Nav.Link as={Link} to={item.to} className={item.className}>
                {item.text}
              </Nav.Link>
            </Nav.Item>
          ))}
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle
              as={Nav.Link}
              to="#"
              variant="light"
              id="dropdown-categorias"
            >
              Categorías
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/products">
                Todos
              </Dropdown.Item>
              <Dropdown.Divider />
              {categorias.map((categoria, index) => (
                <Dropdown.Item
                  key={index}
                  as={Link}
                  to={`/products/${categoria}`}
                >
                  {categoria}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <CartWidget />
  </Navbar>
);

export default Navbarjsx;

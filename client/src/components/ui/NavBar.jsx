import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={"/"} href="#home">
            Home
          </Link>
          <Link to={"/coffee"} href="#coffee">
            Coffee
          </Link>
          <Link to={"/coffeeadd"} href="#coffeeadd">
            Добавить
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

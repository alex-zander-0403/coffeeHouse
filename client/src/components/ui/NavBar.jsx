import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavBar({ logoutHandler, user }) {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}

        <Navbar.Brand href="#">
          {user.status === "logged" ? user.data.name : "Guest"}
        </Navbar.Brand>

        <Nav className="me-auto">
          <Link to={"/"} href="#home">
            Home
          </Link>
          <Link to={"/coffee"} href="#coffee">
            Coffee
          </Link>
          {user.status === "logged" && (
            <Link to={"/coffeeadd"} href="#coffeeadd">
              Добавить
            </Link>
          )}
        </Nav>
      </Container>

      <Container>
        {user.status !== "logged" && (
          <>
            <Link to={"/singup"} href="#singup">
              Зарегистрироваться
            </Link>
            <Link to={"/login"} href="#login">
              Войти
            </Link>
          </>
        )}
        {user.status === "logged" && (
          <Button onClick={logoutHandler} variant="danger">
            Выйти
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

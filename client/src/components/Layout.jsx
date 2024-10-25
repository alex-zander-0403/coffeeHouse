import React from "react";
import NavBar from "./ui/NavBar";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

export default function Layout({ logoutHandler, user }) {
  return (
    <>
      <Container>
        <NavBar logoutHandler={logoutHandler} user={user}/>
        <Outlet />
      </Container>
    </>
  );
}

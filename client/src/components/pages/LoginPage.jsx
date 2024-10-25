import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function LoginPage({ loginHandler }) {
  return (
    <>
      <Form onSubmit={loginHandler}>
        <Form.Control name="email" type="text" placeholder="email" />
        {/* <Form.Control name="name" type="text" placeholder="name" /> */}
        <Form.Control name="password" type="text" placeholder="password" />
        <Button type="submit" variant="primary">
          Войти
        </Button>{" "}
        <Button variant="info">
          <Link to={"/coffee"}>Назад</Link>
        </Button>
      </Form>
    </>
  );
}

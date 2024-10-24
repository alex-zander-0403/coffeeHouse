import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export default function CoffeeAddUi({ submitHandler }) {
  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Control name="title" type="text" placeholder="title" />
        <Form.Control name="desc" type="text" placeholder="desc" />
        <Form.Control name="url" type="text" placeholder="url" />
        <Button type="submit" variant="warning">
          Подтвердить
        </Button>{" "}
        <Button variant="info">
          <Link to={"/coffee"}>Назад</Link>
        </Button>
      </Form>
    </>
  );
}

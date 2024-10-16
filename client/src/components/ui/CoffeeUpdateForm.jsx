import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CoffeeUpdateForm({ coffee, updateHandler }) {
  return (
    <>
      <Form onSubmit={(event) => updateHandler(event, coffee.id)}>
        <Form.Control
          name="title"
          defaultValue={coffee.title}
          type="text"
          placeholder="title"
        />
        <Form.Control
          name="desc"
          defaultValue={coffee.desc}
          type="text"
          placeholder="desc"
        />
        <Form.Control
          name="url"
          defaultValue={coffee.url}
          type="text"
          placeholder="url"
        />
        <Button type="submit" variant="warning">
          Подтвердить
        </Button>{" "}
      </Form>
    </>
  );
}

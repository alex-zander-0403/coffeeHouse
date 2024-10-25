import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CoffeeAddPage() {
  const navigate = useNavigate();
  //
  const submitHandler = async (event) => {
    event.preventDefault(); // предотвращение перезагрузки
    const form = event.target; // достаем данные из формы
    const formData = new FormData(form);
    const dataFromForm = Object.fromEntries(formData);
    form.reset(); // очистка полей формы

    await axios.post("api/coffee", dataFromForm);
    navigate("/coffee"); // переход обратно на /coffee
  };
  // 1:48

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

import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

export default function CoffeeAddPage() {
  const navigate = useNavigate();
  //
  const submitHandler = async (event) => {
    try {
      event.preventDefault(); // предотвращение перезагрузки
      const form = event.target; // достаем данные из формы
      const formData = new FormData(form);
      const dataFromForm = Object.fromEntries(formData);
      // проверка и прерывание
      if (!dataFromForm.title) {
        alert("title обязательно к заполнению");
        return;
      }
      form.reset(); // очистка полей формы

      await axiosInstance.post("/coffee", dataFromForm);
      navigate("/coffee"); // переход обратно на /coffee
    } catch (error) {
      console.log(error);
    }
  };

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

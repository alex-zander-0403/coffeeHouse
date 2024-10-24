import React from "react";
import CoffeeAddUi from "../ui/CoffeeAddUi";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CoffeeAddPage() {
  const navigate = useNavigate();
  //
  const submitHandler = async (event) => {
    event.preventDefault(); // предотвращение перезагрузки
    const form = event.target; // достаем данные из формы
    const formData = new FormData(form);
    const dataFromForm = Object.fromEntries(formData);
    form.reset(); // очистка полей формы

    const response = await axios.post("api/coffee", dataFromForm);
    const newCoffee = response.data;
    // 1:48
    navigate("/coffee"); // переход обратно на /coffee
  };

  return (
    <>
      <Container>
        <CoffeeAddUi submitHandler={submitHandler} />;
      </Container>
    </>
  );
}

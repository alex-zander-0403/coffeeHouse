import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CoffeeUpdateForm from "./CoffeeUpdateForm";

export default function CoffeeCard({ coffee, updateHandler }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={coffee.url} />
        <Card.Body>
          <Card.Title>{coffee.title}</Card.Title>
          <Card.Text>{coffee.desc}</Card.Text>
          <Button onClick={() => setShowForm((prev) => !prev)} variant="primary">
            {showForm ? "Закрыть" : "Редактировать"}</Button>
          {showForm && <CoffeeUpdateForm coffee={coffee} updateHandler={updateHandler}/>}
        </Card.Body>
      </Card>
    </>
  );
}

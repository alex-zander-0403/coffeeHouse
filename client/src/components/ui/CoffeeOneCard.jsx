import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link, useLocation } from "react-router-dom";

export default function CoffeeOneCard() {
  const { state } = useLocation();
  const { coffee } = state;

  return (
    <>
      <Card>
        <Row>
          <Card.Img variant="top" src={coffee.url} style={{ width: "18rem" }} />
          <Card.Body>
            <Card.Title>{coffee.title}</Card.Title>
            <Card.Text>{coffee.desc}</Card.Text>
            <Card.Text>Belong to user: {coffee.userId}</Card.Text>

            <Button variant="info">
              <Link to={"/coffee"}>Назад</Link>
            </Button>
          </Card.Body>
        </Row>
      </Card>
    </>
  );
}

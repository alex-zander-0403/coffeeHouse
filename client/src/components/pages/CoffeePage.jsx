import React, { useEffect, useState } from "react";
import CoffeeCard from "../ui/CoffeeCard";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default function CoffeePage() {
  const [currentCoffee, setCurrentCoffee] = useState([]);

  const getCoffee = async () => {
    try {
      const res = await fetch("/api/coffee"); // возвращает промис с полем status
      if (res.status === 200) {
        const coffeeFromDb = await res.json();
        setCurrentCoffee(coffeeFromDb);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoffee();
  }, []);

  const updateHandler = async (event, coffeeId) => {
    event.preventDefault();
    try {
      const dataFromForm = event.target;
      const newData = new FormData(dataFromForm);
      const dataForApi = Object.fromEntries(newData);
      const res = await axios.patch(`/api/coffee/${coffeeId}`, dataForApi);
      const newCoffee = await res.data;
      setCurrentCoffee((prev) =>
        prev.map((el) => (el.id === coffeeId ? newCoffee : el))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row>
        {currentCoffee.map((el) => (
          <CoffeeCard key={el.id} coffee={el} updateHandler={updateHandler} />
        ))}
      </Row>
    </>
  );
}

import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Container from "../../components/Container";
import ContainerItems from "../../components/ContainerItems";
import Title from "../../components/Title";
import Button from "../../components/Button";

import { InputLabel, Input, ErrorP } from "./styles";

import BurgerLogo from "../../assets/BurgerLogo.png";

const NewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  const history = useHistory();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    if (!inputOrder.current.value || !inputName.current.value) {
      setMessage("Coloque informações válidas.")
    } else {
      const { data: newOrder } = await axios.post("https://code-burger-api-node.herokuapp.com/order", {
        order: inputOrder.current.value,
        clientName: inputName.current.value
      });

      setOrders([...orders, newOrder]);
      setMessage("");
      history.push("/orders");
    }
  }

  return (
    <Container>
      <img src={BurgerLogo} alt="Logo do DevClub seguida por um hambúrguer e uma porção de batatas fritas com a palavra 'burger' escrita abaixo." />

      <ContainerItems>
        <Title>Faça seu pedido!</Title>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Ex: Mariana da Silva" />

        <ErrorP>{message}</ErrorP>

        <Button onClick={addNewOrder} isPink={true}>Novo Pedido</Button>
      </ContainerItems>
    </Container>
  )
}

export default NewOrders;

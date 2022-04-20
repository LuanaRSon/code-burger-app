import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Container from "../../components/Container";
import ContainerItems from "../../components/ContainerItems";
import Title from "../../components/Title";
import Button from "../../components/Button";

import { ListItem, OrderInfo, OrderItems, ClientName, TrashButton } from "./styles";

import Burger from "../../assets/order-img.png";
import Trash from "../../assets/trash.svg";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: allOrders } = await axios.get("https://code-burger-api-node.herokuapp.com/order");
      setOrders(allOrders);
    }
    fetchOrders();
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`https://code-burger-api-node.herokuapp.com/order/${orderId}`);
    const newOrders = orders.filter(order => order.id !== orderId);
    setOrders(newOrders);
  }

  function backToNewOrders() {
    history.push("/");
  }

  return (
    <Container>
      <img src={Burger} alt="Imagem de uma embalagem com o desenho de um hambúrguer." />

      <ContainerItems>
        <Title>Pedidos</Title>
        <ul>
          {orders.map((infoOrder) => (
            <ListItem key={infoOrder.id}>
              <OrderInfo>
                <OrderItems>{infoOrder.order}</OrderItems>
                <ClientName>{infoOrder.clientName}</ClientName>
              </OrderInfo>
              <TrashButton onClick={() => deleteOrder(infoOrder.id)}>
                <img src={Trash} alt="Ícone de uma lixeira." />
              </TrashButton>
            </ListItem>
          ))}
        </ul>

        <Button onClick={backToNewOrders}>Voltar</Button>
      </ContainerItems>
    </Container>
  )
}

export default Orders;

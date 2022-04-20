import styled from "styled-components";

export const ListItem = styled.li `
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  color: #FFFFFF;
  margin-bottom: 18px;
  min-height: 101px;  
  padding: 17px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OrderInfo = styled.div `
  display: flex;
  flex-flow: column wrap;   
  gap: 20px;
`

export const OrderItems = styled.p `
  font-size: 18px;
  font-weight: 300;  
  line-height: 21px;
  max-width: 230px;
  text-transform: capitalize;
`

export const ClientName = styled.p `
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-transform: capitalize;
`

export const TrashButton = styled.button `
  background: transparent;
  border: none;
  cursor: pointer;  
`

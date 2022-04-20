import styled from "styled-components";

export const Button = styled.button `
  background: ${props => props.isPink ? `#D93856` : `rgba(255, 255, 255, 0.14)` };
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  height: 68px;   
  font-size: 17px;
  font-weight: 900;   
  margin: 41px 0 51px 0;
` 
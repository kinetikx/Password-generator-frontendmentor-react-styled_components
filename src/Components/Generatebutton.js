import React from "react";
import { styled } from "styled-components";
import Colors from "../Colors/Colors";
const Generatebutton = () => {
  const Buttondisplay = styled.div`
  margin-top:32px;
  display:flex;
  flex-direction: row;
  background-color: ${Colors.green};
  border:2px solid ${Colors.green};
  color:${Colors.darkNavy};
  height:65px;
  align-items:center;
  justify-content: center;
  margin-bottom:16px;
  font-weight: 600;


  &:hover{
    background-color: ${Colors.darkNavy};
    color:${Colors.green};
  }
  `;

  return <Buttondisplay>GENERATE</Buttondisplay>;
};

export default Generatebutton;

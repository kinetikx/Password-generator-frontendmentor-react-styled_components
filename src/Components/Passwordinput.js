import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors/Colors';
import Copy from "../Assets/copy.svg"


const Passwordinput = () => {
  const Inputdisplay = styled.div`
    background-color: ${Colors.darkNavy};
    border: none;
    padding: 18px 32px 18px 32px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;

    & + img{
      width:aoto;
      height:aoto;
    }
  `;

  const Input = styled.h2`
    margin: 0;
    font-size: 32px;
    line-height:43px;
    font-weight: 600;
    color: ${Colors.whiteTransparent};
  `;

  return (
    <Inputdisplay>
      <Input>P4$5W0rD!</Input>
      <img width={"25px"} height={"25px"} src={Copy}/>
    </Inputdisplay>
  );
};

export default Passwordinput;
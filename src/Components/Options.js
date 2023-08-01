import React,{useContext} from "react";
import { styled } from "styled-components";
import Colors from "../Colors/Colors";
import Rangeinput from "./Rangeinput";
import Alternativeoptions from "./Alternativeoptions";
import Strength from "./Strength";
import Generatebutton from "./Generatebutton";
import DataContext from "../Store/DataContext";

const Options = () => {

  const { value  } = useContext(DataContext);

  
  const Options = styled.div`
    background-color: ${Colors.darkNavy};
    padding-right: 18px;
    padding-left: 18px;
  `;
  const Caracter = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0 26px 0;
    align-items: center;
    justify-content: space-between;
  `;
  const Span = styled.span`
    color: ${Colors.offWhite};
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  `;
  const Length = styled.span`
    color: ${Colors.green};
    font-size: 32px;
    line-height: 43px;
    font-weight: 700;
  `;

  return (
    <Options>
      <Caracter>
        <Span>Character Length</Span>
        <Length>{value}</Length>
      </Caracter>
      <Rangeinput />
      <Alternativeoptions/>
      <Strength/>
      <Generatebutton/>

    </Options>
  );
};

export default Options;

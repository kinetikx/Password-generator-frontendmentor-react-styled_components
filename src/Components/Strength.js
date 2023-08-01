import React, { useContext, useEffect } from 'react';
import { styled } from "styled-components";
import Colors from "../Colors/Colors";
import DataContext from "../Store/DataContext";


const Strengthdisplay = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 30px;
  background-color: ${Colors.darkBlue};
  justify-content: space-between;
  align-items: center;
`;
const Strengthparagraph = styled.p`
  color: ${Colors.gray};
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
`;
const Strengthweak = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Strengthh4 = styled.h4`
  color: ${Colors.offWhite};
  font-size: 24px;
  line-height: 31px;
  margin: 0;
  padding: 0;
`;

const Strengthlevel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;

const Strengthlevelelement = styled.div`
  width: 10px;
  height: 25px;
  border: 2px solid ${Colors.offWhite};
  background-color:  ${props => props.iscolor ? props.color: "transparent"};
`;



const Strength = () => {
const { strenght, setStrenght,strenghtVariable  } = useContext(DataContext);

console.log("Strenght.js",strenghtVariable)
const level = strenghtVariable.level
console.log("level:", level , "level[0]", level[0])
  return (
    <Strengthdisplay>
      <Strengthparagraph>STRENGTH</Strengthparagraph>
      <Strengthweak>
      <Strengthh4>TOO WEAK</Strengthh4>
      <Strengthlevel>
      
      
      <Strengthlevelelement color={strenghtVariable.color} iscolor={strenghtVariable.level[0]}/>
      <Strengthlevelelement color={strenghtVariable.color} iscolor={strenghtVariable.level[1]}/>
      <Strengthlevelelement color={strenghtVariable.color} iscolor={strenghtVariable.level[2]}/>
      <Strengthlevelelement color={strenghtVariable.color} iscolor={strenghtVariable.level[3]}/>
      </Strengthlevel>

      </Strengthweak>
    </Strengthdisplay>
  );
};

export default Strength;

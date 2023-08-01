import React from "react";
import { useContext } from "react";
import DataContext from "../Store/DataContext";
import { styled } from "styled-components";
import Colors from "../Colors/Colors";
import Tick from "../Assets/tick.svg";



const Alternativeoptions = () => {

  const { data, setData  } = useContext(DataContext);
  const Optionsdisplay = styled.div``;

  const Checkbox = styled.input`
    appearance: none;
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: 2px solid white;
    position: relative;
    transition: ease-in-out 0.5s;
    display: inline-block;
    cursor: pointer;
  `;

  const Optionsdisplaycol = styled.div`
    background-color: ${Colors.darkNavy};
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    gap: 12px;
    margin-top: 24px;
    cursor: pointer;

    ${Checkbox}:hover {
      border-color: ${Colors.green};
    }

    ${Checkbox}:checked {
      background-color: ${Colors.green};
      border-color: ${Colors.green};
    }

    ${Checkbox} + img {
      display: none;
      width: 2px;
      height: 2px;
    }
    ${Checkbox}:checked + img {
      display: block;
      transform: scale(8);
    }
  `;

  const Checklabel = styled.label`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Image = styled.img`
    position: absolute;
  `;

  const Checkboxparagraph = styled.span`
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
    display: flex;
    align-items: center;
  `;

const handleCheckboxChange = (index) => {
  
  // Create a new copy of the data array to avoid mutating the state directly
  const newData = [...data];
  // Toggle the tick property for the clicked option
  newData[index].tick = !newData[index].tick;
  // Update the state with the new data
  setData(newData);
};

    return (
    <Optionsdisplay>


    {data.map((andata,key)=>
      <Optionsdisplaycol>
        <Checklabel>
          <Checkbox type="checkbox"  checked={andata.tick} onChange={() => handleCheckboxChange(key)}  />
          <Image src={Tick} />
        </Checklabel>
        <Checkboxparagraph>{andata.name}</Checkboxparagraph>
      </Optionsdisplaycol>
      )}
      


    </Optionsdisplay>
  );
};

export default Alternativeoptions;
